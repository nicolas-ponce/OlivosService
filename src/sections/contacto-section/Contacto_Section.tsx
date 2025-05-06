import { ContactInfoContainer, Container, DataContainer } from "./Contact_Section.style";
import { ContactDataItem } from "../../components/ContactDataItem/ContactDataItem";
import { Form_Layout } from "../../layouts/form_layout/Form_Layout";
import { motion } from "framer-motion";

export const Contacto_Section = () => {

  const DataVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }


  return (
    <Container>
      <motion.h2
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{ once: true, amount: 1}}
      >CONTACTO</motion.h2>
      <ContactInfoContainer>

        <Form_Layout />

        <DataContainer
          variants={DataVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1}}
        >
          <ContactDataItem
            name="TELÉFONO"
            info="+54 9 11 2771-9502"
          />
          <ContactDataItem
            name="EMAIL"
            info="olivosservice@gmail.com"
          />
          <ContactDataItem
            name="DIRECCIÓN"
            info="Juan de Garay 2211, Olivos"
          />
        </DataContainer>
        
      </ContactInfoContainer>
    </Container>
  );
};
