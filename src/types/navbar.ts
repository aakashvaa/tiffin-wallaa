import type { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';
import {
  Brackets,
  ChartSpline,
  History,
  LayoutDashboard,
  LayoutDashboardIcon,
  LogOut,
  Menu,
  User,
  Box as Channel,
  MessageCircle as Feedback,
} from 'lucide-react';

interface NavbarItemType {
  name: string;
  href: string;
  icon:
    | LucideIcon
    | ComponentType<{ size?: number | string; className?: string }>;
}
const providersNavbar: NavbarItemType[] = [
  {
    name: 'Dashboard',
    href: '/provider/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    name: 'Analytics',
    href: '/provider/analytics',
    icon: ChartSpline,
  },
  {
    name: 'Menu',
    href: '/provider/menu',
    icon: Menu,
  },
  {
    name: 'Channel',
    href: '/provider/channel',
    icon: Channel,
  },
];

const consumersNavbar: NavbarItemType[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'addChannels',
    href: '/addChannels',
    icon: Brackets,
  },
  {
    name: 'history',
    href: '/history',
    icon: History,
  },
];
const commonNavbar: NavbarItemType[] = [
  {
    name: 'Logout',
    href: '/logout',
    icon: LogOut,
  },
  {
    name: 'Feedback',
    href: '/feedback',
    icon: Feedback,
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: User,
  },
];
export { providersNavbar, consumersNavbar, commonNavbar };
export type { NavbarItemType };
