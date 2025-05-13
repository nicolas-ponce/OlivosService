import { Container, Logo, Track } from "./BrandSlider_Layout.style"
import whirlpool_img from "../../assets/imgs/brands/whirlpool.png"
import samsung_img from "../../assets/imgs/brands/samsung.png"
import philco_img from "../../assets/imgs/brands/philco.png"
import lg_img from "../../assets/imgs/brands/lg.png"
import electrolux_img from "../../assets/imgs/brands/electrolux.png"
import daewoo_img from "../../assets/imgs/brands/daewoo.png"
import sanyo_img from "../../assets/imgs/brands/sanyo.png"
import drean_img from "../../assets/imgs/brands/drean.png"
import longvie_img from "../../assets/imgs/brands/longvie.png"
import bgh_img from "../../assets/imgs/brands/bgh.png"
import gafa_img from "../../assets/imgs/brands/gafa.png"
import kohinoor_img from "../../assets/imgs/brands/koh-i-noor.png"


export const BrandSlider_Layout = () => {

    const imgArray = [
        whirlpool_img,
        samsung_img,
        philco_img,
        lg_img,
        electrolux_img,
        daewoo_img,
        sanyo_img,
        drean_img,
        longvie_img,
        bgh_img,
        gafa_img,
        kohinoor_img
    ]

    return (
        <Container>
            <Track>
                {[...imgArray, ...imgArray].map((img, i) => (
                    <Logo key={i} src={img} alt={img} />
                ))}
            </Track>

        </Container>
    )

}
