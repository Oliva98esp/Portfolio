<template>
  <section id="skills" class="skills-container" role="region" aria-label="Habilidades técnicas">
    <h2 class="section-title">Mis Habilidades</h2>
<div class="skills-grid">
  <!-- HTML -->
  <div class="skill-card" role="article" aria-label="Habilidad en HTML">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      alt="Logo de HTML5"
      class="skill-icon"
    />
    <h3>HTML</h3>
    <p>Desarrollo de interfaces web semánticas y accesibles.</p>
  </div>
  <!-- CSS -->
  <div class="skill-card" role="article" aria-label="Habilidad en CSS">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      alt="Logo de CSS3"
      class="skill-icon"
    />
    <h3>CSS</h3>
    <p>Estilización avanzada de interfaces web con CSS moderno.</p>
  </div>
  <!-- JavaScript -->
  <div class="skill-card" role="article" aria-label="Habilidad en JavaScript">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="Logo de JavaScript"
      class="skill-icon"
    />
    <h3>JavaScript</h3>
    <p>Programación dinámica para aplicaciones web interactivas.</p>
  </div>
  <!-- Vue -->
  <div class="skill-card" role="article" aria-label="Habilidad en Vue">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
      alt="Logo de Vue.js"
      class="skill-icon"
    />
    <h3>Vue</h3>
    <p>Desarrollo de aplicaciones web modernas con Vue.js.</p>
  </div>
  <!-- Java -->
  <div class="skill-card" role="article" aria-label="Habilidad en Java">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      alt="Logo de Java"
      class="skill-icon"
    />
    <h3>Java</h3>
    <p>Programación backend y lógica de aplicaciones.</p>
  </div>
  <!-- SQL -->
  <div class="skill-card" role="article" aria-label="Habilidad en SQL">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      alt="Logo de SQL"
      class="skill-icon"
    />
    <h3>SQL</h3>
    <p>Gestión y consulta de bases de datos relacionales.</p>
  </div>
  <!-- API -->
  <div class="skill-card" role="article" aria-label="Habilidad en API">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
      alt="Ícono de API"
      class="skill-icon"
      style="filter: invert(1);"
    />
    <h3>API</h3>
    <p>Integración y desarrollo de APIs RESTful.</p>
  </div>
  <!-- GIT -->
<div class="skill-card" role="article" aria-label="Habilidad en GIT">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
    alt="Ícono de GIT"
    class="skill-icon"
  />
  <h3>GIT</h3>
  <p>Control de versiones y colaboración en proyectos.</p>
</div>

<!-- GITHUB -->
<div class="skill-card" role="article" aria-label="Habilidad en GITHUB">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
    alt="Ícono de GITHUB"
    class="skill-icon"
  />
  <h3>GITHUB</h3>
  <p>Control de versiones y colaboración en proyectos.</p>
</div>

</div>

  </section>
</template>

<script setup>
// No lógica necesaria por ahora
</script>

<style scoped>
.skills-container {
  padding: 4rem 2rem;
  background: linear-gradient(145deg, #0a0a23, #2a1b3d);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2rem;
  animation: fadeTub 1s ease-out;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(98, 0, 234, 0.3);
}

.skill-card:focus {
  outline: 2px solid #6200ea;
  outline-offset: 2px;
}

.skill-icon {
  width: 60px; /* Tamaño fijo para consistencia */
  height: 60px;
  margin-bottom: 1rem;
  object-fit: contain; /* Asegura que el SVG se ajuste sin distorsionarse */
  transition: filter 0.3s ease;
}

.skill-card:hover .skill-icon {
  filter: brightness(1.2) drop-shadow(0 0 8px rgba(98, 0, 234, 0.5)); /* Efecto hover */
}

.skill-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.skill-card p {
  font-size: 0.9rem;
  color: #d1d1f6;
  line-height: 1.5;
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
  .skills-container {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2rem);
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .skill-card {
    padding: 1.5rem;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .skill-card h3 {
    font-size: 1.2rem;
  }

  .skill-card p {
    font-size: 0.8rem;
  }
}
</style>