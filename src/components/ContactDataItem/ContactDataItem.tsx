import { DataInfo, DataName } from "./ContactDataItem.style";
import { motion } from "framer-motion";

interface props {
    name: string,
    info: string,
}

const ItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
    }
}


export const ContactDataItem = ({name, info}: props) => {
    return (
        <motion.div
            variants={ItemVariants}
        >
            <DataName>{name}</DataName>
            <DataInfo>{info}</DataInfo>
        </motion.div>
    )
}