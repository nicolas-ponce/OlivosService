import { useState } from "react";
import {
  BackgroundDiv,
  ContactBtn,
  Container,
  Description,
  GradientOverlay,
  Img,
  ImgDiv,
  TextContainer,
  Title,
  VolverDiv
} from "./ServiceCard.style";
import { AnimatePresence, motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: React.ReactNode | string;
}

export const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickExit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleClickContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
        <BackgroundDiv
            onClick={handleClickExit}
            className={isOpen ? "open" : ""}
        />
      <Container
        className={isOpen ? "open" : "container"}
        layout
        transition={{ layout: { 
          duration: isOpen ? 0.3 : 0.1,
          type: "linear"
        } }}
        onClick={handleClickContainer}
      >
        <ImgDiv
            as={motion.div}
            layout
            transition={{ layout: {
              duration: isOpen ? 0.3 : 0.1,
              type: "linear"
            }}}
            className={isOpen ? "open" : ""}
        >
          <Img
            as={motion.img}
            layout
            transition={{ layout: {
              duration: isOpen ? 0.3 : 0.1,
              type: "linear"
            },
            duration: 0.3,
            }}
            whileHover={!isOpen ? { scale: 1.05, filter: "grayscale(0)" } : {}}
            className={isOpen ? "open" : ""}
            style={{ filter: isOpen ? "none" : "grayscale(1)" }}
            src={image}
            alt={title} />
          {!isOpen && (
            <>
              <GradientOverlay />
              <Title className="title">{title}</Title>
            </>
          )}
        </ImgDiv>

        <TextContainer className={isOpen ? "open" : ""}>
        <AnimatePresence>
            {isOpen && (
                <>
                    <Title
                        layout="position"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1, transition: { duration: .5 } }}
                        exit={{ opacity: 0, transition: { duration: 0 } }}
                        className="open"
                    >{title}</Title>
                    <Description
                        layout="position"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1, transition: { duration: .7 } }}
                        exit={{ opacity: 0, transition: { duration: 0 } }}
                    >{description}</Description>
                </>
            )}
        </AnimatePresence>
        </TextContainer>
        <ContactBtn
          className={isOpen ? "open" : ""}
        >
          <p>Contactarse</p>
        </ContactBtn>

        <VolverDiv
          className={isOpen ? "open" : ""}
          onClick={handleClickExit}
        />
      </Container>
    </>
  );
};
