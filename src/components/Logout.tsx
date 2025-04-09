'use client';

import { logout } from '@/actions/auth';
import { LogOut } from 'lucide-react';

export default function Logout() {
  return (
    <div className='absolute top-0 right-0 m-10 basis-1/3 w-32'>
      <div className='absolute  rounded-xl lg:bg-[#333333] blur-md -z-10 ' />
      <div
        onClick={() => logout()}
        className=' cursor-pointer bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] bx1 shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm py-3 rounded-md '
      >
        <LogOut />
      </div>
    </div>
  );
}
