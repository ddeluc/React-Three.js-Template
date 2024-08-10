import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const demomode = false;
const demobox = demomode ? styles.demo.hero : {};

const Contact = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} style={demobox}>
      Contact
    </section>
  );
};

export default SectionWrapper(Contact, "contact");