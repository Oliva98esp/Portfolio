<template>
  <div class="hero-container" role="banner">
    <!-- Contenedor para partículas -->
    <div id="particles-js" class="particles-container"></div>
    <div class="content">
      <h1 id="hero-title">Hola, soy José Carlos Oliva Rodríguez</h1>
      <p>Desarrollador Frontend Trainee</p>
      <p>Descubre mis proyectos y habilidades</p>
      <button 
        class="cta-button" 
        aria-label="Ver mis proyectos"
         @click="scrollToProjects"
      >
        Ver Proyectos
      </button>
      <button 
  class="cta-button" 
  aria-label="Ver mis habilidades" 
  @click="scrollToSkills"
>
  Ver Habilidades
</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Inicializar particles.js al montar el componente
onMounted(() => {
  // Cargar particles.js con la configuración desde particles.json
  if (window.particlesJS) {
    window.particlesJS.load('particles-js', '/particles.json', () => {
      console.log('particles.js cargado correctamente');
    });
  } else {
    console.error('particles.js no está disponible');
  }
});
const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(145deg, #0a0a23, #2a1b3d); /* Fondo de respaldo */
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  user-select: none;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Asegura que las partículas estén detrás del contenido */
}

.content {
  z-index: 1; /* Contenido por encima de las partículas */
  padding: 20px;
  animation: fadeIn 1.5s ease-out;
  max-width: 800px;
}

.hero-container h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.hero-container h1:hover {
  transform: scale(1.05);
}

.hero-container p {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #d1d1f6;
  margin: 0.5rem 0;
  font-weight: 400;
  line-height: 1.6;
}

.cta-button {
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: #6200ea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #7f39fb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(98, 0, 234, 0.5);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-button:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
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
  .hero-container h1 {
    font-size: clamp(2rem, 4vw, 2.5rem);
  }

  .hero-container p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
  }

  .cta-button {
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 15px;
  }

  .hero-container h1 {
    font-size: clamp(1.8rem, 3.5vw, 2rem);
  }

  .cta-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>