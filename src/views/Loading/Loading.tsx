"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 grid place-items-center bg-black z-50">
      <div className="text-center">
        {/* Double rotating circle loader */}
        <div className="relative w-24 h-100 mx-auto mb-4">
          {/* Outer circle (rotates clockwise) */}
          <motion.div
            className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{
              rotate: 360,
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
          
          {/* Inner circle (rotates counter-clockwise) */}
          <motion.div
            className="absolute inset-0 border-4 border-cyan-400 border-b-transparent rounded-full opacity-80"
            animate={{
              rotate: -360,
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        </div>

        {/* Loading text with animated dots */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white text-xl font-medium"
        >
          Loading
          <motion.span
            animate={{
              opacity: [0, 1, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity
              }
            }}
          >
            ...
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;