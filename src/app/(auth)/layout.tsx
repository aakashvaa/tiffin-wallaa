import Circles from '@/components/Circles';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: 'Sign In',
  description: 'tiffin wala auth page',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-[100dvw] relative overflow-hidden h-screen flex justify-center lg:justify-end items-center'>
      <Circles />
      <Image
        src='/images/logo.svg'
        alt='app-logo'
        width={100}
        priority
        height={20}
        className='absolute right-2 top-2 w-[100px] h-auto  sm:top-10 sm:right-10 drop-shadow-xl'
      />
      {children}
    </div>
  );
}
