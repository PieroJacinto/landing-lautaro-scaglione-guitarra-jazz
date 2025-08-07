// src/app/page.tsx - Usando el HTML original que funcionaba
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
            <li><a href="#method">Método</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="subtitle">Profesor de Guitarra Jazz • EMPA</div>
          <h1>Clases Online para toda América Latina</h1>
          <p>Domina el lenguaje del jazz con un método probado. Formación profesional de EMPA, la primera institución terciaria de música popular en Latinoamérica.</p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">🎸 Clase de Prueba Gratis</a>
            <a href="#about" className="cta-button secondary">📚 Ver Método</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Estudiantes Activos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Países de América Latina</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Satisfacción del Estudiante</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* About the Teacher Section */}
        <section className="teacher-section" id="about">
          <div className="teacher-photo">
            {/* Placeholder for teacher photo */}
            <div className="photo-placeholder">
              📸<br />
              <small style={{fontSize: '1rem', marginTop: '1rem'}}>Foto del Profesor</small>
            </div>
          </div>

          <div className="teacher-info">
            <h2>Lautaro José Scaglione</h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--off-white)'}}>
              Guitarrista de jazz formado en la prestigiosa Escuela de Música Popular de Avellaneda (EMPA), 
              con más de 5 años de experiencia enseñando el lenguaje del jazz a estudiantes de toda América Latina.
            </p>

            <div className="teacher-credentials">
              <h3>🎓 Formación Académica</h3>
              <p><strong>Instrumentista en Música Popular - Orientación Jazz</strong><br />
              Escuela de Música Popular de Avellaneda (EMPA)<br />
              <em>La primera institución terciaria de música popular en Latinoamérica, fundada en 1985</em></p>
            </div>

            <div className="teacher-credentials">
              <h3>🎸 Especialización</h3>
              <p>Guitarra Jazz • Improvisación • Comping • Chord Melody • Armonía Funcional • 
              Estándares de Jazz • Bebop • Swing • Jazz Contemporáneo • Jazz Fusion</p>
            </div>

            <div className="teacher-credentials">
              <h3>🌎 Experiencia Internacional</h3>
              <p>Más de 150 estudiantes activos en 12 países de América Latina. Clases 100% online 
              adaptadas a diferentes zonas horarias y niveles musicales.</p>
            </div>
          </div>
        </section>

        {/* Method Section */}
        <section className="method-section" id="method">
          <h2 className="section-title">🎼 Metodología EMPA Adaptada</h2>
          
          <div className="method-grid">
            <div className="method-card">
              <span className="method-icon">🎯</span>
              <h3>Diagnóstico Inicial</h3>
              <p>Evaluación completa de tu nivel actual y objetivos específicos para crear un plan de estudios personalizado.</p>
              <ul className="method-features">
                <li>Análisis técnico individual</li>
                <li>Identificación de fortalezas</li>
                <li>Plan de mejora específico</li>
                <li>Objetivos a corto y largo plazo</li>
              </ul>
            </div>

            <div className="method-card">
              <span className="method-icon">📚</span>
              <h3>Curriculum Estructurado</h3>
              <p>Método basado en el programa académico de EMPA, adaptado para clases online con materiales exclusivos.</p>
              <ul className="method-features">
                <li>Teoría armónica progresiva</li>
                <li>Técnicas de improvisación</li>
                <li>Repertorio de estándares</li>
                <li>Análisis de grandes maestros</li>
              </ul>
            </div>

            <div className="method-card">
              <span className="method-icon">🎵</span>
              <h3>Práctica Interactiva</h3>
              <p>Sesiones dinámicas con play-alongs, backing tracks profesionales y ejercicios en tiempo real.</p>
              <ul className="method-features">
                <li>Jam sessions virtuales</li>
                <li>Backing tracks exclusivos</li>
                <li>Grabaciones para análisis</li>
                <li>Feedback inmediato</li>
              </ul>
            </div>

            <div className="method-card">
              <span className="method-icon">🔄</span>
              <h3>Seguimiento Continuo</h3>
              <p>Monitoreo constante del progreso con grabaciones, ejercicios y material complementario entre clases.</p>
              <ul className="method-features">
                <li>Material de estudio semanal</li>
                <li>Ejercicios técnicos</li>
                <li>Partituras y tablaturas</li>
                <li>Videos explicativos</li>
              </ul>
            </div>

            <div className="method-card">
              <span className="method-icon">🌟</span>
              <h3>Enfoque en Estilos</h3>
              <p>Exploración completa de los diferentes estilos del jazz, desde el tradicional hasta el contemporáneo.</p>
              <ul className="method-features">
                <li>Swing y Bebop</li>
                <li>Jazz Modal y Cool</li>
                <li>Jazz Fusion</li>
                <li>Jazz Contemporáneo</li>
              </ul>
            </div>

            <div className="method-card">
              <span className="method-icon">🎪</span>
              <h3>Performance y Escenario</h3>
              <p>Preparación para tocar en vivo con técnicas de performance y manejo escénico.</p>
              <ul className="method-features">
                <li>Técnicas de performance</li>
                <li>Manejo de nervios</li>
                <li>Interacción con otros músicos</li>
                <li>Recitales virtuales</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Current Students Section */}
        <section className="current-students" id="students">
          <h2 className="section-title">🌎 Nuestros Estudiantes Actuales</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
            Más de 150 guitarristas de toda América Latina confían en nuestro método
          </p>
          
          {/* Country Coverage */}
          <div className="country-coverage">
            <div className="country-item">
              <div className="country-flag">🇦🇷</div>
              <div className="country-name">Argentina</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇲🇽</div>
              <div className="country-name">México</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇨🇴</div>
              <div className="country-name">Colombia</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇨🇱</div>
              <div className="country-name">Chile</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇵🇪</div>
              <div className="country-name">Perú</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇪🇨</div>
              <div className="country-name">Ecuador</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇺🇾</div>
              <div className="country-name">Uruguay</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇧🇷</div>
              <div className="country-name">Brasil</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇻🇪</div>
              <div className="country-name">Venezuela</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇧🇴</div>
              <div className="country-name">Bolivia</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇵🇾</div>
              <div className="country-name">Paraguay</div>
            </div>
            <div className="country-item">
              <div className="country-flag">🇺🇸</div>
              <div className="country-name">Estados Unidos</div>
            </div>
          </div>

          {/* Student Avatars */}
          <div className="students-grid">
            <div className="student-item">
              <div className="student-avatar">MG</div>
              <div className="student-name">María G.</div>
              <div className="student-country">🇲🇽 México</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">CM</div>
              <div className="student-name">Carlos M.</div>
              <div className="student-country">🇨🇴 Colombia</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">AP</div>
              <div className="student-name">Ana P.</div>
              <div className="student-country">🇨🇱 Chile</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">LR</div>
              <div className="student-name">Luis R.</div>
              <div className="student-country">🇵🇪 Perú</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">SF</div>
              <div className="student-name">Sofia F.</div>
              <div className="student-country">🇦🇷 Argentina</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">DL</div>
              <div className="student-name">Diego L.</div>
              <div className="student-country">🇪🇨 Ecuador</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">MV</div>
              <div className="student-name">Miguel V.</div>
              <div className="student-country">🇻🇪 Venezuela</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">LS</div>
              <div className="student-name">Laura S.</div>
              <div className="student-country">🇺🇾 Uruguay</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">JO</div>
              <div className="student-name">João O.</div>
              <div className="student-country">🇧🇷 Brasil</div>
            </div>
            <div className="student-item">
              <div className="student-avatar">RM</div>
              <div className="student-name">Ricardo M.</div>
              <div className="student-country">🇧🇴 Bolivia</div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <h2 className="section-title">💰 Planes y Precios</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-title">Clase Individual</div>
              <div className="pricing-price">$25<span className="pricing-currency">USD</span></div>
              <div className="pricing-period">por clase de 60 minutos</div>
              <ul className="pricing-features">
                <li>Clase personalizada 1 a 1</li>
                <li>Material de estudio incluido</li>
                <li>Grabación de la clase</li>
                <li>Backing tracks exclusivos</li>
                <li>Soporte entre clases</li>
              </ul>
              <a href="#contact" className="cta-button">Reservar Clase</a>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-title">Pack 4 Clases</div>
              <div className="pricing-price">$90<span className="pricing-currency">USD</span></div>
              <div className="pricing-period">$22.50 por clase • Ahorro 10%</div>
              <ul className="pricing-features">
                <li>4 clases personalizadas</li>
                <li>Plan de estudios estructurado</li>
                <li>Material exclusivo EMPA</li>
                <li>Análisis de progreso</li>
                <li>Ejercicios semanales</li>
                <li>Acceso a biblioteca musical</li>
              </ul>
              <a href="#contact" className="cta-button">Empezar Ahora</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-title">Pack 8 Clases</div>
              <div className="pricing-price">$160<span className="pricing-currency">USD</span></div>
              <div className="pricing-period">$20 por clase • Ahorro 20%</div>
              <ul className="pricing-features">
                <li>8 clases personalizadas</li>
                <li>Método completo EMPA</li>
                <li>Evaluación intermedia</li>
                <li>Recital virtual opcional</li>
                <li>Certificado de participación</li>
                <li>Acceso prioritario a horarios</li>
              </ul>
              <a href="#contact" className="cta-button">Máximo Ahorro</a>
            </div>
          </div>

          <div className="trial-offer">
            <h3>🎁 Clase de Prueba Gratuita</h3>
            <p>Primera clase de 30 minutos completamente gratis. Sin compromiso.</p>
            <a href="#contact" className="cta-button">Solicitar Clase Gratuita</a>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Testimonials Section */}
        <section className="testimonials-section" id="testimonials">
          <h2 className="section-title">🗣️ Lo que dicen nuestros estudiantes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Lautaro tiene un método increíble. En 6 meses pasé de tocar acordes básicos a improvisar sobre estándares complejos. Su formación en EMPA realmente se nota."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MG</div>
                <div className="author-info">
                  <h4>María González</h4>
                  <p>🇲🇽 México • 2 años estudiando</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                "Las clases online son súper dinámicas. Los backing tracks y ejercicios personalizados me ayudaron a desarrollar mi oído jazzístico rápidamente."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">CM</div>
                <div className="author-info">
                  <h4>Carlos Mendoza</h4>
                  <p>🇨🇴 Colombia • 1 año estudiando</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                "Excelente profesor. Me ayudó a entender la armonía del jazz de forma práctica. Ahora toco en una banda local y todo gracias a sus enseñanzas."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AP</div>
                <div className="author-info">
                  <h4>Ana Petrosky</h4>
                  <p>🇨🇱 Chile • 3 años estudiando</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="contact">
          <h2>🎸 ¿Listo para empezar tu journey en el jazz?</h2>
          <p>Primera clase de 30 minutos completamente gratis. Sin compromiso.</p>
          <div className="cta-buttons">
            <a 
              href={`https://wa.me/5491134060511?text=${encodeURIComponent('Hola Lautaro! Me interesa la clase de prueba gratis de guitarra jazz que vi en tu web.')}`}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Contactar por WhatsApp
            </a>
            <a href="mailto:lautaro.scaglione@gmail.com" className="cta-button secondary">
              📧 Enviar Email
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Lautaro Scaglione - Profesor de Guitarra Jazz | Formado en EMPA</p>
        <div className="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href={`https://wa.me/5491134060511?text=${encodeURIComponent('Hola Lautaro! Vengo de tu web y me interesa información sobre las clases de jazz.')}`}
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