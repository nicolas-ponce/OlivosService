import { useState } from "react";
import { OrangeLink_Btn } from "../../components/orangeLink_btn/OrangeLink_Btn"
import { AnswerText, Container, FaqDiv, QuestionBox, QuestionTextDiv, Separator, TextDiv } from "./Faq_Section.style"
import { AnimatePresence, motion } from "framer-motion";



export const Faq_Section = () => {

    const [isActiveQuestion, setIsActiveQuestion] = useState<number | null>(null);

    const questions = [
        {
            id: 1,
            question: "¿Cuál es el costo total de una instalación o desinstalación de un aire acondicionado?",
            answer: "El costo total de la instalación/desinstalación de un aire acondicionado puede variar según varios factores, como el tipo de unidad que posee, el tamaño del área a enfriar y los requisitos específicos del trabajo. Generalmente, es recomendable solicitar una evaluación en el lugar para obtener un presupuesto más preciso. Este presupuesto es completamente gratuito, asi que no dude en consultarnos."
        },
        {
            id: 2,
            question: "¿Cuál es su horario de atención? ¿Ofrecen servicios fuera del horario laboral o en emergencias?",
            answer: "Nuestro horario de atención es de lunes a viernes de 9:00 a.m. a 20:00 p.m. Sin embargo, entendemos que pueden surgir emergencias fuera de este horario. Por ello, ofrecemos servicios fuera del horario laboral y en situaciones de emergencia, con un equipo disponible las 24 horas del día, los 7 días de la semana. Puedes contactarnos en cualquier momento para asistirte."
        },
        {
            id: 3,
            question: "¿Cuánto tiempo lleva la instalación de un aire acondicionado?",
            answer: "El tiempo de instalación de un aire acondicionado puede variar según el tipo de unidad y la complejidad del trabajo. En general, una instalación estándar puede llevar entre 2 y 4 horas. Sin embargo, si se requieren trabajos adicionales, como la instalación de conductos o modificaciones eléctricas, el tiempo puede aumentar."
        },
        {
            id: 4,
            question: "¿Cuál es el proceso de trabajo para realizar una instalación o servicio?",
            answer: "Nuestro proceso de trabajo para una instalación o servicio comienza con una evaluación detallada de tus necesidades y del entorno. Luego, programamos una visita para inspeccionar el sitio y discutir las opciones disponibles. Una vez acordados los detalles, nuestro equipo procede con la instalación o el servicio acorde a los estándares de calidad, supervisando cada etapa y realizando pruebas finales para garantizar su correcto funcionamiento."
        }
    ]


    return (
        <Container>
            <TextDiv>
                <h2>PREGUNTAS FRECUENTES</h2>
                <p>Sabemos que a la hora de contratar un servicio surgen dudas. Por eso, reunimos las preguntas más comunes para ayudarte a resolverlas rápido y sin vueltas. Si no encontrás lo que buscás, no dudes en escribirnos. Estamos para ayudarte.</p>
                <OrangeLink_Btn
                    href="#"
                    name="Contactarse"
                />
            </TextDiv>
            <FaqDiv>
                {questions.map((q) => (
                    <QuestionBox key={q.id}>
                        <QuestionTextDiv onClick={() => {setIsActiveQuestion(isActiveQuestion === q.id ? null : q.id)}}>
                            <h4>{q.question}</h4>
                            {isActiveQuestion === q.id ?
                                (
                                    <p>-</p>
                                ) : 
                                (
                                    <p>+</p>
                                )
                            }
                        </QuestionTextDiv>
                        <AnimatePresence>
                            {isActiveQuestion === q.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0, transition: { duration: 0.1 } }}
                                >
                                    <AnswerText>{q.answer}</AnswerText>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Separator />
                    </QuestionBox>
                ))}
            </FaqDiv>

        </Container>
    )
}