'use client'

// src/app/page.tsx - Actualizado con FRET GPS manteniendo la estética
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
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#pricing">Inversión</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="subtitle">Programa FRET GPS • Formación EMPA</div>
          <h1>Visualiza el Mástil e Improvisa con Fluidez</h1>
          <p>Transforma tu forma de tocar con un método estructurado de 3 módulos que combina entrenamiento mental, práctica contextualizada y desarrollo de tu voz única como improvisador.</p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Me%20interesa%20el%20programa%20FRET%20GPS%20y%20me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20gratuita.', '_blank')}>
              🎸 Evaluación FRET GPS Gratis
            </button>
            <button className="cta-button secondary" onClick={() => document.getElementById('method')?.scrollIntoView({behavior: 'smooth'})}>
              📚 Ver Los 3 Módulos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Guitarristas Transformados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Países de América Latina</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">Años Desarrollando FRET GPS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Desarrollan Su Voz Única</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        
        {/* Problem/Solution Section - NUEVO */}
        <section className="problem-solution-section">
          <h2 className="section-title">¿Te Suena Familiar Esta Frustración?</h2>
          
          <div className="problems-grid">
            <div className="problem-card">
              <span className="problem-icon">😤</span>
              <h3>Teoría Sin Aplicación</h3>
              <p>Sabes escalas y acordes, pero cuando improvisas suena mecánico y sin alma.</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon">🔄</span>
              <h3>Práctica Sin Rumbo</h3>
              <p>Practicas horas pero sientes que no avanzas o que repites siempre lo mismo.</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon">🎭</span>
              <h3>Imitación Constante</h3>
              <p>Solo puedes tocar como otros guitarristas, pero no encuentras tu propia voz.</p>
            </div>
          </div>

          <div className="solution-section">
            <h3 className="solution-title">FRET GPS Resuelve Todo Esto con un Sistema Probado</h3>
            <div className="solution-grid">
              <div className="solution-item">
                <span className="solution-number">1</span>
                <h4>Sistema Estructurado</h4>
                <p>3 módulos progresivos con objetivos claros y medibles</p>
              </div>
              <div className="solution-item">
                <span className="solution-number">2</span>
                <h4>Aplicación Real</h4>
                <p>Todo se aplica inmediatamente en canciones y contextos reales</p>
              </div>
              <div className="solution-item">
                <span className="solution-number">3</span>
                <h4>Tu Voz Única</h4>
                <p>Desarrollas tu identidad musical personal, no copias a otros</p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* About the Teacher Section */}
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
              Guitarrista de jazz con formación EMPA, especializado en improvisación y desarrollo de identidad musical. 
              Creador del método FRET GPS, utilizado por más de 200 guitarristas para desarrollar fluidez en la improvisación.
            </p>
            
            <div className="teacher-credentials">
              <div className="credential-item">
                <span className="credential-icon">🎓</span>
                <span>Graduado de EMPA (Escuela de Música Popular de Avellaneda)</span>
              </div>
              <div className="credential-item">
                <span className="credential-icon">🎸</span>
                <span>Creador del método FRET GPS</span>
              </div>
              <div className="credential-item">
                <span className="credential-icon">🌎</span>
                <span>Más de 8 años enseñando en América Latina</span>
              </div>
              <div className="credential-item">
                <span className="credential-icon">⭐</span>
                <span>200+ guitarristas transformados</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* FRET GPS Program Section - MODIFICADO */}
        <section className="method-section" id="method">
          <h2 className="section-title">Los 3 Módulos del Programa FRET GPS</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
            Cada módulo construye sobre el anterior para crear una transformación completa
          </p>
          
          <div className="method-grid">
            {/* Módulo 1 */}
            <div className="method-card fret-gps-module">
              <span className="method-icon">🧭</span>
              <h3>Módulo 1: IMPROVISACIÓN CONTEXTUALIZADA</h3>
              <p>Llevás tu forma de tocar a un nuevo nivel, aplicando lo aprendido en canciones reales. Explorás cómo improvisar con intención sobre cada parte del tema.</p>
              <ul className="method-features">
                <li>Análisis de standards para improvisación</li>
                <li>Aplicación contextual sobre cada sección</li>
                <li>Grabación y feedback semanal</li>
                <li>Refinamiento de tu estilo personal</li>
              </ul>
              <div className="module-result">
                <strong>Resultado:</strong> &ldquo;Improvisas con intención musical, no solo notas correctas&rdquo;
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="method-card fret-gps-module">
              <span className="method-icon">🎼</span>
              <h3>Módulo 2: CONSTRUCCIÓN DEL DISCURSO MUSICAL</h3>
              <p>No se trata solo de tocar notas, sino de contar algo con ellas. Trabajás frases, motivos, y cómo desarrollar tus ideas para que tu solo tenga una historia.</p>
              <ul className="method-features">
                <li>Trabajo profundo con frases y motivos</li>
                <li>Desarrollo melódico y temático</li>
                <li>Composición de líneas propias</li>
                <li>Desarrollo de tu huella personal</li>
              </ul>
              <div className="module-result">
                <strong>Resultado:</strong> &ldquo;Tus solos tienen estructura, narrativa y personalidad&rdquo;
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="method-card fret-gps-module">
              <span className="method-icon">🎸</span>
              <h3>Módulo 3: INTEGRACIÓN CREATIVA Y VOZ PROPIA</h3>
              <p>Es el momento de unir todo. Elegís un repertorio desafiante, improvisás libremente y lo preparás para presentarlo como un artista completo.</p>
              <ul className="method-features">
                <li>Repertorio desafiante personalizado</li>
                <li>Preparación para presentación</li>
                <li>Devolución profesional detallada</li>
                <li>Pulido final de tu identidad musical</li>
              </ul>
              <div className="module-result">
                <strong>Resultado:</strong> &ldquo;Cierras con una identidad musical única y definida&rdquo;
              </div>
            </div>
          </div>

          {/* Metodología FRET GPS - NUEVO */}
          <div className="fret-gps-methodology">
            <h3 className="methodology-title">Tu Plan Semanal Personalizado Incluye:</h3>
            <div className="methodology-grid">
              <div className="methodology-item">
                <span className="methodology-icon">📹</span>
                <h4>Videos Customizados</h4>
                <p>Ejercicios específicos para tu nivel y análisis personalizado</p>
              </div>
              <div className="methodology-item">
                <span className="methodology-icon">📝</span>
                <h4>Rutinas de Práctica</h4>
                <p>Plan diario estructurado con objetivos claros y medibles</p>
              </div>
              <div className="methodology-item">
                <span className="methodology-icon">🎥</span>
                <h4>Clases Grabadas</h4>
                <p>Sesiones en vivo + acceso ilimitado a tu biblioteca personal</p>
              </div>
              <div className="methodology-item">
                <span className="methodology-icon">📱</span>
                <h4>Soporte 24/7</h4>
                <p>WhatsApp directo + feedback en tiempo real sobre tus grabaciones</p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Testimonials Section */}
        <section className="testimonials-section" id="testimonials">
          <h2 className="section-title">🌟 Lo Que Dicen Los Estudiantes del Programa</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
            Resultados reales de guitarristas que transformaron su improvisación con FRET GPS
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-avatar">MG</div>
              <div className="testimonial-content">
                <p>&ldquo;Con FRET GPS finalmente entendí cómo conectar la teoría con lo que realmente quería expresar. Ahora improviso con confianza y cada solo tiene mi personalidad.&rdquo;</p>
                <div className="testimonial-author">
                  <strong>María G.</strong>
                  <span>🇲🇽 México</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-avatar">CR</div>
              <div className="testimonial-content">
                <p>&ldquo;El enfoque por módulos me ayudó a ordenar mi aprendizaje. No más práctica sin rumbo. Cada semana sabía exactamente qué trabajar y veía mi progreso.&rdquo;</p>
                <div className="testimonial-author">
                  <strong>Carlos R.</strong>
                  <span>🇦🇷 Argentina</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-avatar">AL</div>
              <div className="testimonial-content">
                <p>&ldquo;Lo que más me gustó fue el feedback constante. Lautaro me ayudó a desarrollar mi propia voz, no a copiar la de otros. Ahora toco con mi identidad.&rdquo;</p>
                <div className="testimonial-author">
                  <strong>Ana L.</strong>
                  <span>🇨🇴 Colombia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Current Students Section */}
        <section className="current-students" id="students">
          <h2 className="section-title">🌎 Guitarristas FRET GPS en América Latina</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
            Más de 200 guitarristas están desarrollando su voz única con nuestro programa
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

        {/* Pricing Section - MODIFICADO */}
        <section className="pricing-section" id="pricing">
          <h2 className="section-title">💰 Opciones de Inversión en Tu Transformación</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
            Programa FRET GPS Completo - 3 Módulos | 12 Semanas Intensivas
          </p>
          
          <div className="pricing-grid">
            {/* Módulos Individuales */}
            <div className="pricing-card">
              <div className="pricing-title">Módulos Individuales</div>
              <div className="pricing-price">$600<span className="pricing-period">USD por módulo</span></div>
              <ul className="pricing-features">
                <li>4 semanas intensivas</li>
                <li>Plan semanal personalizado</li>
                <li>Clases grabadas incluidas</li>
                <li>Soporte WhatsApp 24/7</li>
              </ul>
              <button className="pricing-button" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Me%20interesa%20un%20m%C3%B3dulo%20individual%20del%20programa%20FRET%20GPS.', '_blank')}>
                Elegir Módulo
              </button>
              <div className="pricing-note">Recomendado para base sólida</div>
            </div>

            {/* Plan Mensual */}
            <div className="pricing-card">
              <div className="pricing-title">Plan Mensual</div>
              <div className="pricing-price">$500<span className="pricing-period">USD/mes x 3 meses</span></div>
              <ul className="pricing-features">
                <li>Los 3 módulos completos</li>
                <li>Flexibilidad de pago</li>
                <li>Todos los materiales incluidos</li>
                <li>Soporte continuo</li>
              </ul>
              <button className="pricing-button" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Me%20interesa%20el%20plan%20mensual%20del%20programa%20FRET%20GPS.', '_blank')}>
                Comenzar Ahora
              </button>
              <div className="pricing-note">Total: $1,500 USD</div>
            </div>

            {/* Programa Completo - Destacado */}
            <div className="pricing-card featured">
              <div className="pricing-badge">MÁS POPULAR</div>
              <div className="pricing-title">Programa Completo</div>
              <div className="pricing-price">$1,200<span className="pricing-period">USD pago único</span></div>
              <div className="pricing-save">Valor real: $1,500 - AHORRA $300</div>
              <ul className="pricing-features">
                <li>Los 3 módulos completos</li>
                <li><strong>AHORRA $300 USD</strong></li>
                <li>Biblioteca de backing tracks</li>
                <li>Transcripciones exclusivas</li>
                <li>Masterclass grupal mensual</li>
                <li>Certificado de finalización</li>
              </ul>
              <button className="pricing-button featured" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Me%20interesa%20el%20programa%20FRET%20GPS%20completo.%20Quiero%20comenzar%20mi%20transformaci%C3%B3n.', '_blank')}>
                🚀 COMENZAR AHORA
              </button>
              <div className="pricing-note">Garantía 30 días</div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="guarantee-section">
            <div className="guarantee-card">
              <span className="guarantee-icon">🛡️</span>
              <h3>Garantía Total de 30 Días</h3>
              <p>Si en el primer mes sientes que el programa no es para ti, devuelvo el 100% de tu dinero. Sin preguntas, sin complicaciones.</p>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Urgency Section - NUEVO */}
        <section className="urgency-section">
          <h2 className="urgency-title">⚡ Últimos Días para Cohorte Marzo 2025</h2>
          <div className="urgency-grid">
            <div className="urgency-item">
              <div className="urgency-number">Solo 3</div>
              <div className="urgency-label">Cupos restantes de 8</div>
            </div>
            <div className="urgency-item">
              <div className="urgency-number">48 hrs</div>
              <div className="urgency-label">Para cerrar inscripciones</div>
            </div>
          </div>
          <p className="urgency-text">
            Próxima cohorte hasta Mayo 2025. No pierdas esta oportunidad de transformar tu improvisación.
          </p>
          <button className="urgency-button" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Quiero%20reservar%20mi%20cupo%20para%20la%20cohorte%20de%20Marzo%20del%20programa%20FRET%20GPS.', '_blank')}>
            RESERVAR MI CUPO AHORA
          </button>
        </section>

        <div className="section-divider"></div>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <h2 className="section-title">📞 ¿Listo para Transformar Tu Improvisación?</h2>
          <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
            Comienza con una evaluación gratuita de 30 minutos para diseñar tu plan personalizado
          </p>
          
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">🎸</span>
              <h3>Evaluación Gratuita</h3>
              <p>30 minutos para evaluar tu nivel y diseñar tu plan FRET GPS personalizado</p>
              <button className="contact-button" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Me%20interesa%20agendar%20una%20evaluaci%C3%B3n%20gratuita%20para%20el%20programa%20FRET%20GPS.', '_blank')}>
                Agendar Evaluación
              </button>
            </div>

            <div className="contact-card">
              <span className="contact-icon">💬</span>
              <h3>WhatsApp Directo</h3>
              <p>Habla conmigo directamente para resolver cualquier duda sobre FRET GPS</p>
              <button className="contact-button" onClick={() => window.open('https://wa.me/5491134060511?text=Hola%20Lautaro!%20Tengo%20algunas%20preguntas%20sobre%20el%20programa%20FRET%20GPS.', '_blank')}>
                Escribir Ahora
              </button>
            </div>

            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <h3>Email</h3>
              <p>Escríbeme para información detallada sobre el programa</p>
              <button className="contact-button" onClick={() => window.open('mailto:lautaro@ejemplo.com?subject=Consulta%20sobre%20FRET%20GPS', '_blank')}>
                Enviar Email
              </button>
            </div>
          </div>

          <div className="evaluation-process">
            <h3>Proceso de Admisión:</h3>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">1</span>
                <h4>Evaluación Gratuita (30 min)</h4>
                <p>Charlamos sobre tus objetivos y evalúo tu nivel actual</p>
              </div>
              <div className="process-step">
                <span className="step-number">2</span>
                <h4>Diseño de Plan Personalizado</h4>
                <p>Creo tu rutina específica y establezco objetivos medibles</p>
              </div>
              <div className="process-step">
                <span className="step-number">3</span>
                <h4>¡Comenzamos!</h4>
                <p>Acceso inmediato a la plataforma y primera clase programada</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lautaro Scaglione</h3>
            <p>Programa FRET GPS - Visualiza el Mástil e Improvisa con Fluidez</p>
            <p>Formación EMPA • Especialista en Improvisación Jazz</p>
          </div>
          
          <div className="footer-section">
            <h4>Programa FRET GPS</h4>
            <ul>
              <li><a href="#method">Los 3 Módulos</a></li>
              <li><a href="#pricing">Inversión</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#contact">Evaluación Gratuita</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📱 WhatsApp: +54 9 11 3406-0511</li>
              <li>📧 Email: lautaro@ejemplo.com</li>
              <li>🌎 Toda América Latina</li>
              <li>⏰ Lun-Vie 9:00-18:00 (ARG)</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Lautaro Scaglione. Todos los derechos reservados. | Formación EMPA Certificada</p>
          <p style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem'}}>
            &ldquo;No se trata de tocar notas correctas, se trata de encontrar TU manera de contarle algo al mundo con la guitarra.&rdquo;
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/5491134060511?text=${encodeURIComponent('Hola Lautaro! Vengo de tu web y me interesa información sobre el programa FRET GPS.')}`}
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