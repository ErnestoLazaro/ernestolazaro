/**
 * Componente Footer - Pie de Página
 * 
 * FUNDAMENTOS DE ACCESIBILIDAD (WCAG 2.1 AA):
 * 
 * 1. PERCEPTIBLE:
 *    - Elemento semántico <footer> claramente identificable
 *    - Contraste de texto adecuado sobre fondo
 *    - Separación visual clara del contenido principal
 * 
 * 2. OPERABLE:
 *    - Contenido navegable por teclado
 *    - Enlaces (si se agregan) accesibles
 * 
 * 3. COMPRENSIBLE:
 *    - Información de copyright clara
 *    - Estructura simple y directa
 * 
 * 4. ROBUSTO:
 *    - HTML5 semántico (<footer>)
 *    - Footer landmark para lectores de pantalla
 *    - Compatible con tecnologías asistivas
 */
export function Footer() {
  return (
    <footer className="py-8 bg-[var(--portfolio-navy-dark)] border-t border-[var(--portfolio-navy-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[var(--portfolio-text-muted)] text-sm">
          © {new Date().getFullYear()} Ernesto Lázaro Guerrero 🦇 Ingeniero | Diseñador UX/UI
        </p>
      </div>
    </footer>
  );
}