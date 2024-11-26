'use client';
import { motion } from 'framer-motion';
import { spring } from './AuthPageWordAnimation';

export default function Circles() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={() => spring(0)}
        className='circle'
      ></motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={() => spring(0.6)}
        className='circle2'
      ></motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={() => spring(0.7)}
        className='circle3'
      ></motion.div>
    </>
  );
}
