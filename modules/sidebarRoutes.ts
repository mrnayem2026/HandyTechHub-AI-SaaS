import {
  LucideIcon,
  Computer,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react";

interface Route {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
}

const routes: Route[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Explore Others SaaS",
    icon: Computer,
    color: "text-pink-700",
    href: "/explore-others-saas-products",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default routes;
