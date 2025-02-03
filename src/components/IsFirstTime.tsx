'use client';

import { useEffect } from 'react';

const IsFirstTime = () => {
  useEffect(() => {
    const isFirstTime = localStorage.getItem('isFirstTime');
    if (isFirstTime) {
    }
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen'></div>
  );
};

export default IsFirstTime;
