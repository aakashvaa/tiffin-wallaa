'use client';
import Logout from '@/components/Logout';
import { ROLE } from '@/constant';
import { RoleType } from '@/types/role';
import { forceSessionUpdate } from '@/utils/foredSessionUpdate';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Home() {
  const handleRoleSelection = async (role: RoleType) => {
    try {
      await axios.post('/api/user/select-role', {
        role,
      });
      // Update the token with the new role => forced refresh (trigger)
      await forceSessionUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col  justify-between h-screen min-h-screen'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeIn' }}
        className='m-24'
      >
        welcome to the virtual food canteen list
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -50 }}
        layout
        id='select role'
        className=' flex mx-4 rounded-t-md shadow-md p-24 shadow-black/20 items-center justify-around h-1/3 w-full bg-background tracking-wider'
      >
        <button
          onClick={() => handleRoleSelection(ROLE.CUSTOMER)}
          title='If you want tiffin service '
          className='border-2 px-10 py-3 rounded-md drop-shadow text-slate-800 bg-secodaryBackground active:drop-shadow'
        >
          CUSTOMER
        </button>
        <button
          onClick={() => handleRoleSelection(ROLE.PROVIDER)}
          title='If you want to provide tiffin service'
          className='border-2 px-10 py-3 rounded-md text-slate-800 bg-secodaryBackground drop-shadow active:drop-shadow'
        >
          PROVIDER
        </button>
      </motion.div>
      <Logout />
    </div>
  );
}
