
"use client";
import AuthPageWordAnimation from "@/components/AuthPageWordAnimation";
import Github from "@/components/icons/Github";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignUp() {
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
      <div className="h-[80%] text-[#F5F7F0] lg:text-black w-[500px] md:pt-28 pt-4 -translate-x-0 lg:-translate-x-[300px] ">
        <AuthPageWordAnimation user={user} name={name} suffix="ign Up" />

        <div className="w-full flex-col gap-16  h-full flex justify-center ">
          <div className=" mx-2 sm:mx-0 flex gap-2 sm:gap-5 ">
            <div className="relative basis-1/3 h-full">
              <div className="absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50" />
              <div className="basis-1/3 bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md ">
                <Image
                  src="./images/google.svg"
                  alt="google"
                  width={20}
                  height={30}
                />
              </div>
            </div>
            <div className="relative basis-1/3 h-full">
              <div className="absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50" />
              <div className="basis-1/3 bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md ">
                <Image
                  src="./images/github.svg"
                  alt="github"
                  width={20}
                  height={30}
                />
              </div>
            </div>

            <div className="relative basis-1/3 h-full">
              <div className="absolute w-full h-full rounded-xl  lg:bg-[#66666630] blur-sm   -z-50" />
              <div className="basis-1/3 bg-[#F5F7F0] lg:bg-[rgba(255,255,255,0.4)] shadow-sm flex backdrop-blur-3xl justify-center drop-shadow-sm    py-3 rounded-md ">
                <Image
                  src="./images/linkedin.svg"
                  alt="linked"
                  width={20}
                  height={30}
                />
              </div>
            </div>
          </div>
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
          <Link className=" flex text-black translate-y-10 md:translate-y-0 pr-5 flex-row-reverse" href={"signin"}>
           Already have an account {">"}
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}
