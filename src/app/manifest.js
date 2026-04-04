import { site } from "@/config/site";

export default function manifest() {
  return {
    name: `${site.name} - ${site.nameEn}`,
    short_name: site.nameEn,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#111111",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icon.png?v=20260402b",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png?v=20260402b",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png?v=20260402b",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
