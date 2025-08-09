'use client'

// src/app/page.tsx - Versión completa con sección de precios
export default function Home() {
  return (
    <main>
      {/* Fretboard background pattern */}
      <div className="fretboard-bg">
        <div className="string"></div>
        <div className="string"></div>
        <div className="string"></div>
        <div className="string"></div>
        <div className="string"></div>
        <div className="string"></div>
        {/* Fret markers */}
        <div className="fret-marker" style={{left: '8.33%'}}></div>
        <div className="fret-marker" style={{left: '16.66%'}}></div>
        <div className="fret-marker" style={{left: '25%'}}></div>
        <div className="fret-marker" style={{left: '33.33%'}}></div>
        <div className="fret-marker" style={{left: '41.66%'}}></div>
        <div className="fret-marker" style={{left: '50%'}}></div>
        <div className="fret-marker" style={{left: '58.33%'}}></div>
        <div className="fret-marker" style={{left: '66.66%'}}></div>
        <div className="fret-marker" style={{left: '75%'}}></div>
        <div className="fret-marker" style={{left: '83.33%'}}></div>
        <div className="fret-marker" style={{left: '91.66%'}}></div>
      </div>

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
        
        {/* Particles */}
        <div className="particle" style={{top: '20%', left: '30%', animationDelay: '1s'}}></div>
        <div className="particle" style={{top: '70%', right: '20%', animationDelay: '4s'}}></div>
        <div className="particle" style={{bottom: '40%', left: '60%', animationDelay: '7s'}}></div>
        <div className="particle" style={{top: '50%', left: '80%', animationDelay: '10s'}}></div>
      </div>

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo-section">
            <img 
              src="/images/laucha1.jpg" 
              alt="Lautaro Scaglione"
              className="header-photo"
            />
            <div className="logo">Lautaro Scaglione</div>
          </div>
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
            <button className="secondary-button" onClick={() => window.open('https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20%C2%BFPodemos%20charlar?', '_blank')}>
              Escribir por WhatsApp
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section - PROFESIONAL Y AUTÉNTICO */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="subtitle">Graduado EMPA • Especialista en Improvisación</div>
              <h2 className="section-title">Desarrollá tu identidad musical única</h2>
              
              <div className="credentials">
                <div className="credential-item">
                  <span className="credential-icon">🎓</span>
                  <div>
                    <strong>Graduado EMPA</strong>
                    <p>Formación profesional en la Escuela de Música Popular de Avellaneda, una de las instituciones más prestigiosas de Argentina.</p>
                  </div>
                </div>

                <div className="credential-item">
                  <span className="credential-icon">🎸</span>
                  <div>
                    <strong>Creador del Método FRET GPS</strong>
                    <p>Sistema estructurado y probado para transformar guitarristas intermedios en improvisadores con voz propia.</p>
                  </div>
                </div>

                <div className="credential-item">
                  <span className="credential-icon">🎵</span>
                  <div>
                    <strong>Músico Activo</strong>
                    <p>Presentaciones en vivo regulares que demuestran aplicación real del método en contextos musicales profesionales.</p>
                  </div>
                </div>
              </div>

              <div className="about-description">
                <p>No se trata de copiar a otros guitarristas. Mi método está diseñado para que encuentres TU voz única en la improvisación, aplicando conceptos reales de armonía funcional de manera práctica y musical.</p>
              </div>
            </div>

            <div className="about-visual">
              <div className="profile-image">
                <div className="image-frame">
                  <img 
                    src="/images/laucha1.jpg" 
                    alt="Lautaro Scaglione tocando guitarra"
                    style={{width: '100%', borderRadius: '15px'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Method Section - 6 PILARES CLAROS */}
      <section className="method-section" id="method">
        <h2 className="section-title">🗺️ Los 6 Pilares del Método FRET GPS</h2>
        <p className="section-subtitle">
          Un sistema estructurado para llevarte del punto A (repetitivo) al punto B (voz propia)
        </p>

        <div className="method-grid">
         <div className="method-card">
            <div className="method-icon">📍</div>
            <h3>Visualización del Mástil</h3>
            <p>Dejá de tocar de memoria y empezá a ver el mástil con claridad. Entendé dónde estás parado en todo momento, sin importar la tonalidad.</p>
          </div>

           <div className="method-card">
            <div className="method-icon">↻</div>
            <h3>Movilidad Melódica</h3>
            <p>¿Te quedás atrapado en una zona del mástil? Aprendé a moverte con libertad, conectando ideas de forma natural y fluida.</p>
          </div>

         <div className="method-card">
            <div className="method-icon">♪</div>
            <h3>Arpegios Funcionales</h3>
            <p>No se trata solo de tocar notas, sino de contar algo con ellas. Explorá cómo improvisar con intención sobre cada parte del tema.</p>
          </div>

          <div className="method-card">
            <div className="method-icon">♫</div>
            <h3>Aplicación Real</h3>
            <p>Llevá tu forma de tocar a un nuevo nivel, aplicando lo aprendido en canciones reales. De la teoría a la música.</p>
          </div>

        <div className="method-card">
            <div className="method-icon">💡</div>
            <h3>Construcción del Discurso</h3>
            <p>Desarrollá frases, motivos, y cómo desarrollar tus ideas para que tu solo tenga una historia. Empezá a dejar tu huella personal.</p>
          </div>

         <div className="method-card">
            <div className="method-icon">★</div>
            <h3>Integración y Voz Propia</h3>
            <p>El momento de unir todo. Elegí un repertorio desafiante, improvisá libremente, te escuchás con criterio y te preparás para presentarlo como un artista completo.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Who Is For Section - FILTRADO CLARO */}
      <section className="who-is-for-section" id="who-is-for">
        <div className="container">
          <h2 className="section-title">🎯 ¿Este programa es para vos?</h2>
          <p className="section-subtitle">
            Sé honesto: evaluá tu nivel actual para saber si es el momento indicado
          </p>

          <div className="target-grid">
            <div className="target-card positive">
              <h3>✅ SÍ es para vos si:</h3>
              <ul>
                <li>Ya tocas escalas pentatónicas básicas</li>
                <li>Conocés algunos arpegios pero no sabés cuándo usarlos</li>
                <li>Te frustra que siempre improvisás lo mismo</li>
                <li>Querés tocar standards de jazz con tu propia personalidad</li>
                <li>Estás dispuesto a invertir en tu desarrollo musical</li>
                <li>Podés comprometerte a practicar de forma consistente</li>
              </ul>
              <div className="profile-label">GUITARRISTA INTERMEDIO SERIO</div>
            </div>

            <div className="target-card negative">
              <h3>❌ NO es para vos si:</h3>
              <ul>
                <li>Recién empezás a tocar guitarra</li>
                <li>No sabés acordes básicos (mayores, menores, séptimas)</li>
                <li>Buscás clases tradicionales de técnica</li>
                <li>No te interesa la improvisación ni el jazz</li>
                <li>Esperás resultados mágicos sin práctica</li>
                <li>No podés invertir en formación de calidad</li>
              </ul>
              <div className="profile-label">MEJOR BUSCAR OTRO CAMINO</div>
            </div>
          </div>

          <div className="transformation-preview">
            <h3>🚀 La transformación que vas a experimentar:</h3>
            <div className="before-after">
              <div className="before">
                <h4>ANTES (Punto A):</h4>
                <p>Tocás sobre el que entras forma básica, conocés poca escala, limitado en registro medio, repetís siempre lo mismo con unos arpegios sin dominio.</p>
              </div>
              <div className="arrow">→</div>
              <div className="after">
                <h4>DESPUÉS (Punto B):</h4>
                <p>Improvisás sobre progresiones complejas y estándares, dominás pentatónica, te reflejás en todo el mástil, utilizás recursos variados y musicales, visualizás armonía funcional completa, tenés tu propia voz improvisando.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Testimonials Section - PREPARADO PARA VIDEOS REALES */}
      <section className="testimonials-section" id="testimonials">
        <h2 className="section-title">🗣️ Lo que dicen mis estudiantes</h2>
        <p className="section-subtitle">
          Testimonios reales de guitarristas que transformaron su improvisación
        </p>

        <div className="testimonials-grid">
          {/* Testimonio 1 - Placeholder para video real */}
          <div className="testimonial-card">
            <div className="testimonial-video">
              <div className="video-placeholder">
                <span>📹</span>
                <p>Video testimonio próximamente</p>
              </div>
            </div>
            <div className="testimonial-content">
              <h4>Testimonio Real #1</h4>
              <p>"Aquí irá el testimonio real en video de un estudiante que completó el programa FRET GPS."</p>
              <div className="student-info">
                <strong>Estudiante FRET GPS</strong>
                <small>Estudiante FRET GPS • 4 meses</small>
              </div>
            </div>
          </div>

          {/* Testimonio 2 - Placeholder para video real */}
          <div className="testimonial-card">
            <div className="testimonial-video">
              <div className="video-placeholder">
                <span>📹</span>
                <p>Video testimonio próximamente</p>
              </div>
            </div>
            <div className="testimonial-content">
              <h4>Testimonio Real #2</h4>
              <p>"Aquí irá el testimonio real en video de otro estudiante que transformó su improvisación."</p>
              <div className="student-info">
                <strong>Estudiante FRET GPS</strong>
                <small>Estudiante FRET GPS • 4 meses</small>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-note">
          <p>📹 <strong>Videos testimoniales próximamente</strong> - Testimonios reales de YouTube + Instagram</p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Pricing Section - NUEVA SECCIÓN */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">💰 Tu inversión para desarrollar tu voz musical única</h2>
          <p className="section-subtitle">
            Menos que dos clases presenciales por mes, pero con resultados 10 veces más focalizados
          </p>

          <div className="pricing-content">
            {/* High Ticket - Programa Principal */}
            <div className="pricing-card main-program">
              <div className="pricing-header">
                <h3>Programa FRET GPS Completo</h3>
                <p className="program-subtitle">Transformación completa en 4 meses</p>
              </div>

              <div className="price-section">
                <div className="price-comparison">
                  <span className="old-price">Precio próximo: USD $800</span>
                  <div className="current-price">
                    <span className="currency">USD</span>
                    <span className="amount">$500</span>
                    <span className="period">(4 meses completos)</span>
                  </div>
                  <p className="monthly-equivalent">Equivale a USD $125/mes</p>
                </div>
              </div>

              <div className="features-included">
                <h4>🎯 Lo que incluye:</h4>
                <ul>
                  <li>✅ 16 sesiones 1 a 1 completamente personalizadas</li>
                  <li>✅ Material específico diseñado para tu nivel actual</li>
                  <li>✅ Plan paso a paso del punto A al punto B</li>
                  <li>✅ Acceso directo para consultas vía WhatsApp</li>
                  <li>✅ Grabaciones de todas las sesiones para repasar</li>
                  <li>✅ Seguimiento personalizado de tu progreso</li>
                </ul>
              </div>

              <div className="pricing-cta">
                <button 
                  className="cta-button large" 
                  onClick={() => window.open('https://calendly.com/lautaroguitarra/sesion-de-claridad', '_blank')}
                >
                  Agendar Evaluación Gratuita
                </button>
                <p className="urgency-note">
                  ⚠️ <strong>El precio sube a USD $800 el próximo mes</strong> por demanda genuina y para mantener calidad con menos alumnos
                </p>
              </div>
            </div>

            {/* Low Ticket - Mini Workshops */}
            <div className="pricing-card workshop-card">
              <div className="pricing-header">
                <h3>Mini Workshops</h3>
                <p className="program-subtitle">Primeros pasos hacia tu libertad musical</p>
                <span className="coming-soon">Próximamente</span>
              </div>

              <div className="price-section">
                <div className="current-price">
                  <span className="currency">USD</span>
                  <span className="amount">$60-80</span>
                  <span className="period">(Una sola vez)</span>
                </div>
              </div>

              <div className="features-included">
                <h4>🎥 Lo que incluirá:</h4>
                <ul>
                  <li>✅ Videos grabados de alta calidad</li>
                  <li>✅ Ejercicios específicos para cada nivel</li>
                  <li>✅ Material de apoyo descargable</li>
                  <li>✅ Acceso de por vida</li>
                </ul>
              </div>

              <div className="pricing-cta">
                <button className="secondary-button large disabled">
                  Reservar lugar (Próximamente)
                </button>
                <p className="workshop-note">
                  💡 Perfecto para probar el método antes del programa completo
                </p>
              </div>
            </div>
          </div>

          <div className="value-proposition">
            <div className="comparison-box">
              <h4>📊 ¿Por qué es una excelente inversión?</h4>
              <div className="comparison-grid">
                <div className="comparison-item">
                  <strong>Clases tradicionales presenciales:</strong>
                  <p>USD $40-60 por clase × 16 clases = USD $640-960</p>
                  <span className="comparison-note">Sin plan estructurado ni seguimiento</span>
                </div>
                <div className="vs">VS</div>
                <div className="comparison-item highlight">
                  <strong>Programa FRET GPS:</strong>
                  <p>USD $500 por transformación completa</p>
                  <span className="comparison-note">Plan específico + seguimiento + resultados garantizados</span>
                </div>
              </div>
            </div>
          </div>
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
            <p>Si decidis avanzar, empezamos tu viaje hacia tu voz musical única</p>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="cta-button large" onClick={() => window.open('https://calendly.com/lautaroguitarra/sesion-de-claridad', '_blank')}>
            Agendar mi Evaluación Gratuita
          </button>
          <p style={{textAlign: 'center', margin: '1rem 0', opacity: 0.8}}>o</p>
          <button className="secondary-button large" onClick={() => window.open('https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20%C2%BFPodemos%20charlar?', '_blank')}>
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
          <p>© 2025 Lautaro Scaglione. Todos los derechos reservados.</p>
          <p style={{marginTop: '1rem', opacity: 0.7}}>
            Guitarrista graduado EMPA • Especialista en Improvisación • Creador del Método FRET GPS
          </p>
        </div>
      </footer>

    {/* WhatsApp Floating Button - VERSIÓN CORREGIDA */}
      <div className="whatsapp-float">
        <button 
          className="whatsapp-button"
          onClick={() => window.open('https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20%C2%BFPodemos%20charlar?', '_blank')}
          title="Escribir por WhatsApp"
        >
          📱
        </button>
      </div>
    </main>
  )
}