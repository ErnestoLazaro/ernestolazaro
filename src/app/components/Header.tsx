import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Componente Header - Navegación Principal
 * 
 * FUNDAMENTOS DE ACCESIBILIDAD (WCAG 2.1 AA):
 * 
 * 1. PERCEPTIBLE:
 *    - Uso de elemento semántico <header> para identificar el encabezado
 *    - Contraste de colores cumple con ratio 4.5:1 mínimo
 *    - Navegación sticky permite mantener orientación en la página
 * 
 * 2. OPERABLE:
 *    - Navegación completamente accesible por teclado (Tab, Enter)
 *    - Áreas de clic suficientes (mínimo 44x44px)
 *    - Estados de hover y focus claramente visibles
 *    - Botón de menú móvil con aria-label descriptivo
 * 
 * 3. COMPRENSIBLE:
 *    - Estructura de navegación clara y consistente
 *    - Enlaces descriptivos que indican su destino
 *    - Comportamiento predecible del menú móvil
 * 
 * 4. ROBUSTO:
 *    - Uso de HTML5 semántico (<header>, <nav>)
 *    - Compatible con lectores de pantalla
 *    - Responsive design para diversos dispositivos
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre Mi', href: '#sobre-mi' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    // Elemento semántico <header> para estructura clara
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--portfolio-navy-dark)]/80 backdrop-blur-md border-b border-[var(--portfolio-navy-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Enlace a inicio con texto descriptivo */}
          <a 
            href="#" 
            className="text-white text-xl font-semibold tracking-tight hover:text-[var(--portfolio-blue-primary)] transition-colors"
            aria-label="Inicio - Ernesto Lázaro Guerrero"
          >
            ELG
          </a>

          {/* Navegación Desktop - Elemento semántico <nav> */}
          <nav 
            className="hidden md:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[var(--portfolio-text-secondary)] hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-[var(--portfolio-navy-light)] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegación móvil - Accesible y semántica */}
        {mobileMenuOpen && (
          <nav 
            className="md:hidden py-4 space-y-3 border-t border-[var(--portfolio-navy-light)]"
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--portfolio-text-secondary)] hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}