<template>
  <section id="projects" class="projects-container" role="region" aria-label="Proyectos destacados">
    <h2 class="section-title">Mis Proyectos</h2>
    <div class="projects-grid">
      <!-- Proyecto 1: Isokan -->
      <div 
        class="project-card" 
        role="button" 
        tabindex="0" 
        aria-label="Visitar Isokan" 
        @click="goToProject('https://www.isokan.es')"
        @keyup.enter="goToProject('https://www.isokan.es')"
      >
        <img 
          src="/public/imagenes/logohttps.png" 
          alt="Miniatura de la aplicación web Isokan" 
          class="project-image"
        >
        <div class="project-info">
          <h3>Isokan</h3>
          <p>App web para una protectora de animales y centro de adiestramiento y rehabilitación de casos agresivos.</p>
        </div>
      </div>
      <!-- Proyecto 2: ByFuel Advance -->
      <div 
        class="project-card" 
        role="button" 
        tabindex="0" 
        aria-label="Visitar ByFuel Advance" 
        @click="goToProject('https://www.byfueladvance.com')"
        @keyup.enter="goToProject('https://www.byfueladvance.com')"
      >
        <img 
          src="/public/imagenes/logoFuelAdvance.png" 
          alt="Miniatura de la aplicación web ByFuel Advance" 
          class="project-image"
        >
        <div class="project-info">
          <h3>ByFuel Advance</h3>
          <p>Solución web para la gestión de un taller mecánico y sus diferentes servicios.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Inicializar el router
const router = useRouter();

// Función para redirigir a URLs externas
const goToProject = (url) => {
  // Usar router.push para URLs externas (redirige abriendo en la misma pestaña)
  window.location.href = url; // Alternativa a router.push para URLs externas
};
</script>

<style scoped>
.projects-container {
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
  animation: fadeIn 1s ease-out;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(98, 0, 234, 0.3);
}

.project-card:focus {
  outline: 2px solid #6200ea;
  outline-offset: 2px;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: contain ;
  margin: 10px 0;
  padding: 10px 10px 0;
  display: block;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.project-info p {
  font-size: 1rem;
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
  .projects-container {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2rem);
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .project-info {
    padding: 1rem;
  }

  .project-info h3 {
    font-size: 1.3rem;
  }

  .project-info p {
    font-size: 0.9rem;
  }
}
</style>