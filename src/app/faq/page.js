import HelpCenterPageView from '@/components/HelpCenterPageView';

export const metadata = {
  title: 'مركز المساعدة | ويكيهيس',
  description: 'صفحة الأسئلة الشائعة في ويكيهيس وتضم إجابات عملية حول النشر والحسابات والمشكلات الشائعة.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return <HelpCenterPageView />;
}
