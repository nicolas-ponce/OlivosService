import CountUp from "react-countup";
import { DIV } from "./DataBox.style";

interface DataBoxProps {
    number: string;
    text: string;
    darkBck: boolean;
    delayMotion: number;
}

export const DataBox: React.FC<DataBoxProps> = ({ number, text, darkBck, delayMotion }) => {

    return (
        <DIV
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: delayMotion }}
            style={{
                backgroundColor: darkBck ? "#7296E4" : "rgba(114, 150, 228, 0.1)",
                color: darkBck ? "#F8F9FF" : "#121212",
            }}
        >
            <h3 style={{fontWeight: "bold"}}>
                +<CountUp start={0} end={parseInt(number)} duration={1.5} separator="," delay={delayMotion} />
            </h3>
            <p
                style={{
                    color: darkBck ? "#F8F9FF" : "#121212",
                    fontSize: "1.6rem",
                }}
            >{text}</p>
        </DIV>
    )
}