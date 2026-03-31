import InfoPageLayout from '@/components/InfoPageLayout';
import { footerPages } from '@/content/footerPages';

const page = footerPages.contribute;

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/contribute' },
};

export default function ContributePage() {
  return <InfoPageLayout page={page} />;
}
