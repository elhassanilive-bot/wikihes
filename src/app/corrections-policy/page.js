import InfoPageLayout from '@/components/InfoPageLayout';
import { footerPages } from '@/content/footerPages';

const page = footerPages.correctionsPolicy;

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: '/corrections-policy' },
};

export default function CorrectionsPolicyPage() {
  return <InfoPageLayout page={page} />;
}
