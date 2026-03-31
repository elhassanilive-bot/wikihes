import HelpCenterPageView from '@/components/HelpCenterPageView';

export const metadata = {
  title: 'مركز المساعدة | ويكيهيس',
  description: 'ابحث في مركز مساعدة ويكيهيس عن إجابات حول الحسابات، النشر، التصنيفات، المساهمين، والدعم الفني.',
  alternates: { canonical: '/help-center' },
};

export default function HelpCenterPage() {
  return <HelpCenterPageView />;
}
