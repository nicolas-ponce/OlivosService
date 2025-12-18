import { Link, IMG } from "./AgendarVisita_Btn.style"
import svgImg from "../../assets/svgs/AgendarVisita.svg";



export const AgendarVisita_Btn = () => {
    return (
        <Link
            aria-label="Chatear en Whatsapp"
            target="_BLANK"
            href="https://wa.me/5491127719052?text=Hola!%20Tengo%20una%20consulta,%20..."
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.96}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
        >
            <IMG src={svgImg} alt="Icono de chatear en Whatsapp" />
        </Link>
    )
}