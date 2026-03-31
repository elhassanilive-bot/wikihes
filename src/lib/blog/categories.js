export const BLOG_CATEGORY_TREE = [
  {
    name: "الصحة واللياقة",
    children: [
      "تطوير الذات",
      "الوقاية من الأمراض",
      "الحمل والولادة",
      "الرضاعة الطبيعية",
      "تمارين منزلية",
      "رجيمات فعالة",
      "أخطاء في الرجيم",
      "مكملات غذائية",
      "الأكل الصحي اليومي",
      "التغذية حسب العمر",
      "تقوية المناعة",
      "القلق والتوتر",
      "الصحة الجنسية",
      "التداوي بالأعشاب",
      "النوم الصحي",
      "العناية بالبشرة",
      "العناية بالأسنان",
      "العناية بالشعر",
      "الاستحمام",
    ],
  },
  {
    name: "الأخبار",
    children: ["أخبار عاجلة", "آخر المستجدات", "ملخص اليوم", "تقارير خاصة", "سياسة", "اقتصاد", "مجتمع", "متابعات"],
  },
  {
    name: "المجتمع",
    children: ["التاريخ", "الاستثمار", "الرياضة", "السفر", "السياسة", "الفنون", "البيئة", "اقتصاد"],
  },
  {
    name: "عالم الحيوانات",
    children: [
      "تربية القطط",
      "تربية الكلاب",
      "الحيوانات المفترسة",
      "الأسماك",
      "طرق التواصل عند الحيوانات",
      "الحيوانات الذكية",
      "أغرب الحيوانات في العالم",
      "الحشرات والطيور",
      "دور الحيوانات في التوازن البيئي",
      "الحياة البرية",
      "أشرس حيوانات مفترسة في العالم",
    ],
  },
  {
    name: "البيت والأسرة",
    children: [
      "تنظيم البيت",
      "ترتيب الغرف",
      "أكلات سريعة",
      "سلوك الأطفال",
      "التعليم المبكر",
      "مشاكل أطفال وحلولها",
      "تحسين العلاقة الزوجية",
      "الرومانسية في الزواج",
      "العناية بالرضيع",
      "الرضاعة الطبيعية",
      "التغذية العائلية",
      "التوازن بين العمل والبيت",
      "تعليم الأطفال في المنزل",
    ],
  },
  {
    name: "تكنولوجيا",
    children: [
      "الذكاء الاصطناعي",
      "البرمجة وتطوير التطبيقات",
      "تطوير الويب",
      "الحوسبة السحابية",
      "البيانات الضخمة",
      "الأمن السيبراني",
      "الشبكات والاتصالات",
      "أنظمة التشغيل",
      "قواعد البيانات",
      "أجهزة الكمبيوتر والإلكترونيات",
      "الهواتف الذكية",
      "إنترنت الأشياء",
      "الواقع الافتراضي والمعزز",
      "مراجعات تقنية",
    ],
  },
  {
    name: "قضايا المرأة",
    children: [
      "اهتمامات المرأة",
      "حقوق المرأة",
      "القيادة النسائية",
      "صحة الجهاز التناسلي",
      "الحمل والولادة",
      "قصص نجاح نسائية",
      "الأمراض الشائعة لدى النساء",
      "العمل الحر لدى النساء",
      "العلاقة الزوجية",
      "تربية الأطفال",
      "حقوق المرأة في الإسلام",
      "نصائح السفر للنساء",
      "طرق التعامل مع هموم المنزل بانتظام",
    ],
  },
  {
    name: "منوعات",
    children: [
      "تنمية المهارات الشخصية",
      "إدارة الوقت والإنتاجية",
      "الثقافة المالية اليومية",
      "الصحة النفسية والحياة المتوازنة",
      "أفكار تعليمية للأسرة",
      "مهارات رقمية للحياة والعمل",
    ],
  },
  {
    name: "تفسير الأحلام",
    children: [
      "تفسير أحلام العزباء",
      "تفسير أحلام المتزوجة",
      "تفسير أحلام الحامل",
      "تفسير أحلام الرجل",
      "تفسير رؤية الحيوانات",
      "تفسير رؤية الماء",
      "تفسير رؤية الموتى",
      "تفسير رؤية الزواج",
    ],
  },
];

