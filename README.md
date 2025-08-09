# 🎸 Lautaro Scaglione - Programa FRET GPS

Landing page profesional para el programa FRET GPS de Lautaro Scaglione, guitarrista graduado de EMPA especializado en improvisación jazz.

## 📋 Descripción del Proyecto

Esta landing page está diseñada para **guitarristas intermedios** que buscan desarrollar su propia voz en la improvisación. El sitio complementa la estrategia de marketing de Instagram de Lautaro, proporcionando credibilidad profesional y redirigiendo a sus canales de conversión principales.

### 🎯 Objetivo Principal
- **Complementar** la estrategia de Instagram existente
- **Filtrar** y cualificar guitarristas intermedios serios
- **Redirigir** al WhatsApp y Calendly donde Lautaro convierte

### 🎨 Estética y Diseño
- **Inspirada en el PDF del programa FRET GPS** para consolidar marca personal
- **Profesional y elegante** sin parecer "vende-cursos trucho"
- **Tipografía limpia** y colores consistentes (azul oscuro + dorado)
- **Responsive design** optimizado para móviles

## 🚀 Comenzar

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd lautaro-jazz-landing
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### 🛠️ Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos principales (estética FRET GPS)
│   ├── layout.tsx       # Layout principal + SEO optimizado
│   └── page.tsx         # Página principal con mensaje redireccionado
├── components/          # Componentes reutilizables (futuro)
└── lib/                # Utilidades (futuro)

public/
├── favicon.ico         # Favicon del sitio
└── [assets]           # Imágenes y recursos estáticos
```

## 🎯 Características Principales

### ✅ Implementado
- **Mensaje redireccionado** hacia guitarristas intermedios
- **Sección "Para Quién Es"** que filtra el target correcto
- **6 Pilares del programa FRET GPS** explicados simplemente
- **CTAs conectados** al Calendly y WhatsApp reales
- **SEO optimizado** para búsquedas de improvisación jazz
- **Diseño responsive** para todos los dispositivos
- **Estética profesional** inspirada en el PDF del programa

### 🔄 En Progreso
- **Testimonios en video** (pendiente recibir de YouTube)
- **Optimización de conversión** basada en métricas

### 📋 Pendiente
- **Mini workshops** como oferta low-ticket
- **Blog/contenido** para SEO orgánico
- **A/B testing** del copy principal

## 🔗 Integraciones

### **Calendly**
- **URL**: https://calendly.com/lautaroguitarra/sesion-de-claridad
- **Configurado** con preguntas de cualificación inteligentes
- **Conectado** a botones CTA principales

### **WhatsApp Business**
- **Número**: +541134060511
- **Mensaje predefinido** para guitarristas intermedios
- **Botón flotante** siempre visible

### **SEO y Analytics**
- **Meta tags** optimizados para improvisación jazz
- **Structured data** para rich snippets
- **Google Analytics** (por configurar)

## 🎨 Guía de Estilo

### **Colores Principales**
```css
--primary-jazz: #1a1a2e;      /* Azul oscuro principal */
--accent-gold: #d4af37;       /* Dorado para acentos */
--off-white: #faf8f5;         /* Blanco para texto */
--success-green: #27ae60;     /* Verde para "SÍ es para vos" */
--deep-red: #8b1538;          /* Rojo para "NO es para vos" */
```

### **Tipografía**
```css
--heading-font: 'Playfair Display', serif;  /* Títulos elegantes */
--body-font: 'Inter', sans-serif;           /* Texto limpio y legible */
--accent-font: 'Bebas Neue', cursive;       /* Acentos especiales */
```

### **Principios de Diseño**
- **Profesional pero accesible** - No intimidante
- **Espacioso y limpio** - Sin saturación visual
- **Consistente con PDF** - Marca personal consolidada
- **Mobile-first** - Mayoría del tráfico es móvil

## 👤 Target Audience

### ✅ **Para Quién ES el Programa**
- Guitarristas que ya tocan escalas pentatónicas básicas
- Conocen algunos arpegios pero no saben cuándo usarlos
- Se frustran porque siempre improvisas lo mismo
- Quieren tocar standards de jazz con personalidad propia

### ❌ **Para Quién NO ES**
- Principiantes que recién empiezan
- No saben acordes básicos
- Buscan clases tradicionales de técnica
- No les interesa la improvisación

## 📈 Métricas y Conversión

### **Flujo de Conversión**
```
Instagram → Landing → WhatsApp/Calendly → Lautaro convierte
    O
Google → Landing → Calendly → Evaluación → Programa
```

### **KPIs Principales**
- **Tasa de conversión** landing → agendamiento Calendly
- **Calidad de leads** (guitarristas intermedios serios)
- **Conversión final** evaluación → programa completo

## 🚀 Deployment

### **Vercel (Recomendado)**
```bash
npm run build
# Deploy automático via Git push
```

### **Otros Hosting**
```bash
npm run build
npm run start
# Servidor en puerto 3000
```

## 🤝 Contribución

### **Próximas Mejoras**
1. **Testimonios reales** en video de YouTube
2. **Optimización SEO** continua
3. **A/B testing** de copy y CTAs
4. **Analytics** y tracking de conversiones

### **Notas para Desarrollo**
- **Mantener estética** consistente con PDF FRET GPS
- **Priorizar conversión** sobre elementos decorativos
- **Mobile-first** siempre
- **Testimonios auténticos** solamente

## 📞 Contacto

**Lautaro Scaglione**
- **WhatsApp**: +541134060511
- **Calendly**: https://calendly.com/lautaroguitarra/sesion-de-claridad
- **Instagram**: @lautaroguitarra

**Desarrollador**: Piero Jacinto
- **Email**: pierojacinto@gmail.com

---

## 📝 Notas Técnicas

### **Stack Tecnológico**
- **Framework**: Next.js 15.4.6
- **Styling**: CSS personalizado (sin Tailwind para mayor control)
- **Deployment**: Vercel
- **Analytics**: Google Analytics (pendiente)

### **Optimizaciones**
- **Lazy loading** de imágenes
- **Optimización de fuentes** con next/font
- **Meta tags** completos para SEO
- **Structured data** para rich snippets

### **Mantenimiento**
- **Actualizar testimonios** cuando lleguen nuevos videos
- **Revisar métricas** mensualmente
- **Ajustar copy** según feedback de conversiones
- **Mantener Calendly** sincronizado

---

*"No se trata de tocar notas correctas, se trata de encontrar TU manera de contarle algo al mundo con la guitarra."* - Lautaro Scaglione