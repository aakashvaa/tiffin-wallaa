'use client';
import { ROLE } from '@/constant';
import { useEffect, useState } from 'react';
import { useTypedSession } from '@/utils/useTypedSession';
import { logout } from '@/actions/auth';
import {
  commonNavbar,
  consumersNavbar,
  NavbarItemType,
  providersNavbar,
} from '@/types/navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { data: session } = useTypedSession();
  const pathname = usePathname();

  const navbarItems =
    session?.user.role === ROLE.CONSUMER ? consumersNavbar : providersNavbar;
  const [active, setActive] = useState<string>(pathname);
  // console.log(active, pathname);

  const onClickHandler = (name: string) => {
    setActive(name);
  };
  return (
    <div className='flex flex-col justify-between  p-5 gap-2'>
      <div className='flex flex-col gap-2'>
        {navbarItems.map((navbarItem) => (
          <NavbarCard
            navbarItem={navbarItem}
            isActive={navbarItem.href === active}
            key={navbarItem.href}
            onClick={onClickHandler}
          />
        ))}
      </div>
      <div className=''>
        {commonNavbar.slice(1).map((navbarItem) => (
          <NavbarCard
            navbarItem={navbarItem}
            isActive={navbarItem.href === active}
            key={navbarItem.href}
            onClick={onClickHandler}
          />
        ))}
        <NavbarCard
          navbarItem={commonNavbar[0]}
          isActive={commonNavbar[0].href === active}
          key={commonNavbar[0].href}
          onClick={() => logout()}
        />
      </div>
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
    <Link
      href={navbarItem.href}
      className={`p-2 w-[250px] whitespace-nowrap flex-shrink flex gap-5 items-center rounded-md cursor-pointer ${isActive && 'bg-white/70 shadow-button-light  '} `}
      onClick={() => onClick(navbarItem.href)}
    >
      <navbarItem.icon size={18} />
      {navbarItem.name}
    </Link>
  );
};
