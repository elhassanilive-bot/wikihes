-- Fix: user_id compatibility for legacy schemas
-- Error solved: column "user_id" does not exist

begin;

-- ---------------------------
-- user_profiles: expose user_id alias to id
-- ---------------------------
alter table if exists public.user_profiles
  add column if not exists user_id uuid;

update public.user_profiles t
set user_id = coalesce(
  t.user_id,
  t.id,
  nullif(to_jsonb(t)->>'author_user_id','')::uuid,
  nullif(to_jsonb(t)->>'owner_id','')::uuid
)
where t.user_id is null;

create unique index if not exists user_profiles_user_id_uidx
  on public.user_profiles(user_id)
  where user_id is not null;

-- ---------------------------
-- blog_comments
-- ---------------------------
alter table if exists public.blog_comments
  add column if not exists user_id uuid;

update public.blog_comments t
set user_id = coalesce(
  t.user_id,
  nullif(to_jsonb(t)->>'author_user_id','')::uuid,
  nullif(to_jsonb(t)->>'author_id','')::uuid,
  nullif(to_jsonb(t)->>'profile_id','')::uuid
)
where t.user_id is null;

create index if not exists blog_comments_user_id_idx
  on public.blog_comments (user_id, created_at desc);

-- ---------------------------
-- blog_comment_reactions
-- ---------------------------
alter table if exists public.blog_comment_reactions
  add column if not exists user_id uuid;

update public.blog_comment_reactions t
set user_id = coalesce(
  t.user_id,
  nullif(to_jsonb(t)->>'author_user_id','')::uuid,
  nullif(to_jsonb(t)->>'author_id','')::uuid,
  nullif(to_jsonb(t)->>'profile_id','')::uuid
)
where t.user_id is null;

create index if not exists blog_comment_reactions_user_id_idx
  on public.blog_comment_reactions (user_id, created_at desc);

-- ---------------------------
-- blog_post_reactions
-- ---------------------------
alter table if exists public.blog_post_reactions
  add column if not exists user_id uuid;

update public.blog_post_reactions t
set user_id = coalesce(
  t.user_id,
  nullif(to_jsonb(t)->>'author_user_id','')::uuid,
  nullif(to_jsonb(t)->>'author_id','')::uuid,
  nullif(to_jsonb(t)->>'profile_id','')::uuid
)
where t.user_id is null;

create index if not exists blog_post_reactions_user_id_idx
  on public.blog_post_reactions (user_id, created_at desc);

-- ---------------------------
-- blog_post_bookmarks
-- ---------------------------
alter table if exists public.blog_post_bookmarks
  add column if not exists user_id uuid;

update public.blog_post_bookmarks t
set user_id = coalesce(
  t.user_id,
  nullif(to_jsonb(t)->>'author_user_id','')::uuid,
  nullif(to_jsonb(t)->>'author_id','')::uuid,
  nullif(to_jsonb(t)->>'profile_id','')::uuid
)
where t.user_id is null;

create index if not exists blog_post_bookmarks_user_id_idx
  on public.blog_post_bookmarks (user_id, created_at desc);

-- ---------------------------
-- weekly_challenge_claims (safe)
-- ---------------------------
alter table if exists public.weekly_challenge_claims
  add column if not exists user_id uuid;

commit;
