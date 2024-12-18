'use client';

import { logout } from '../actions/auth';

export default function Logout() {
  return (
    <div className='relative basis-1/3 h-full'>
      <div className='absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50' />
      <div
        onClick={() => logout()}
        className='basis-1/3 cursor-pointer bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] bx1 shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md '
      >
        Logout
      </div>
    </div>
  );
}
