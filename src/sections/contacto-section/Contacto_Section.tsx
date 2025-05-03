import {  useState } from "react";
import { ContactInfoContainer, Container, DataContainer, Form, FormContainer } from "./Contact_Section.style";
import { motion } from "framer-motion";

export const Contacto_Section = () => {
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

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <Container>
      <h2>CONTACTO</h2>
      <ContactInfoContainer>
        <FormContainer>
          <p>
            ¿Necesitás un presupuesto, tenés una consulta o querés coordinar una visita? Escribinos y te respondemos lo antes posible. En Olivos Service valoramos tu tiempo y estamos para ayudarte con lo que necesites.
          </p>

          {submitted ? (
            <p style={{ color: "green", fontWeight: "bold" }}>
              ¡Gracias por tu mensaje! Te contactaremos pronto.
            </p>
          ) : (
            <Form onSubmit={() => {handleSubmit}}>
              <div className={`input-group`}>
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
                  initial={{ x: 0, fontSize: "1.4rem" }}
                  animate={
                    formData.Nombre || focusedField === "Nombre"
                      ? {  x: -60, fontSize: "1.2rem"  }
                      : { x: 0, fontSize: "1.4rem" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  Nombre
                </motion.label>
              </div>

              <div className={`input-group`}>
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
                  initial={{ x: 0, fontSize: "1.4rem" }}
                  animate={
                    formData.Email || focusedField === "Email"
                      ? {  x: -60, fontSize: "1.2rem"  }
                      : { x: 0, fontSize: "1.4rem" }
                  }
                  transition={{ duration: 0.2 }}
                >
                  Email
                </motion.label>
              </div>

              <div className={formData.Telefono ? "filled" : ""}>
                <label htmlFor="telefono">Teléfono</label>
                <input
                  name="Telefono"
                  id="telefono"
                  type="tel"
                  value={formData.Telefono}
                  onChange={handleChange}
                />
              </div>
              <div className={formData.Consulta ? "filled" : ""}>
                <label htmlFor="consulta">Consulta</label>
                <textarea
                  name="Consulta"
                  id="consulta"
                  value={formData.Consulta}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </Form>
          )}
        </FormContainer>

        <DataContainer>
          <div>
            <p className="data-name">TELÉFONO</p>
            <p className="data-info">+54 9 11 2771-9502</p>
          </div>
          <div>
            <p className="data-name">EMAIL</p>
            <p className="data-info">olivosservice@gmail.com</p>
          </div>
          <div>
            <p className="data-name">DIRECCIÓN</p>
            <p className="data-info">Juan de Garay 2211, Olivos</p>
          </div>
        </DataContainer>
      </ContactInfoContainer>
    </Container>
  );
};
