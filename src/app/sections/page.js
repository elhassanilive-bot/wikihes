import InfoPageLayout from '@/components/InfoPageLayout';
import { footerPages } from '@/content/footerPages';

const page = footerPages.sections;

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/sections' },
};

export default function SectionsPage() {
  return <InfoPageLayout page={page} />;
}
