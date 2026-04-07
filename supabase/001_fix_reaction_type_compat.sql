-- Fix: missing reaction_type compatibility
-- Error solved: column "reaction_type" does not exist
-- Error solved: missing FROM-clause entry for table "public"

begin;

-- -----------------------------------------------------
-- blog_post_reactions
-- -----------------------------------------------------
create table if not exists public.blog_post_reactions (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null,
  user_id uuid not null,
  reaction_type text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_post_reactions
  add column if not exists reaction_type text;

-- backfill safely from legacy columns if any
update public.blog_post_reactions t
set reaction_type = coalesce(
  t.reaction_type,
  nullif((to_jsonb(t)->>'type'), ''),
  case
    when lower(coalesce((to_jsonb(t)->>'is_like'), '')) = 'true' then 'like'
    when lower(coalesce((to_jsonb(t)->>'is_like'), '')) = 'false' then 'dislike'
    else null
  end,
  'like'
)
where t.reaction_type is null;

alter table public.blog_post_reactions
  alter column reaction_type set default 'like';

alter table public.blog_post_reactions
  alter column reaction_type set not null;

alter table public.blog_post_reactions
  drop constraint if exists blog_post_reactions_reaction_type_check;

alter table public.blog_post_reactions
  add constraint blog_post_reactions_reaction_type_check
  check (reaction_type in ('like','dislike'));

create index if not exists blog_post_reactions_post_id_idx
  on public.blog_post_reactions (post_id, reaction_type, created_at desc);

-- -----------------------------------------------------
-- blog_comment_reactions
-- -----------------------------------------------------
create table if not exists public.blog_comment_reactions (
  id uuid primary key default gen_random_uuid(),
  comment_id uuid not null,
  user_id uuid not null,
  reaction_type text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_comment_reactions
  add column if not exists reaction_type text;

update public.blog_comment_reactions t
set reaction_type = coalesce(
  t.reaction_type,
  nullif((to_jsonb(t)->>'type'), ''),
  case
    when lower(coalesce((to_jsonb(t)->>'is_like'), '')) = 'true' then 'like'
    when lower(coalesce((to_jsonb(t)->>'is_like'), '')) = 'false' then 'dislike'
    else null
  end,
  'like'
)
where t.reaction_type is null;

alter table public.blog_comment_reactions
  alter column reaction_type set default 'like';

alter table public.blog_comment_reactions
  alter column reaction_type set not null;

alter table public.blog_comment_reactions
  drop constraint if exists blog_comment_reactions_reaction_type_check;

alter table public.blog_comment_reactions
  add constraint blog_comment_reactions_reaction_type_check
  check (reaction_type in ('like', 'dislike'));

create index if not exists blog_comment_reactions_comment_id_idx
  on public.blog_comment_reactions (comment_id, reaction_type);

commit;
