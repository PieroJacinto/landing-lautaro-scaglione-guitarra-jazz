'use client'

// src/app/page.tsx - Versión corregida sin errores de comillas + Estética mejorada
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
              Hablar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section - MÁS PROFESIONAL */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Lautaro Scaglione</h2>
              <div className="subtitle">Graduado EMPA • Especialista en Improvisación Jazz</div>
              
              <div className="credentials">
                <div className="credential-item">
                  <span className="credential-icon">🎓</span>
                  <div>
                    <strong>Formación Profesional EMPA</strong>
                    <p>Graduado de la Escuela de Música Popular de Avellaneda</p>
                  </div>
                </div>
                
                <div className="credential-item">
                  <span className="credential-icon">🎸</span>
                  <div>
                    <strong>Especialización en Jazz</strong>
                    <p>Enfoque específico en improvisación y lenguaje jazzístico</p>
                  </div>
                </div>
                
                <div className="credential-item">
                  <span className="credential-icon">🎯</span>
                  <div>
                    <strong>Método FRET GPS</strong>
                    <p>Sistema propio para desarrollar la voz personal en la improvisación</p>
                  </div>
                </div>
              </div>

              <p className="about-description">
                Durante mis años de formación, descubrí que muchos guitarristas intermedios se quedaban &quot;atrapados&quot; en patrones repetitivos. Creé el programa FRET GPS para ayudarte a romper esas barreras y desarrollar tu identidad musical única.
              </p>
            </div>
            
            <div className="about-visual">
              <div className="profile-image">
                <div className="image-frame">
                  <img 
                    src="/images/laucha1.jpg" 
                    alt="Lautaro Scaglione - Guitarrista y Profesor de Jazz"
                    className="profile-photo"
                  />
                  <div className="profile-info">
                    <h3>Lautaro Scaglione</h3>
                    <span>Graduado EMPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Para Quién Es Section - FILTRO CLARO */}
      <section id="who-is-for" className="who-section">
        <div className="container">
          <h2 className="section-title">¿Es FRET GPS Para Vos?</h2>
          
          <div className="who-grid">
            <div className="who-card yes-card">
              <div className="card-header">
                <span className="icon">✅</span>
                <h3>ESTO ES PARA VOS SI:</h3>
              </div>
              <ul className="who-list">
                <li>Ya tocas escalas pentatónicas básicas</li>
                <li>Conoces algunos arpegios pero no sabes cuándo usarlos</li>
                <li>Te frustras porque siempre improvisas lo mismo</li>
                <li>Queres tocar standards de jazz con tu propia personalidad</li>
                <li>Buscas desarrollar un sonido único y reconocible</li>
                <li>Estas dispuesto a dedicar tiempo consistente al estudio</li>
              </ul>
            </div>

            <div className="who-card no-card">
              <div className="card-header">
                <span className="icon">❌</span>
                <h3>ESTO NO ES PARA VOS SI:</h3>
              </div>
              <ul className="who-list">
                <li>Recién empezas a tocar guitarra</li>
                <li>No sabes acordes básicos (mayores, menores, dominantes)</li>
                <li>Buscas clases tradicionales de técnica</li>
                <li>Queres resultados &quot;mágicos&quot; sin práctica</li>
                <li>No tenes interés específico en jazz e improvisación</li>
                <li>Prefieres tocar solo covers exactos</li>
              </ul>
            </div>
          </div>

          <div className="clarity-message">
            <h4>💡 El objetivo es claro:</h4>
            <p>Llevarte desde &quot;toco escalas pero siempre sueno igual&quot; hacia &quot;tengo mi propia voz en la improvisación&quot;</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Method Section - 6 PILARES DEL PROGRAMA */}
      <section id="method" className="method-section">
        <div className="container">
          <h2 className="section-title">Los 6 Pilares del Programa FRET GPS</h2>
          <p className="section-subtitle">Un viaje estructurado hacia tu voz musical única</p>

          <div className="method-grid">
            <div className="method-card">
              <div className="card-number">1</div>
              <div className="card-icon">🎯</div>
              <h3>Principios de Visualización del Diapasón</h3>
              <p>Deja de tocar de memoria y empeza a ver el mástil con claridad. Te doy las herramientas para entender dónde estas parado en todo momento, sin importar la tonalidad.</p>
            </div>

            <div className="method-card">
              <div className="card-number">2</div>
              <div className="card-icon">🌊</div>
              <h3>Movilidad Interna</h3>
              <p>¿Te quedas atrapado en una zona del mástil? Aprendes a moverte con libertad, conectando ideas de forma natural y fluida. Vas a improvisar de verdad, no repetir fórmulas.</p>
            </div>

            <div className="method-card">
              <div className="card-number">3</div>
              <div className="card-icon">🎼</div>
              <h3>Armonía Funcional y sus Arpegios</h3>
              <p>Acá es donde todo cobra sentido. Entendes cómo se construye la música y cómo aplicarlo para expresarte mejor. Nada de tocar al azar: improvisas con notas que realmente dicen algo.</p>
            </div>

            <div className="method-card">
              <div className="card-number">4</div>
              <div className="card-icon">🎸</div>
              <h3>Improvisación Contextualizada</h3>
              <p>Llevas tu forma de tocar a un nuevo nivel, aplicando lo aprendido en canciones reales. Exploras cómo improvisar con intención sobre cada parte del tema.</p>
            </div>

            <div className="method-card">
              <div className="card-number">5</div>
              <div className="card-icon">📝</div>
              <h3>Construcción del Discurso Musical</h3>
              <p>No se trata solo de tocar notas, sino de contar algo con ellas. Trabajas frases, motivos, y cómo desarrollar tus ideas para que tu solo tenga una historia.</p>
            </div>

            <div className="method-card">
              <div className="card-number">6</div>
              <div className="card-icon">⭐</div>
              <h3>Integración Creativa y Voz Propia</h3>
              <p>Es el momento de unir todo. Elegis un repertorio desafiante, improvisas libremente, y lo preparas para presentarlo como un artista completo con tu identidad única.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Testimonials Section - PREPARADO PARA VIDEOS */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Lo Que Dicen Mis Estudiantes</h2>
          <p className="section-subtitle">Testimonios reales de guitarristas que transformaron su improvisación</p>

          <div className="testimonials-grid">
            {/* Placeholder para cuando tengas los videos */}
            <div className="testimonial-placeholder">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p>Video testimonial</p>
              </div>
              <div className="testimonial-info">
                <h4>Martín R.</h4>
                <p>&quot;Antes tocaba siempre los mismos licks. Ahora tengo mi propio sonido&quot;</p>
                <small>Estudiante FRET GPS • 6 meses</small>
              </div>
            </div>

            <div className="testimonial-placeholder">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p>Video testimonial</p>
              </div>
              <div className="testimonial-info">
                <h4>Carolina S.</h4>
                <p>&quot;El programa me ayudó a entender la música, no solo a repetir patrones&quot;</p>
                <small>Estudiante FRET GPS • 8 meses</small>
              </div>
            </div>

            <div className="testimonial-placeholder">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p>Video testimonial</p>
              </div>
              <div className="testimonial-info">
                <h4>Diego M.</h4>
                <p>&quot;Finalmente puedo improvisar con confianza en cualquier tonalidad&quot;</p>
                <small>Estudiante FRET GPS • 4 meses</small>
              </div>
            </div>
          </div>

          <div className="testimonials-note">
            <p>📹 <strong>Videos testimoniales próximamente</strong> - Testimonios reales de YouTube + Instagram</p>
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
          <p>© 2025 Lautaro Scaglione. Todos los derechos reservados. | Formación EMPA Certificada</p>
          <p style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem'}}>
            &quot;No se trata de tocar notas correctas, se trata de encontrar TU manera de contarle algo al mundo con la guitarra.&quot;
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button - CONECTADO */}
      <a
        href="https://wa.me/541134060511?text=Hola%20Lautaro!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20el%20programa%20FRET%20GPS.%20Soy%20guitarrista%20intermedio%20y%20quiero%20desarrollar%20mi%20propia%20voz%20en%20la%20improvisación.%20%C2%BFPodemos%20charlar?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.515"/>
        </svg>
      </a>
    </main>
  )
}