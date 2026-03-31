import ContactForm from './ContactForm';

export const metadata = {
<<<<<<< HEAD
  title: 'اتصل بنا | ويكيهيس',
  description: 'تواصل مباشرة مع فريق ويكيهيس بخصوص التحرير أو الدعم أو الملاحظات العامة حول الموقع.',
=======
  title: 'اتصل بنا | ويزازو',
  description: 'تواصل مباشرة مع فريق ويزازو بخصوص التحرير أو الدعم أو الملاحظات العامة حول الموقع.',
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <section className="space-y-4 text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/45">تواصل مع فريق الموقع</p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">اتصل بنا</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
<<<<<<< HEAD
            هذه الصفحة مخصصة للتواصل مع فريق ويكيهيس. يمكنك استخدامها لطلبات الدعم، الملاحظات التحريرية،
=======
            هذه الصفحة مخصصة للتواصل مع فريق ويزازو. يمكنك استخدامها لطلبات الدعم، الملاحظات التحريرية،
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
            اقتراحات التحسين، أو أي استفسار عام يحتاج متابعة مباشرة من الفريق.
          </p>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}
