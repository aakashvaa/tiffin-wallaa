import { motion } from 'framer-motion';
export const spring = (mass = 2) => {
  return {
    type: 'spring',
    stiffness: 700,
    mass,
    duration: 0.8, // Adjust animation duration
    ease: 'easeInOut', // Smooth transition
    damping: 30,
  };
};

export default function AuthPageWordAnimation({
  user,
  name,
  suffix,
}: {
  user: string;
  name: string;
  suffix: string;
}) {
  return (
    <div className='md:text[3em] text-black sm:text-white lg:text-black mix-blend-difference text-3xl	 flex justify-start items-center'>
      {user.length !== 0 ? (
        <motion.p
          className='doto pr-2'
          initial={{ scale: 0, y: -100 }}
          exit={{ scale: 0, y: 10 }}
          animate={{ scale: 1.2, y: 0 }}
          transition={spring}
        >
          [{name}]
        </motion.p>
      ) : (
        <motion.p
          className='pr-1'
          initial={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={spring}
        >
          S
        </motion.p>
      )}
      <p className='tracking-wider'> {suffix} </p>
    </div>
  );
}
