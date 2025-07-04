"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="p-[2px] rounded-md bg-gradient-to-tr from-blue-100 via-white to-blue-100">
          <motion.div 
            className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300 bg-white/30 backdrop-blur-[4px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/devflowo-logo.svg`}
              alt="DevFlowo Logo"
              width={36}
              height={36}
              className="w-7 h-7 drop-shadow-sm"
              priority
            />
          </motion.div>
        </div>
        <motion.span 
          className="text-xl font-bold text-gray-800 tracking-tight"
          whileHover={{ color: "#3b82f6" }}
        >
          DevFlowo
        </motion.span>
      </Link>
    </div>
  );
};

export default Logo; 