import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";


const demobox = demomode ? styles.demo.title : {};

const Title = () => {
  const titleEng = "Hannya";
  const titleJap = "般若"

  return (
    <motion.a 
      className={`text-white text-[36px] font-bold 
      cursor-pointer block overflow-hidden whitespace-nowrap relative`} 
      style={demobox}
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        variants={{
          initial: { opacity: 1, y: 0 },
          hovered: { opacity: 0 },
        }}
        transition={{
          duration: 0.1
        }}
      >
        {titleEng}
      </motion.div>
      <motion.div
        className={`absolute inset-0 text-red-500`}
        variants={{
          initial: { opacity: 0, x: 0 },
          hovered: { opacity: 1, x: "25%" },
        }}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2
        }}
      >
        {titleJap}
      </motion.div>      
    </motion.a>
  )
}

export default Title;