'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import AuthPageWordAnimation from '../../../components/AuthPageWordAnimation';
import AuthButton from '../../../components/AuthButton';

export default function SignUp() {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [activate, setActivate] = useState(false);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  useEffect(() => {
    if (activate) {
      let index = 0;

      const interval = setInterval(() => {
        if (index < alphabet.length) setName(alphabet[index]);
        if (index >= alphabet.length) {
          setName(user[0]);
          console.log();
          clearInterval(interval);
          setActivate(false); // Reset activation
        } else if (user[0] == alphabet[index]) {
          clearInterval(interval);
          setActivate(false); // Reset activation
        }
        ++index;
      }, 10); // Adjust timing for animation speed
    }
  }, [activate]);
  return (
    <AnimatePresence>
      <div className='h-[70%] text-[#F5F7F0] lg:text-black w-[500px] md:pt-20 pt-4 -translate-x-0 lg:-translate-x-[200px] '>
        <AuthPageWordAnimation user={user} name={name} suffix='ign Up' />

        <div className='w-full flex-col gap-16 pt-20 h-full flex justify-start '>
          <AuthButton />
          <form className='flex flex-col gap-6 w-full'>
            <input
              value={user}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length === 1) {
                  setActivate(true);
                } else {
                  setActivate(false);
                }
                setUser(value);
              }}
              type='text'
              placeholder='name'
            />
            <input type='text' placeholder='email' />
            <input type='text' placeholder='password' />
          </form>
          <Link
            className=' absolute bottom-0 right-0 flex text-black translate-y-10 md:translate-y-0 pr-5 flex-row-reverse'
            href={'signin'}
          >
            Already have an account {'>'}
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}
