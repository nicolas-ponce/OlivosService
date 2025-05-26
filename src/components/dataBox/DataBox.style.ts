import styled from "styled-components";
import { motion } from "framer-motion";



export const DIV = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1.2rem 2.4rem;
    border-radius: 1.6rem;



    p {
        font-size: 1.6rem;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 3.2rem;
        }

        p {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 480px) {
        justify-content: center;
        align-items: center;
    }
`