import { Home, Info, Phone, Plane } from "lucide-react";

export const MENU_ITEMS = [
  {
    href: "/",
    label: "صفحه اصلی",
    icon: Home,
    active: true,
  },
  {
    href: "/services",
    label: "خدمات گردشگری",
    icon: Plane,
  },
  {
    href: "/about",
    label: "درباره ما",
    icon: Info,
  },
  {
    href: "/contact",
    label: "تماس با ما",
    icon: Phone,
  },
];
