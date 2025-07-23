
<template>
  <section id="carta" class="carta-container" role="region" aria-label="Carta de presentación">
    <h2 class="section-title">Carta de Presentación</h2>
    <div class="carta-content">
      <div class="carta-card" role="article" aria-label="Carta de presentación de José Carlos Oliva Rodríguez">
        <p class="greeting">Estimado/a equipo de reclutamiento,</p>
        <p class="intro">
          Soy José Carlos Oliva Rodríguez, un desarrollador frontend especializado en <strong>Vue.js</strong>, apasionado por crear experiencias digitales innovadoras, accesibles y de alto rendimiento. He consolidado mis habilidades técnicas a través de una sólida base académica y la ejecución exitosa de dos proyectos de impacto: <strong>Isokan</strong> y <strong>ByFuelAdvance</strong>. Mi objetivo es unirme a un equipo dinámico donde pueda contribuir con mis conocimientos, aprender de profesionales experimentados y crecer como desarrollador.
        </p>
        <p class="project-highlight">
          En <strong>Isokan</strong>, diseñé y desarrollé una aplicación web con <strong>Vue 3</strong>, JavaScript y CSS moderno para una protectora de animales dedicada a la rehabilitación de perros con problemas de conducta severa. <br>Este proyecto no solo me permitió implementar interfaces responsivas y accesibles, sino también optimizar procesos de adopción, mejorando la visibilidad de la organización y su impacto social. La experiencia reforzó mi capacidad para abordar desafíos técnicos con soluciones creativas y centradas en el usuario.
          <br>He creado una <strong>API privada</strong> para consumir todas las imágenes de los perros, lo que permite una carga más rápida y eficiente de los datos, mejorando la experiencia del usuario al interactuar con la aplicación,el rendimiento y los tiempos de carga.
        </p>
        <p class="project-highlight">
          Por otro lado, en <strong>ByFuelAdvance</strong>, Desarrollé de una plataforma web para un taller automotriz   <strong>Vue 3</strong>, JavaScript y técnicas avanzadas de CSS, creé una experiencia digital intuitiva que permite a los clientes gestionar citas y explorar servicios. El resultado fue un incremento significativo en las reservas online y una mayor satisfacción del cliente, demostrando mi habilidad para entregar soluciones técnicas que generan valor empresarial.
        </p>
       
        <p class="motivation">
          Estoy entusiasmado por la oportunidad de aportar mi pasión por el desarrollo frontend y mis habilidades técnicas a su equipo. Como profesional en formación, mi capacidad de aprendizaje rápido, mi compromiso con la excelencia y mi enfoque colaborativo me permiten integrarme eficazmente en entornos ágiles. Estoy deseoso de contribuir con soluciones innovadoras, aprender de nuevos desafíos y crecer junto a su organización.
        </p>
        <p class="closing">
          Les invito a explorar mi currículum para conocer más detalles sobre mi trayectoria y a contactarme para crear una relación laboral. Estoy disponible a través de mi formulario de contacto o mediante la descarga de mi CV.
        </p>
        <div class="action-buttons">
       
          <a
            :href="cvUrl"
            download="Jose_Carlos_Oliva_CV.pdf"
            class="download-btn"
            aria-label="Descargar currículum en formato PDF"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="Ícono de descarga"
              class="download-icon"
            />
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// URL del PDF (reemplazar con la URL real de tu currículum)
const cvUrl = ref('/Jose_Carlos_Oliva_CV.pdf');

const router = useRouter();

// Función para abrir el modal de contacto (asumiendo que ContactoBtn.vue emite un evento global o está integrado)
const openContactModal = () => {
  // Emite un evento global para abrir el modal de ContactoBtn.vue
  // Nota: Esto requiere que ContactoBtn.vue esté configurado para escuchar este evento
  window.dispatchEvent(new CustomEvent('open-contact-modal'));
};
</script>

<style scoped>
.carta-container {
  padding: 4rem 2rem;
  background: linear-gradient(145deg, #0a0a23, #2a1b3d);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2rem;
  animation: fadeIn 1s ease-out;
}

.carta-content {
  max-width: 800px;
  margin: 0 auto;
}

.carta-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carta-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(98, 0, 234, 0.3);
}

.greeting {
  font-size: 1.1rem;
  font-weight: 600;
  color: #d1d1f6;
  margin-bottom: 1rem;
}

.intro,
.project-highlight,
.education,
.motivation,
.closing {
  font-size: 0.9rem;
  color: #d1d1f6;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.intro strong,
.project-highlight strong {
  color: #ffffff;
  font-weight: 600;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.contact-btn,
.download-btn {
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

.download-btn {
  background: #7f39fb;
}

.contact-btn:hover,
.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(98, 0, 234, 0.5);
}

.contact-btn:active,
.download-btn:active {
  transform: translateY(0);
}

.contact-btn:focus,
.download-btn:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.download-icon {
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
  .carta-container {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2rem);
  }

  .carta-card {
    padding: 1.5rem;
  }

  .greeting,
  .intro,
  .project-highlight,
  .education,
  .motivation,
  .closing {
    font-size: 0.8rem;
  }

  .contact-btn,
  .download-btn {
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
  }

  .download-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .action-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-btn,
  .download-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .download-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
