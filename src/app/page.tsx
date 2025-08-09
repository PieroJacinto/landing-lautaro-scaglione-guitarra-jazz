'use client'

// src/app/page.tsx - Actualizado con mensaje redireccionado a guitarristas intermedios
export default function Home() {
  return (
    <main>
      {/* Jazz atmosphere effects */}
      <div className="jazz-atmosphere">
        <div className="floating-note" style={{top: '15%', left: '10%', animationDelay: '0s'}}>♪</div>
        <div className="floating-note" style={{top: '25%', right: '15%', animationDelay: '3s'}}>♫</div>
        <div className="floating-note" style={{bottom: '30%', left: '20%', animationDelay: '6s'}}>♪</div>
        <div className="floating-note" style={{top: '60%', left: '70%', animationDelay: '9s'}}>♬</div>
        <div className="floating-note" style={{bottom: '20%', right: '25%', animationDelay: '12s'}}>♩</div>
        
        <div className="smoke-effect" style={{bottom: '10%', left: '15%', animationDelay: '2s'}}></div>
        <div className="smoke-effect" style={{bottom: '20%', right: '30%', animationDelay: '8s'}}></div>
        <div className="smoke-effect" style={{bottom: '5%', left: '60%', animationDelay: '14s'}}></div>
      </div>

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">Lautaro Scaglione</div>
          <ul className="nav-links">
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#method">Programa FRET GPS</a></li>
            <li><a href="#who-is-for">Para Quién Es</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - MENSAJE REDIRECCIONADO */}
      <section className="hero">
        <div className="hero-content">
          <div className="subtitle">Para Guitarristas Intermedios • Formación EMPA</div>
          <h1>¿Ya tocas escalas pero siempre suenas igual?</h1>
          <p>Desarrolla tu propia voz en la improvisación con el programa FRET GPS. Para guitarristas que ya saben lo básico pero quieren dejar de sonar repetitivos y crear su identidad musical única.</p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={() => window.open('https://calendly.com/lautaroguitarra/sesion-de-claridad', '_blank')}>
              Agendar Evaluación Gratis
            </button>
            <button className="secondary-button" onClick={() => window.open('https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20¿Podemos%20charlar?', '_blank')}>
              Hablar por WhatsApp
            </button>
          </div>
          <div className="hero-note">
            <small>✅ Evaluación gratuita de 30 minutos para conocer tu situación actual</small>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* NUEVA SECCIÓN: Para Quién Es */}
      <section className="who-is-for" id="who-is-for">
        <h2 className="section-title">🎯 ¿Este programa es para vos?</h2>
        
        <div className="target-comparison">
          <div className="target-yes">
            <h3>✅ ESTO ES PARA VOS SI:</h3>
            <ul>
              <li>Ya tocas escalas pentatónicas básicas</li>
              <li>Conoces algunos arpegios pero no sabes cuándo usarlos</li>
              <li>Te frustras porque siempre improvisas lo mismo</li>
              <li>Querés tocar standards de jazz con tu propia personalidad</li>
              <li>Sentís que tu guitarra no refleja tu musicalidad interior</li>
            </ul>
          </div>
          
          <div className="target-no">
            <h3>❌ ESTO NO ES PARA VOS SI:</h3>
            <ul>
              <li>Recién empezás a tocar guitarra</li>
              <li>No sabés acordes básicos</li>
              <li>Buscas clases tradicionales de técnica</li>
              <li>Querés aprender canciones específicas</li>
              <li>No te interesa la improvisación</li>
            </ul>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9}}>
            <strong>¿Te identificas con el perfil de la izquierda?</strong><br />
            Entonces FRET GPS puede transformar tu forma de tocar.
          </p>
          <button className="cta-button" onClick={() => window.open('https://calendly.com/lautaroguitarra/sesion-de-claridad', '_blank')}>
            Evaluar mi Caso Específico
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Method Section - SIMPLIFICADO */}
      <section className="method-section" id="method">
        <h2 className="section-title">🎸 Los 6 Pilares del Programa FRET GPS</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
          Un método progresivo y estructurado para que desarrolles tu voz única en la improvisación
        </p>

        <div className="method-grid">
          {/* Pilar 1 */}
          <div className="method-card">
            <span className="method-icon">🗺️</span>
            <h3>1. Visualización del Mástil</h3>
            <p>Dominás las 5 posiciones CAGED de forma progresiva y lógica. No más tocar siempre en la misma zona.</p>
          </div>

          {/* Pilar 2 */}
          <div className="method-card">
            <span className="method-icon">🔄</span>
            <h3>2. Movilidad Melódica</h3>
            <p>Te movés por todo el mástil con fluidez y sentido armónico. Conectás zonas y mantenes la coherencia musical.</p>
          </div>

          {/* Pilar 3 */}
          <div className="method-card">
            <span className="method-icon">🎼</span>
            <h3>3. Arpegios Funcionales</h3>
            <p>Tocás con coherencia armónica, no al azar. Los arpegios te dan estructura y peso a tu improvisación.</p>
          </div>

          {/* Pilar 4 */}
          <div className="method-card">
            <span className="method-icon">🎵</span>
            <h3>4. Aplicación Real</h3>
            <p>Improvisás sobre standards reales con intención y comprensión. Todo se aplica en contextos musicales concretos.</p>
          </div>

          {/* Pilar 5 */}
          <div className="method-card">
            <span className="method-icon">💡</span>
            <h3>5. Tu Discurso Musical</h3>
            <p>Desarrollás motivos, creás frases propias y construís solos con narrativa. Tu guitarra cuenta una historia.</p>
          </div>

          {/* Pilar 6 */}
          <div className="method-card">
            <span className="method-icon">🎨</span>
            <h3>6. Voz Propia</h3>
            <p>Consolidás tu identidad musical y la presentás al mundo. Ya no traducís: pensás directamente en música.</p>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
          <h4 style={{color: 'var(--accent-gold)', marginBottom: '1rem'}}>⏱️ Duración del Programa</h4>
          <p style={{fontSize: '1.1rem'}}>
            <strong>4 meses</strong> de trabajo estructurado • <strong>1 clase semanal individual</strong><br />
            La mayoría de estudiantes logran tocar standards con su propia personalidad entre 12-18 meses de práctica dedicada.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Testimonials Section - PREPARADO PARA VIDEOS REALES */}
      <section className="testimonials-section" id="testimonials">
        <h2 className="section-title">🗣️ Lo que dicen mis estudiantes</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '1rem', opacity: 0.9}}>
          Testimonios reales de guitarristas que transformaron su forma de improvisar
        </p>
        <p style={{textAlign: 'center', fontSize: '1rem', marginBottom: '3rem', opacity: 0.7}}>
          <em>Sin guiones, sin promesas exageradas, solo resultados honestos</em>
        </p>

        {/* Placeholder para videos de YouTube - SE AGREGARÁN DESPUÉS */}
        <div className="testimonials-videos">
          <div className="video-placeholder">
            <h4>📹 Videos de Testimonios</h4>
            <p>Próximamente: Videos reales de estudiantes contando su experiencia con FRET GPS</p>
          </div>
        </div>

        {/* Testimonios existentes - MANTENEMOS */}
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-avatar">MG</div>
            <div className="testimonial-content">
              <p>"Lautaro tiene un método increíble. En 6 meses pasé de tocar acordes básicos a improvisar sobre estándares complejos. Su formación en EMPA realmente se nota. Ahora improviso con confianza y cada solo tiene mi personalidad."</p>
              <div className="testimonial-author">
                <strong>María G.</strong>
                <span>🇲🇽 México</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-avatar">CR</div>
            <div className="testimonial-content">
              <p>"El enfoque por módulos me ayudó a ordenar mi aprendizaje. No más práctica sin rumbo. Cada semana sabía exactamente qué trabajar y veía mi progreso."</p>
              <div className="testimonial-author">
                <strong>Carlos R.</strong>
                <span>🇦🇷 Argentina</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-avatar">AL</div>
            <div className="testimonial-content">
              <p>"Lo que más me gustó fue el feedback constante. Lautaro me ayudó a desarrollar mi propia voz, no a copiar la de otros. Ahora toco con mi identidad."</p>
              <div className="testimonial-author">
                <strong>Ana L.</strong>
                <span>🇨🇴 Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About the Teacher Section - MÁS AUTÉNTICO */}
      <section className="teacher-section fade-in" id="about">
        <div className="teacher-photo">
          <div className="photo-placeholder">
            📸<br />
            <small style={{fontSize: '1rem', marginTop: '1rem'}}>Foto del Profesor</small>
          </div>
        </div>

        <div className="teacher-info">
          <h2>Lautaro José Scaglione</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--off-white)'}}>
            Guitarrista graduado de EMPA, especializado en improvisación y desarrollo de identidad musical. 
            Creador del método FRET GPS para guitarristas que buscan desarrollar su voz única.
          </p>

          <div className="credentials">
            <div className="credential-item">
              <span className="credential-icon">🎓</span>
              <div>
                <h4>Formación EMPA</h4>
                <p>Escuela de Música Popular de Avellaneda - Especialización en improvisación y armonía funcional</p>
              </div>
            </div>

            <div className="credential-item">
              <span className="credential-icon">🎸</span>
              <div>
                <h4>Creador del Método FRET GPS</h4>
                <p>Método progresivo testado con estudiantes reales de toda América Latina</p>
              </div>
            </div>

            <div className="credential-item">
              <span className="credential-icon">🌎</span>
              <div>
                <h4>Docente Online</h4>
                <p>Estudiantes en Argentina, México, Colombia, Chile y más países desarrollando su identidad musical</p>
              </div>
            </div>

            <div className="credential-item">
              <span className="credential-icon">🎯</span>
              <div>
                <h4>Enfoque Único</h4>
                <p>No se trata de copiar a otros guitarristas, sino de encontrar TU manera de expresarte</p>
              </div>
            </div>
          </div>

          <blockquote style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            margin: '2rem 0',
            padding: '1.5rem',
            borderLeft: '4px solid var(--accent-gold)',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            borderRadius: '0 8px 8px 0'
          }}>
            "No se trata de tocar notas correctas, se trata de encontrar TU manera de contarle algo al mundo con la guitarra."
          </blockquote>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section - SIMPLIFICADO */}
      <section className="cta-section">
        <h2 className="section-title">🚀 ¿Listo para desarrollar tu voz única?</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9}}>
          El primer paso es una evaluación gratuita de 30 minutos
        </p>

        <div className="cta-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h4>Evaluación Gratuita</h4>
            <p>Analizamos tu nivel actual y identificamos tus principales bloqueos</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h4>Plan Personalizado</h4>
            <p>Te muestro cómo FRET GPS se adapta específicamente a tu caso</p>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h4>Transformación</h4>
            <p>Si decidís avanzar, empezamos tu viaje hacia tu voz musical única</p>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="cta-button large" onClick={() => window.open('https://calendly.com/lautaroguitarra/sesion-de-claridad', '_blank')}>
            Agendar mi Evaluación Gratuita
          </button>
          <p style={{textAlign: 'center', margin: '1rem 0', opacity: 0.8}}>o</p>
          <button className="secondary-button large" onClick={() => window.open('https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20¿Podemos%20charlar?', '_blank')}>
            Escribir por WhatsApp
          </button>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem', opacity: 0.7}}>
          <small>
            ✅ Sin compromiso • ✅ Evaluación 100% personalizada • ✅ Para guitarristas intermedios serios
          </small>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div style={{textAlign: 'center'}}>
          <p>© 2025 Lautaro Scaglione. Todos los derechos reservados. | Formación EMPA Certificada</p>
          <p style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem'}}>
            "No se trata de tocar notas correctas, se trata de encontrar TU manera de contarle algo al mundo con la guitarra."
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button - CONECTADO */}
      <a
        href="https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20¿Podemos%20charlar?"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </main>
  )
}