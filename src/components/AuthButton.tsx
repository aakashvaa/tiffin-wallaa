'use client';

import Image from 'next/image';
import React from 'react';
import { login } from '../actions/auth';

export default function AuthButton() {
  return (
    <div className=' mx-2 sm:mx-0 flex gap-2 sm:gap-5 '>
      <div className='relative  drop-shadow-sm shadow-sm basis-1/3 h-full'>
        <div className='absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50' />
        <div
          onClick={() => login('google')}
          className='basis-1/3 cursor-pointer bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] bx1 shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md '
        >
          <Image
            src='./images/google.svg'
            alt='google'
            width={20}
            height={30}
          />
        </div>
      </div>
      <div className='relative  drop-shadow-sm shadow-sm basis-1/3 h-full'>
        <div className='absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50' />
        <div
          onClick={() => login('github')}
          className='basis-1/3 cursor-pointer bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] bx1 shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md '
        >
          <Image
            src='./images/github.svg'
            alt='github'
            width={20}
            height={30}
          />
        </div>
      </div>

      <div
        className='relative drop-shadow-sm shadow-sm
        basis-1/3 h-full'
      >
        <div className='absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50' />
        <div
          onClick={() => login('facebook')}
          className='basis-1/3 cursor-pointer bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] bx1 shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md '
        >
          <Image src='./images/meta.svg' alt='meta' width={20} height={30} />
        </div>
      </div>
    </div>
  );
}
