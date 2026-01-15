import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

/**
 * Componente App - Aplicación Principal del Portfolio
 * 
 * FUNDAMENTOS DE ACCESIBILIDAD (WCAG 2.1 AA):
 * 
 * Este portfolio cumple con los 4 principios fundamentales de accesibilidad web
 * establecidos por W3C en las pautas WCAG 2.1 nivel AA:
 * 
 * 1. PERCEPTIBLE:
 *    - Jerarquía de encabezados correcta en toda la aplicación
 *    - Contraste de colores cumple ratio mínimo 4.5:1
 *    - Todas las imágenes tienen texto alternativo descriptivo
 *    - La información no depende únicamente del color
 * 
 * 2. OPERABLE:
 *    - Navegación completa por teclado (Tab, Enter, Escape)
 *    - Todas las áreas interactivas tienen mínimo 44x44px
 *    - Estados focus claramente visibles en elementos interactivos
 *    - No hay trampas de teclado
 *    - Navegación consistente en toda la aplicación
 * 
 * 3. COMPRENSIBLE:
 *    - Lenguaje claro en español
 *    - Navegación predecible y coherente
 *    - Etiquetas y atributos ARIA descriptivos
 *    - Estructura lógica de contenido
 * 
 * 4. ROBUSTO:
 *    - HTML5 semántico (<header>, <main>, <footer>, <section>)
 *    - Compatible con lectores de pantalla (NVDA, JAWS, VoiceOver)
 *    - Funciona en múltiples navegadores
 *    - Responsive design para diversos dispositivos
 * 
 * ESTRUCTURA DE LANDMARKS:
 * - <header> - Navegación principal
 * - <main> - Contenido principal de la aplicación
 * - <section> - Secciones individuales (Hero, About, Portfolio, Skills, Contact)
 * - <footer> - Información de copyright
 * 
 * Para más información sobre accesibilidad, consultar /ACCESSIBILITY.md
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-navy-dark)]">
      {/* Navegación principal - Landmark para lectores de pantalla */}
      <Header />
      
      {/* Contenido principal - Landmark para lectores de pantalla */}
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Pie de página - Landmark para lectores de pantalla */}
      <Footer />
    </div>
  );
}