"use client";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import internal from "stream";

const spring = {
  type: "spring",
  stiffness: 700,
  mass: 3,
  duration: 0.8, // Adjust animation duration
  ease: "easeInOut", // Smooth transition
  damping: 30,
};

export default function SignIn() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [activate, setActivate] = useState(false);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

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
      <div className="h-full w-[500px] pt-36 -translate-x-[300px] p-4">
        <div className="text-[3em] flex justify-start items-center">
          {user.length !== 0 ? (
            <motion.p
              className="doto pr-2"
              initial={{ scale: 0, y: -100 }}
              exit={{ scale: 0, y: 10 }}
              animate={{ scale: 1.2, y: 0 }}
              transition={spring}
            >
              [{name}]
            </motion.p>
          ) : (
            <motion.p
              className="pr-1"
              initial={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={spring}
            >
              S
            </motion.p>
          )}
          <p className="tracking-wider">ign In</p>
        </div>
        <div className="w-full h-full flex justify-center pt-24">
          <form className="flex flex-col gap-6 w-full">
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
              type="text"
              placeholder="name"
            />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
          </form>
        </div>
      </div>
    </AnimatePresence>
  );
}
