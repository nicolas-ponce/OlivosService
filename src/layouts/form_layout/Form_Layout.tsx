import { useState } from "react";
import { Form, FormContainer, FormInfo, SuccessMsg } from "./Form_Layout.style";
import { motion } from "framer-motion";



export const Form_Layout = () => {


    const FormVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    }

    const FormItemVariants = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0},
    }

    const [formData, setFormData] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
        Consulta: "",
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
        e.preventDefault();
    
        const form = new FormData();
        for (const key in formData) {
          form.append(key, formData[key as keyof typeof formData]);
        }
    
        try {
          const response = await fetch("https://formspree.io/f/mwkdzzwk", {
            method: "POST",
            body: form,
            headers: {
              Accept: "application/json",
            },
          });
    
          if (response.ok) {
            setSubmitted(true);
            setFormData({
              Nombre: "",
              Email: "",
              Telefono: "",
              Consulta: "",
            });
          } else {
            alert("Error al enviar. Por favor intentá de nuevo.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Ocurrió un error inesperado.");
        }
      };
    
      const [focusedField, setFocusedField] = useState<string>("");


    return (
        <FormContainer>
          <FormInfo
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: .2}}
            viewport={{ once: true }}
          >
            ¿Necesitás un presupuesto, tenés una consulta o querés coordinar una visita? Escribinos y te respondemos lo antes posible. En Olivos Service valoramos tu tiempo y estamos para ayudarte con lo que necesites.
          </FormInfo>

            <Form
                variants={FormVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                onSubmit={handleSubmit}
            >
              <motion.div
                variants={FormItemVariants}
                className={`input-group`}
                >
                <input
                  name="Nombre"
                  id="nombre"
                  type="text"
                  value={formData.Nombre}
                  onChange={handleChange}
                  required
                  onFocus={() => setFocusedField("Nombre")}
                  onBlur={() => setFocusedField("")}
                />
                <motion.label
                  htmlFor="nombre"
                  initial={{ x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }}
                  animate={
                    formData.Nombre || focusedField === "Nombre"
                      ? {  x: -60, fontSize: "1.2rem", color: "#121212"  }
                      : { x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  Nombre
                </motion.label>
              </motion.div>

              <motion.div
                className={`input-group`}
                variants={FormItemVariants}
                >
                <input
                  name="Email"
                  id="email"
                  type="email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  onFocus={() => setFocusedField("Email")}
                  onBlur={() => setFocusedField("")}
                />
                <motion.label
                  htmlFor="email"
                  initial={{ x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }}
                  animate={
                    formData.Email || focusedField === "Email"
                      ? {  x: -60, fontSize: "1.2rem", color: "#121212"  }
                      : { x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  Email
                </motion.label>
              </motion.div>

              <motion.div
                className={`input-group`}
                variants={FormItemVariants}
                >
                <input
                  name="Telefono"
                  id="telefono"
                  type="tel"
                  value={formData.Telefono}
                  onChange={handleChange}
                  required
                  onFocus={() => setFocusedField("Telefono")}
                  onBlur={() => setFocusedField("")}
                />
                <motion.label
                  htmlFor="telefono"
                  initial={{ x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }}
                  animate={
                    formData.Telefono || focusedField === "Telefono"
                      ? {  x: -60, fontSize: "1.2rem", color: "#121212"  }
                      : { x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  Telefono
                </motion.label>
              </motion.div>

              <motion.div
                className={`input-group`}
                variants={FormItemVariants}
                >
                <motion.textarea
                  name="Consulta"
                  id="consulta"
                  value={formData.Consulta}
                  onChange={handleChange}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.style.height = "auto";
                    el.style.height = el.scrollHeight + "px";
                  }}
                  required
                  onFocus={() => setFocusedField("Consulta")}
                  onBlur={() => setFocusedField("")}
                />
                <motion.label
                  htmlFor="consulta"
                  initial={{ x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }}
                  animate={
                    formData.Consulta || focusedField === "Consulta"
                      ? {  x: -60, fontSize: "1.2rem", color: "#121212"  }
                      : { x: 0, fontSize: "1.4rem", color: "rgb(88, 88, 88)" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  Consulta
                </motion.label>
              </motion.div>
                

              {submitted && 
              <SuccessMsg
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1 }}
              >
                ¡Gracias por tu mensaje! Te contactaremos pronto.
              </SuccessMsg>
              }




              <motion.button
                variants={FormItemVariants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              type="submit">Enviar</motion.button>
            </Form>
        </FormContainer>
    )
}