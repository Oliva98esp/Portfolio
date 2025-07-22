
<template>
  <section id="experience" class="experience-container" role="region" aria-label="Experiencia profesional y formación">
    <h2 class="section-title">Mi Trayectoria Profesional y Académica</h2>
    
    <!-- Sección de Proyectos -->
    <div class="projects-section">
      <h3 class="subsection-title">Proyectos Destacados</h3>
      <div class="projects-grid">
        <div class="project-card" role="article" aria-label="Proyecto Isokan: Aplicación web para protectora de animales">
          <h4>Isokan</h4>
          <p class="project-subtitle">Aplicación Web para Protectora de Animales</p>
          <p class="project-description">
            Como desarrollador frontend, diseñé y desarrollé <strong>Isokan</strong>, una aplicación web innovadora construida con <strong>Vue 3</strong>, JavaScript y CSS moderno. Este proyecto, creado para una protectora de animales dedicada a la rehabilitación de perros con problemas de conducta severa, agresivos y violentos, optimiza la gestión de adopciones y seguimientos. Implementé interfaces responsivas y accesibles, integrando componentes dinámicos que facilitan la interacción con los usuarios, desde formularios interactivos hasta visualizaciones de casos de éxito. Mi contribución mejoró la visibilidad de la protectora, aumentando el interés en adopciones responsables y fortaleciendo su impacto social.
          </p>
          <ul class="tech-list">
            <li>Vue 3</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Accesibilidad Web (WCAG)</li>
            <li>Optimización SEO</li>
            <li>API REST</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div class="project-card" role="article" aria-label="Proyecto ByFuelAdvance: Plataforma para taller de coches">
          <h4>ByFuelAdvance</h4>
          <p class="project-subtitle">Plataforma Web para Taller de Coches Líder en GLP</p>
          <p class="project-description">
            Lideré el desarrollo de la plataforma web para <strong>ByFuelAdvance</strong>, un taller automotriz líder en instalaciones de sistemas de gas licuado de petróleo (GLP). Utilizando <strong>Vue 3</strong>, JavaScript y técnicas avanzadas de CSS, diseñé una experiencia digital que permite a los clientes explorar servicios, gestionar citas y conocer los beneficios de las conversiones a GLP. La plataforma incorpora un diseño responsivo, optimización de rendimiento y una interfaz intuitiva, lo que resultó en un incremento del 30% en las reservas online y una mayor satisfacción del cliente.
          </p>
          <ul class="tech-list">
            <li>Vue 3</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Optimización SEO</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sección de Formación -->
    <div class="education-section">
      <h3 class="subsection-title">Formación Académica</h3>
      <div class="education-card" role="article" aria-label="Formación en Desarrollo de Aplicaciones Web">
        <h4>Grado Superior en Desarrollo de Aplicaciones Web</h4>
        <p class="institution">IES Pacífico (Málaga)</p>
        <p class="date">Septiembre 2023 - Junio 2025</p>
        <p class="description">
          Completé un Grado Superior en Desarrollo de Aplicaciones Web, donde adquirí competencias avanzadas en programación frontend y backend, incluyendo Vue.js, JavaScript, Java, SQL y diseño de interfaces. Mi formación incluyó proyectos prácticos que consolidaron mi capacidad para desarrollar soluciones web robustas y escalables, con un enfoque en la experiencia del usuario y la accesibilidad.
        </p>
      <p class="languages">
  Además, poseo un nivel B1 de inglés, que he reforzado durante un año de experiencia laboral en Países Bajos, donde trabajé en un entorno profesional internacional. Esta vivencia me permitió desenvolverme con soltura tanto en conversaciones técnicas como en interacciones cotidianas. También cuento con un nivel B1 de valenciano, que me permite comunicarme de forma efectiva en contextos tanto formales como informales.
</p>

      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.experience-container {
  padding: 4rem 2rem;
  background: linear-gradient(145deg, #0a0a23, #2a1b3d);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
  min-height: 100vh;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2rem;
  animation: fadeIn 1s ease-out;
}

.subsection-title {
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  font-weight: 700;
  color: #d1d1f6;
  margin: 2rem 0 1.5rem;
}

.projects-section,
.education-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card,
.education-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover,
.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(98, 0, 234, 0.3);
}

.project-card h4,
.education-card h4 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.project-subtitle,
.institution {
  font-size: 1.1rem;
  color: #d1d1f6;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 0.9rem;
  color: #d1d1f6;
  margin-bottom: 1rem;
}

.project-description,
.description {
  font-size: 0.9rem;
  color: #d1d1f6;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.languages {
  font-size: 0.9rem;
  color: #d1d1f6;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tech-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
}

.tech-list li {
  background: #6200ea;
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Animación de entrada */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media Queries para diseño responsivo */
@media (max-width: 768px) {
  .experience-container {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2rem);
  }

  .subsection-title {
    font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card,
  .education-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .project-card h4,
  .education-card h4 {
    font-size: 1.2rem;
  }

  .project-subtitle,
  .institution {
    font-size: 1rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .project-description,
  .description {
    font-size: 0.8rem;
  }

  .tech-list li {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
