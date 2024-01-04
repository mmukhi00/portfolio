import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services, aboutMe } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[150px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-[30px]  xs:p-[0px] p-[0.7px] green-pink-gradient rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-cyan-500 border-[2.5px] border-cyan-200 rounded-[20px] xl:w-[250px] h-[50px] sm:w-[120px] xs:w-[120px] xs:flex-wrap flex  justify-center items-center"
        >
          <h3 className="text-white text-[25px] sm:text-[15px] xs:text-[15px] selection:font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="m-20  text-secondary text-[17px] max-w-10xl leading-[30px] "
        >
          {aboutMe.desc}
        </motion.p>
      </motion.div>

      <div className=" mt-20 flex justify-evenly items-center gap-20 sm:flex-wrap xs:flex-wrap sm:gap-10 xs:gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
