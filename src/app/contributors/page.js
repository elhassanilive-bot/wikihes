import ContributorHub from "@/components/blog/ContributorHub";
import { BLOG_CATEGORY_TREE } from "@/lib/blog/categories";
import { listContributorsPublic } from "@/lib/blog/posts";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata = {
  title: "المساهمون",
<<<<<<< HEAD
  description: "جميع المساهمين والناشرين في ويكيهيس مع إمكانية إرسال المقالات للمراجعة.",
=======
  description: "جميع المساهمين والناشرين في ويزازو مع إمكانية إرسال المقالات للمراجعة.",
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  alternates: { canonical: "/contributors" },
};

export default async function ContributorsPage() {
  const { contributors } = await listContributorsPublic({ limit: 300 });

  return <ContributorHub contributors={contributors} categoryTree={BLOG_CATEGORY_TREE} />;
}
