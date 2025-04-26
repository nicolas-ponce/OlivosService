import './App.css'
import { SectionIndicatorDiv } from './components/sectionIndicatorDiv/SectionIndicatorDiv'
import { Navbar_Layout } from './layouts/navbar_layout/Navbar_Layout'
import { Hero_Section } from './sections/hero-section/Hero_Section'
import { Servicios_Section } from './sections/servicios-section/Servicios_Section'

function App() {
  return <>
    <Navbar_Layout />
    <Hero_Section />

    <SectionIndicatorDiv subtitle="Servicios Que Ofrecemos" />
    <Servicios_Section />

    <SectionIndicatorDiv subtitle="Alcance de Nuestros Servicios" />

    <SectionIndicatorDiv subtitle="Sobre Nosotros" />

    <SectionIndicatorDiv subtitle="Preguntas Frecuentes" />

    <SectionIndicatorDiv subtitle="Contacto" />
    
  </>
}

export default App
