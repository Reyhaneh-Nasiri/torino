import airaLogo from "@/assets/images/aira-logo.svg";
import caoLogo from "@/assets/images/cao-logo.svg";
import caoPaxrightsLogo from "@/assets/images/cao-paxrights-logo.svg";
import ecunionLogo from "@/assets/images/ecunion-logo.svg";
import samandehiLogo from "@/assets/images/samandehi-logo.svg";
import torinoLogo from "@/assets/images/Torino.webp";

export const SITE_CONFIG = {
  brandName: "تورینو",
  supportPhone: "021-8574",
  supportPhoneTel: "+980218574",
  copyrightText: "کلیه حقوق این وب سایت متعلق به تورینو میباشد.",
  logo: {
    src: torinoLogo,
    alt: "Torino Logo",
  },
};

export const NAVIGATION_LINKS = [
  { href: "/", label: "صفحه اصلی", active: true },
  { href: "/services", label: "خدمات گردشگری" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export const FOOTER_SECTIONS = [
  {
    title: "تورینو",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
      { label: "چرا تورینو", href: "/why-us" },
      { label: "بیمه مسافرتی", href: "/insurance" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "پشتیبانی آنلاین", href: "/support" },
      { label: "راهنمای خرید", href: "/buying-guide" },
      { label: "راهنمای استرداد", href: "/refund-guide" },
      { label: "پرسش و پاسخ", href: "/faq" },
    ],
  },
];

export const TRUST_LOGOS = [
  { id: "ecunion", src: ecunionLogo, alt: "ECUnion Trust Logo" },
  { id: "samandehi", src: samandehiLogo, alt: "Samandehi Logo" },
  { id: "aira", src: airaLogo, alt: "AIRA Logo" },
  { id: "cao", src: caoLogo, alt: "CAO Logo" },
  { id: "cao-paxrights", src: caoPaxrightsLogo, alt: "CAO Paxrights Logo" },
];
