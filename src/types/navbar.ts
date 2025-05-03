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
    href: '/',
    icon: LayoutDashboardIcon,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartSpline,
  },
  {
    name: 'Menu',
    href: '/menu',
    icon: Menu,
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
    name: 'Profile',
    href: '/profile',
    icon: User,
  },
];
export { providersNavbar, consumersNavbar, commonNavbar };
export type { NavbarItemType };
