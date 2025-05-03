import './App.css'
import { SectionIndicatorDiv } from './components/sectionIndicatorDiv/SectionIndicatorDiv'
import { Navbar_Layout } from './layouts/navbar_layout/Navbar_Layout'
import { Alcance_Section } from './sections/alcance-section/Alcance_Section'
import { Contacto_Section } from './sections/contacto-section/Contacto_Section'
import { Faq_Section } from './sections/faq-section/Faq_Section'
import { Hero_Section } from './sections/hero-section/Hero_Section'
import { Servicios_Section } from './sections/servicios-section/Servicios_Section'

function App() {
  return <>
    <Navbar_Layout />
    <Hero_Section />

    <SectionIndicatorDiv subtitle="Servicios Que Ofrecemos" />
    <Servicios_Section />

    <SectionIndicatorDiv subtitle="Alcance de Nuestros Servicios" />
    <Alcance_Section />

    <SectionIndicatorDiv subtitle="Sobre Nosotros" />

    <SectionIndicatorDiv subtitle="Preguntas Frecuentes" />
    <Faq_Section />

    <SectionIndicatorDiv subtitle="Contacto" />
    <Contacto_Section />
    
  </>
}

export default App
