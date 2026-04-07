-- Wikihes project isolation on shared blog tables
-- Goal: prevent mixing posts between multiple blog projects in same Supabase

begin;

-- 1) Add project discriminator column
alter table if exists public.blog_posts
  add column if not exists project_key text;

update public.blog_posts
set project_key = coalesce(project_key, 'legacy')
where project_key is null;

alter table public.blog_posts
  alter column project_key set not null;

create index if not exists blog_posts_project_key_idx
  on public.blog_posts (project_key, status, published_at desc);

create index if not exists blog_posts_project_slug_idx
  on public.blog_posts (project_key, slug);

-- 2) Views dedicated to Wikihes only
create or replace view public.wikihes_blog_posts as
select *
from public.blog_posts
where project_key = 'wikihes';

create or replace view public.wikihes_blog_post_assets as
select a.*
from public.blog_post_assets a
join public.blog_posts p on p.id = a.post_id
where p.project_key = 'wikihes';

create or replace view public.wikihes_blog_post_links as
select l.*
from public.blog_post_links l
join public.blog_posts p on p.id = l.post_id
where p.project_key = 'wikihes';

create or replace view public.wikihes_blog_comments as
select c.*
from public.blog_comments c
join public.blog_posts p on p.id = c.post_id
where p.project_key = 'wikihes';

-- 3) Helper table for CSV slug tagging
create table if not exists public.wikihes_import_slugs (
  slug text primary key
);

-- After uploading CSV slugs into wikihes_import_slugs, run:
-- update public.blog_posts p
-- set project_key = 'wikihes'
-- from public.wikihes_import_slugs s
-- where p.slug = s.slug;

-- 4) Optional safeguard function (use in app/API for inserts)
create or replace function public.wikihes_set_project_key()
returns trigger
language plpgsql
as $$
begin
  new.project_key := 'wikihes';
  return new;
end;
$$;

drop trigger if exists trg_wikihes_set_project_key on public.blog_posts;
create trigger trg_wikihes_set_project_key
before insert on public.blog_posts
for each row
when (new.project_key is null)
execute function public.wikihes_set_project_key();

commit;
