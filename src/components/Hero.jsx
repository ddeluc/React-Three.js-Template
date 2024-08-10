import { styles } from "../styles";
import { HannyaCanvas } from "./canvas";
import Card from "./Card";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.hero : {};

const Hero = ({ active }) => {

  return (
    <section className={`relative w-full h-screen mx-auto`} style={demobox}>      

      <Card active={active} />

      <HannyaCanvas active={active} />
              
    </section>
  );
};

export default Hero;