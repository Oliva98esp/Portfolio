
<template>
  <div class="hero-container" role="banner">
    <div id="particles-js" class="particles-container"></div>
    <div class="content">
      <h1 id="hero-title">Hola, soy José Carlos Oliva Rodríguez</h1>
      <p>Desarrollador Frontend Apasionado</p>
      <p>Descubre mis proyectos, habilidades, experiencia y carta de presentación</p>
      <router-link 
        to="#proyectos"
        class="cta-button"
        aria-label="Ver mis proyectos"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
          alt="Ícono de proyectos"
          class="cta-icon"
        />
        Ver Proyectos
      </router-link>
      <router-link 
        to="#habilidades"
        class="cta-button"
        aria-label="Ver mis habilidades"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
          alt="Ícono de habilidades"
          class="cta-icon"
        />
        Ver Habilidades
      </router-link>
      <a
        :href="cvUrl"
        download="Jose_Carlos_Oliva_CV.pdf"
        class="cta-button"
        aria-label="Descargar currículum en formato PDF"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
          alt="Ícono de descargar CV"
          class="cta-icon"
        />
        Descargar CV
      </a>
      <router-link 
        to="#experiencia"
        class="cta-button"
        aria-label="Ver mi experiencia profesional"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Ícono de experiencia profesional"
          class="cta-icon"
        />
        Ver Experiencia
      </router-link>
      <router-link 
        to="#carta"
        class="cta-button"
        aria-label="Ver mi carta de presentación"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
          alt="Ícono de carta de presentación"
          class="cta-icon"
        />
        Ver Carta
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// URL del PDF (reemplazar con la URL real de tu currículum)
const cvUrl = ref('https://example.com/cv.pdf')

// Inicializar particles.js
onMounted(() => {
  if (typeof window.particlesJS === 'undefined') {
    console.error('particles.js no está disponible. Asegúrate de incluir la librería en index.html o main.js')
    return
  }

  window.particlesJS.load('particles-js', '/particles.json', () => {
    console.log('particles.js cargado correctamente')
  }, (error) => {
    console.error('Error al cargar particles.json:', error)
  })
})
</script>
<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(145deg, #0a0a23, #2a1b3d);
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
  z-index: 0;
}

.content {
  z-index: 1;
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
  margin-right: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: #6200ea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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

.cta-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
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

  .cta-icon {
    width: 20px;
    height: 20px;
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
    margin-right: 0.5rem;
  }

  .cta-icon {
    width: 18px;
    height: 18px;
  }
}

html {
  scroll-behavior: smooth;
}

/* Opcional: Ajustar el desplazamiento para compensar headers fijos si los tienes */
:deep(.section) {
  scroll-margin-top: 80px; /* Ajusta según la altura de tu header */
}
</style>
