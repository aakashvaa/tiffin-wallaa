'use client';
import { auth } from '@/auth';
import { ROLE } from '@/constant';
import {
  Brackets,
  ChartSpline,
  History,
  LayoutDashboard,
  LayoutDashboardIcon,
  LucideProps,
  Menu,
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { ReactNode, useState } from 'react';
import { useTypedSession } from '@/utils/useTypedSession';

interface NavbarItemType {
  name: string;
  href: string;
  icon: ReactNode;
}
const providersNavbar: NavbarItemType[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <ChartSpline size={18} />,
  },
  {
    name: 'Menu',
    href: '/menu',
    icon: <Menu size={18} />,
  },
];

const consumersNavbar: NavbarItemType[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: 'addChannels',
    href: '/addChannels',
    icon: <Brackets size={18} />,
  },
  {
    name: 'history',
    href: '/history',
    icon: <History size={18} />,
  },
];

export default function Navbar() {
  const [active, setActive] = useState<string>('/');
  const { data: session } = useTypedSession();
  const onClickHandler = (name: string) => {
    setActive(name);
  };
  const navbarItems =
    session?.user.role === ROLE.CUSTOMER ? consumersNavbar : providersNavbar;
  return (
    <div className='flex flex-col p-5 gap-2'>
      {navbarItems.map((navbarItem) => (
        <NavbarCard
          navbarItem={navbarItem}
          isActive={navbarItem.href === active}
          key={navbarItem.href}
          onClick={onClickHandler}
        />
      ))}
    </div>
  );
}

const NavbarCard = ({
  navbarItem,
  isActive,
  onClick,
}: {
  navbarItem: NavbarItemType;
  isActive: boolean;
  onClick: (name: string) => void;
}) => {
  return (
    <div
      className={`p-3 w-[250px] whitespace-nowrap flex-shrink flex gap-5 items-center rounded-md cursor-pointer ${isActive && 'bg-white/70 shadow-md drop-shadow-sm  '} `}
      onClick={() => onClick(navbarItem.href)}
    >
      {navbarItem.icon}
      {navbarItem.name}
    </div>
  );
};
