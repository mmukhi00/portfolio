import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-cyan-200" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-t  from-transparent to-cyan-100" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#ecfeff]`}>
            Hi, I'm
            <span className="text-[#22d3ee]"> Mahima</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#ecfeff]`}>
            I enjoy developing web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute 
      xs:bottom-10 
    mt-30
   
      w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[49px] h-[35px] 
         rounded-3xl border-4
         border-secondary
         flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary "
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
