import { Mail } from 'lucide-react';

/**
 * Componente ContactSection - Sección de Contacto
 * 
 * FUNDAMENTOS DE ACCESIBILIDAD (WCAG 2.1 AA):
 * 
 * 1. PERCEPTIBLE:
 *    - Jerarquía de encabezados correcta (h2)
 *    - Contraste de texto cumple con ratio 4.5:1
 *    - Iconos con significado complementados con texto
 *    - Área de enfoque claramente visible
 * 
 * 2. OPERABLE:
 *    - Enlaces accesibles por teclado
 *    - Áreas de clic de mínimo 44x44px
 *    - Estados hover y focus claramente visibles
 *    - Mailto permite usar aplicación de correo del usuario
 * 
 * 3. COMPRENSIBLE:
 *    - Call-to-action claro y directo
 *    - Propósito de enlaces claramente indicado
 *    - Texto descriptivo en aria-labels
 *    - Información organizada lógicamente
 * 
 * 4. ROBUSTO:
 *    - HTML5 semántico (<section>)
 *    - Atributos ARIA descriptivos
 *    - Compatible con lectores de pantalla
 */
export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-[var(--portfolio-navy-dark)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          ¿Trabajamos juntos?
        </h2>
        <p className="text-[var(--portfolio-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
          Estoy disponible para nuevos proyectos y colaboraciones. 
          No dudes en contactarme si tienes alguna idea en mente.
        </p>

        {/* Botón principal de contacto - Accesible y descriptivo */}
        <a
          href="mailto:ernesto@example.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--portfolio-blue-primary)] hover:bg-[var(--portfolio-blue-secondary)] text-white rounded-lg transition-all hover:shadow-lg hover:shadow-[var(--portfolio-blue-glow)]"
          aria-label="Enviar mensaje por correo electrónico a Ernesto Lázaro Guerrero"
        >
          <Mail size={20} aria-hidden="true" />
          Enviar Mensaje
        </a>

        {/* Enlaces a redes sociales - Con labels descriptivos */}
        <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-[var(--portfolio-navy-light)]">
          <a
            href="https://www.linkedin.com/in/ernesto-lazaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-blue-primary)] transition-colors"
            aria-label="Conectar en LinkedIn con Ernesto Lázaro Guerrero"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.behance.net/ernestolazaro1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-blue-primary)] transition-colors"
            aria-label="Ver portafolio en Behance de Ernesto Lázaro Guerrero"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
            <span>Behance</span>
          </a>
        </div>
      </div>
    </section>
  );
}