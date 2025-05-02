import { OrangeLinkBtnStyledLink } from "./OrangeLink_Btn.style";


interface OrangeLink_BtnProps {
    href: string;
    name: string;
}


export const OrangeLink_Btn = ({href, name}: OrangeLink_BtnProps) => {
    return (
        <>
            <OrangeLinkBtnStyledLink href={href} rel="noopener noreferrer">{name}</OrangeLinkBtnStyledLink>
        </>
    )
}