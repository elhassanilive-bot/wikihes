-- Safe fix for missing user_id without assuming table existence
-- Handles: relation does not exist + column does not exist

begin;

-- 1) Ensure user_profiles exists (minimal fallback)
create table if not exists public.user_profiles (
  id uuid primary key,
  email text,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) user_profiles.user_id alias
alter table public.user_profiles add column if not exists user_id uuid;
update public.user_profiles set user_id = id where user_id is null;
create unique index if not exists user_profiles_user_id_uidx on public.user_profiles(user_id) where user_id is not null;

-- 3) Safe helper for user_id backfill on existing tables only
DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'public.blog_comments',
    'public.blog_comment_reactions',
    'public.blog_post_reactions',
    'public.blog_post_bookmarks',
    'public.weekly_challenge_claims'
  ]
  LOOP
    IF to_regclass(t) IS NOT NULL THEN
      EXECUTE format('alter table %s add column if not exists user_id uuid', t);

      -- Fill from common legacy columns if they exist
      EXECUTE format($f$
        update %s x
        set user_id = coalesce(
          x.user_id,
          nullif(to_jsonb(x)->>'author_user_id','')::uuid,
          nullif(to_jsonb(x)->>'author_id','')::uuid,
          nullif(to_jsonb(x)->>'profile_id','')::uuid,
          nullif(to_jsonb(x)->>'owner_id','')::uuid
        )
        where x.user_id is null
      $f$, t);

      -- index if created_at exists
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = split_part(t,'.',1)
          AND table_name = split_part(t,'.',2)
          AND column_name = 'created_at'
      ) THEN
        EXECUTE format('create index if not exists %I on %s (user_id, created_at desc)', replace(t,'.','_') || '_user_id_idx', t);
      ELSE
        EXECUTE format('create index if not exists %I on %s (user_id)', replace(t,'.','_') || '_user_id_idx', t);
      END IF;
    END IF;
  END LOOP;
END $$;

commit;
