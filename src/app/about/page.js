export const metadata = {
<<<<<<< HEAD
  title: 'عن ويكيهيس',
  description: 'تعرف على هوية ويكيهيس، منهجه التحريري، وطبيعة المحتوى الذي يقدمه للقارئ العربي.',
=======
  title: 'عن ويزازو',
  description: 'تعرف على هوية ويزازو، منهجه التحريري، وطبيعة المحتوى الذي يقدمه للقارئ العربي.',
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  alternates: { canonical: '/about' },
};

const pillars = [
  {
    title: 'موقع محتوى عربي واضح',
<<<<<<< HEAD
    text: 'ويكيهيس يركز على تقديم الأخبار والمقالات والتحليلات عبر واجهة سهلة وسريعة، بحيث يصل القارئ إلى الموضوع الذي يهمه من دون ازدحام أو تشتيت.',
=======
    text: 'ويزازو يركز على تقديم الأخبار والمقالات والتحليلات عبر واجهة سهلة وسريعة، بحيث يصل القارئ إلى الموضوع الذي يهمه من دون ازدحام أو تشتيت.',
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  },
  {
    title: 'تنوع في التغطية',
    text: 'لا يقتصر الموقع على الأخبار العامة فقط، بل يشمل التقنية والذكاء الاصطناعي والرياضة والاقتصاد والتاريخ والفنون وغيرها من المجالات التي يحتاجها جمهور متنوع.',
  },
  {
    title: 'مساحة للمساهمين',
    text: 'يوفر الموقع صفحة للمساهمين تتيح إرسال المقالات للمراجعة، ما يفتح الباب أمام الأصوات الجديدة مع الحفاظ على مراجعة تحريرية قبل النشر.',
  },
  {
    title: 'سياسات أكثر شفافية',
<<<<<<< HEAD
    text: 'نعتبر صفحات الدعم والسياسات جزءاً من تجربة الموقع نفسها، لذلك نعمل على جعلها مرتبطة فعلاً بطريقة عمل ويكيهيس وليس كنصوص عامة منفصلة عن المنتج.',
=======
    text: 'نعتبر صفحات الدعم والسياسات جزءاً من تجربة الموقع نفسها، لذلك نعمل على جعلها مرتبطة فعلاً بطريقة عمل ويزازو وليس كنصوص عامة منفصلة عن المنتج.',
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  },
];

const sections = [
  {
    eyebrow: 'فكرة الموقع',
<<<<<<< HEAD
    title: 'لماذا تم بناء ويكيهيس؟',
    text:
      'الهدف من ويكيهيس هو تقديم موقع عربي حديث يوازن بين سرعة الوصول إلى الخبر وبين إمكانية قراءة مواد أعمق وأكثر ترتيباً. لذلك بنيت الصفحة الرئيسية على هيئة مجلة رقمية مرنة، مع إبراز التصنيفات، والمواد المميزة، والمساهمين.',
=======
    title: 'لماذا تم بناء ويزازو؟',
    text:
      'الهدف من ويزازو هو تقديم موقع عربي حديث يوازن بين سرعة الوصول إلى الخبر وبين إمكانية قراءة مواد أعمق وأكثر ترتيباً. لذلك بنيت الصفحة الرئيسية على هيئة مجلة رقمية مرنة، مع إبراز التصنيفات، والمواد المميزة، والمساهمين.',
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  },
  {
    eyebrow: 'ماذا نقدم',
    title: 'منصة تحريرية وليست مجرد صفحة أخبار',
    text:
<<<<<<< HEAD
      'يعرض ويكيهيس محتوى متنوعاً يشمل الأخبار السريعة، المقالات، التحليلات، التصنيفات المتخصصة، وصفحات المساهمين، مع أدوات إدارية تتيح إضافة المقالات وإدارتها ونشرها بطريقة منظمة.',
=======
      'يعرض ويزازو محتوى متنوعاً يشمل الأخبار السريعة، المقالات، التحليلات، التصنيفات المتخصصة، وصفحات المساهمين، مع أدوات إدارية تتيح إضافة المقالات وإدارتها ونشرها بطريقة منظمة.',
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
  },
  {
    eyebrow: 'كيف نفكر',
    title: 'الوضوح أهم من التضخم',
    text:
      'بدلاً من تكديس صفحات عامة لا تخدم القارئ، نفضل صفحات تشرح الأقسام، وتوضح السياسة التحريرية، وتبين آلية النشر والتصحيح. هذا يجعل التذييل نفسه جزءاً مفيداً من تجربة الموقع لا مجرد مساحة روابط مكررة.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 text-right">
              <p className="text-sm font-extrabold tracking-[0.4em] text-red-700">عن الموقع</p>
<<<<<<< HEAD
              <h1 className="text-5xl font-black leading-[1.4] text-slate-950 sm:text-6xl">ويكيهيس مساحة عربية للأخبار والمقالات والتحليلات المنظمة</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                يعرض ويكيهيس محتوى تحريري متنوعاً عبر بنية واضحة تساعد القارئ على متابعة الجديد، واكتشاف التصنيفات، والعودة إلى الكتّاب والمساهمين بسهولة.
=======
              <h1 className="text-5xl font-black leading-[1.4] text-slate-950 sm:text-6xl">ويزازو مساحة عربية للأخبار والمقالات والتحليلات المنظمة</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                يعرض ويزازو محتوى تحريري متنوعاً عبر بنية واضحة تساعد القارئ على متابعة الجديد، واكتشاف التصنيفات، والعودة إلى الكتّاب والمساهمين بسهولة.
>>>>>>> f7c21ba (Rename site to Wikihes and update branding)
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#faf8f3] p-8">
              <p className="text-sm font-extrabold tracking-[0.25em] text-slate-500">مرتكزات أساسية</p>
              <div className="mt-6 space-y-4">
                {pillars.map((item) => (
                  <article key={item.title} className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                    <h2 className="text-lg font-black text-slate-950">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.32)]">
              <p className="text-sm font-extrabold tracking-[0.22em] text-red-700">{section.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950">{section.title}</h2>
              <p className="mt-4 max-w-5xl text-base leading-8 text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
