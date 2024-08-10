// *** NOT BEING USED ***
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { landingHover } from "../utils/motion";
import { suffixWords } from "../constants";
import { demomode } from "../constants";


const demobox = demomode ? styles.demo.landing : {};

const Landing = ({ setOnLanding }) => {
  const [suffixIndex, setSuffixIndex] = useState(null);

  const changeSuffix = () => {
    setSuffixIndex((suffixIndex + 1) % 7);
  }

  const handleClick = () => {
    setOnLanding(false);
  }

  return (
    <section className={`relative w-full h-screen mx-auto bg-black-600`}>
      <div 
        className={`absolute inset-0 top-[120px] bottom-[120px] max-w-8xl px-40 mx-auto flex flex-row items-center`}
        style={demobox}
      >
        <div className='flex-row justify-center flex items-center'>
          <motion.div 
            className='flex-row justify-center flex items-center' 
            style={demobox}
            whileHover="hover"
            onHoverStart={() => {
              changeSuffix();
            }}
            onClick={() => {
              handleClick();
            }}
          >
            <motion.p
              variants={landingHover("up")}
              className='text-white text-[90px] font-bold cursor-pointer flex ' 
              style={demobox}
            >
              Spez
            </motion.p>
            <motion.p 
              variants={landingHover("down")}
              className='text-white text-[90px] font-bold cursor-pointer flex ' 
              style={demobox}
            >
              zare&nbsp;
            </motion.p>
          </motion.div>
          <p 
            className='text-white text-[90px] font-bold cursor-pointer flex ' 
            style={demobox}
          >
            {suffixWords[suffixIndex]}
          </p>          
        </div>
      </div>
    </section>
  );
};

export default Landing;