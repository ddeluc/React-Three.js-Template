import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const demomode = false;
const demobox = demomode ? styles.demo.hero : {};

const Work = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} style={demobox}>
      Work
    </section>
  );
};

export default SectionWrapper(Work, "work");