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
    <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
      {/* Main centered container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Double circle loader - perfectly centered */}
          <div className="relative w-20 h-20 flex justify-center items-center">
            <motion.div
              className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full"
              animate={{
                rotate: 360,
                transition: { duration: 1, repeat: Infinity, ease: "linear" }
              }}
            />
            <motion.div
              className="absolute w-full h-full border-4 border-cyan-400 border-b-transparent rounded-full opacity-70"
              animate={{
                rotate: -360,
                transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
              }}
            />
          </div>

          {/* Loading text with animated dots */}
          <motion.h1 
            className="text-white text-2xl font-semibold mt-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 }
            }}
          >
            Loading
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                transition: { duration: 1.5, repeat: Infinity }
              }}
            >
              ...
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;


// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const Loading = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-black">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-white text-4xl font-bold flex flex-col items-center"
//       >
//         <motion.span
//           animate={{
//             rotate: [0, 360],
//             transition: { duration: 2, repeat: Infinity, ease: "linear" },
//           }}
//           className="border-4 border-blue-400 p-5 rounded-full mb-4"
//         >
//           T
//         </motion.span>
//         TECHINEUR
//         <motion.div
//           className="h-1 w-40 bg-gradient-to-r from-blue-400 to-cyan-400 mt-4"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         ></motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Loading;