const CATEGORY_ALIASES = {
  "اخبار": "الأخبار",
  "الأخبار": "الأخبار",
  "البيت والعائلة": "البيت والأسرة",
  "المجتمع": "المجتمع",
  " المجتمع": "المجتمع",
  "تكنلوجيا": "تكنولوجيا",
  "التكنولوجيا": "تكنولوجيا",
  "تكنولوجيا": "تكنولوجيا",
  "قضايا المرأه": "قضايا المرأة",
  "تفسير الاحلام": "تفسير الأحلام",
  "الوقاية من الامراض": "الوقاية من الأمراض",
  "الحمل والولاده": "الحمل والولادة",
  "الرضاعه الطبيعيه": "الرضاعة الطبيعية",
  "تمارين منزليه": "تمارين منزلية",
  "رجيمات فعاله": "رجيمات فعالة",
  "اخطاء في الرجيم": "أخطاء في الرجيم",
  "مكملات غذائيه": "مكملات غذائية",
  "الاكل الصحي اليومي": "الأكل الصحي اليومي",
  "التغدية حسب العمر": "التغذية حسب العمر",
  "تقويه المناعه": "تقوية المناعة",
  "الصحه الجنسيه": "الصحة الجنسية",
  "التداوي بالاعشاب": "التداوي بالأعشاب",
  "العنايه بالبشره": "العناية بالبشرة",
  "العنايه بالاسنان": "العناية بالأسنان",
  "العنايه بالشعر": "العناية بالشعر",
};

function normalizeName(value) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  return CATEGORY_ALIASES[normalized] || normalized;
}

export function normalizeCategoryName(value) {
  return normalizeName(value);
}

export function mergeCategoryTree(baseTree = BLOG_CATEGORY_TREE, extraItems = []) {
  const grouped = new Map();

  (baseTree || []).forEach((group) => {
    const parent = normalizeName(group?.name);
    if (!parent) return;

    const children = [...new Set((group?.children || []).map(normalizeName).filter(Boolean))];
    grouped.set(parent, children);
  });

  (extraItems || []).forEach((item) => {
    const parent = normalizeName(item?.categoryParent || item?.parent || item?.name);
    const child = normalizeName(item?.category || item?.child);
    if (!parent) return;

    if (!grouped.has(parent)) {
      grouped.set(parent, []);
    }

    if (child && child !== parent) {
      const currentChildren = grouped.get(parent) || [];
      if (!currentChildren.includes(child)) {
        grouped.set(parent, [...currentChildren, child]);
      }
    }
  });

  return [...grouped.entries()].map(([name, children]) => ({
    name,
    children,
  }));
}

export function getParentCategoryOptions(tree = BLOG_CATEGORY_TREE) {
  return mergeCategoryTree(tree).map((item) => item.name);
}

export function getChildCategoryOptions(parentCategory, tree = BLOG_CATEGORY_TREE) {
  const parent = normalizeName(parentCategory);
  if (!parent) return [];

  return mergeCategoryTree(tree).find((item) => item.name === parent)?.children || [];
}

export function flattenBlogCategories(tree = BLOG_CATEGORY_TREE) {
  return mergeCategoryTree(tree).flatMap((item) => [item.name, ...item.children]);
}

export function resolveCategorySelection(parentCategory, childCategory, customParentCategory = "", customChildCategory = "") {
  const customParent = normalizeName(customParentCategory);
  const selectedParent = normalizeName(parentCategory);
  const parent = customParent || selectedParent;

  const customChild = normalizeName(customChildCategory);
  const selectedChild = normalizeName(childCategory);
  const category = customChild || selectedChild || parent;

  if (!parent) {
    return {
      categoryParent: null,
      category: null,
    };
  }

  return {
    categoryParent: parent,
    category,
  };
}
