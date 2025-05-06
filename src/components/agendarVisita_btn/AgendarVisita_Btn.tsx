import { Link, IMG } from "./AgendarVisita_Btn.style"
import svgImg from "../../assets/svgs/AgendarVisita.svg";



export const AgendarVisita_Btn = () => {
    return (
        <Link
            aria-label="Chatear en Whatsapp"
            target="_BLANK"
            href="https://wa.me/5491127719502?text=Hola!%20Tengo%20una%20consulta,%20..."
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.96}}
        >
            <IMG src={svgImg} alt="Icono de chatear en Whatsapp" />
        </Link>
    )
}