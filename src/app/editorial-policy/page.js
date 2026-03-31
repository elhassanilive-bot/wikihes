import InfoPageLayout from '@/components/InfoPageLayout';
import { footerPages } from '@/content/footerPages';

const page = footerPages.editorialPolicy;

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/editorial-policy' },
};

export default function EditorialPolicyPage() {
  return <InfoPageLayout page={page} />;
}
