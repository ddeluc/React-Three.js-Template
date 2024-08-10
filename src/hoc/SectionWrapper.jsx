import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0 }}
        className={`relative w-full h-screen mx-auto`}
      >
        <span id={idName}></span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;