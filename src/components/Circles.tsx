"use client";
import { motion } from "framer-motion";
import { spring } from "./AuthPageWordAnimation";

export default function Circles() {
  return (
    <motion.div
      initial={{ x: -10 }}
      animate={{ x: 0 }}
      transition={() => spring(1)}
      className="circle"
    ></motion.div>
  );
}
