
<template>
  <div>
    <button
      class="contact-btn"
      aria-label="Abrir formulario de contacto"
      @click="openModal"
      @keyup.enter="openModal"
    >
 <img
  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
  alt="Ícono de contacto"
  class="contact-icon"
/>
      <span class="contact-text">Contacto</span>
    </button>

    <div
      v-if="showModal"
      class="modal-backdrop"
      @click.self.stop="closeModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      tabindex="-1"
      @keydown.esc="closeModal"
    >
      <div class="modal-content">
        <h2 id="modalTitle">Elige cómo contactarme</h2>
        <div class="contact-options">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=josecarlosoliva01@gmail.com&su=Contacto%20desde%20Portafolio&body=Hola%20José%20Carlos,%20te%20contacto%20desde%20tu%20portafolio."
  target="_blank"
  rel="noopener noreferrer"
  class="contact-option"
  aria-label="Contactar por correo electrónico"
  @click.stop
>
<img
  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
  alt="Ícono de Gmail"
  class="contact-option-icon"
/>
 Email
          </a>
          <a
            href="https://wa.me/34605654086"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-option"
            aria-label="Contactar por WhatsApp"
            @click.stop
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Ícono de WhatsApp"
              class="contact-option-icon"
            />
            WhatsApp
          </a>
        </div>
        <button
          class="close-btn"
          @click="closeModal"
          aria-label="Cerrar modal de contacto"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showModal = ref(false);

function openModal() {
  showModal.value = true;
  // Atrapamos el foco en el modal
  setTimeout(() => {
    const modal = document.querySelector('.modal-backdrop');
    if (modal) modal.focus();
  }, 0);
}

function closeModal() {
  showModal.value = false;
}

// Manejar tecla Escape para cerrar el modal
const handleEscape = (event) => {
  if (event.key === 'Escape' && showModal.value) {
    closeModal();
  }
};

// Añadir y remover el listener para la tecla Escape
onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.contact-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.8rem 1.5rem;
  background: #6200ea;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(98, 0, 234, 0.5);
}

.contact-btn:hover {
  background: #7f39fb;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 16px rgba(98, 0, 234, 0.6);
}

.contact-btn:active {
  transform: translateY(0);
}

.contact-btn:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.contact-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.contact-text {
  display: inline-block;
}

/* Animación de entrada para el botón */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-btn {
  animation: slideIn 0.5s ease-out;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 35, 0.8); /* Ajustado a la paleta oscura */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: #2a1b3d; /* Coherente con el gradiente de fondo */
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  position: relative;
  color: #d1d1f6; /* Color de texto coherente */
  box-shadow: 0 0 20px rgba(98, 0, 234, 0.5); /* Sombra púrpura */
  text-align: center;
  animation: scaleIn 0.3s ease-out;
}

.contact-options {
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
  gap: 1rem;
}

.contact-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6200ea; /* Color principal de la paleta */
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.contact-option:hover,
.contact-option:focus {
  color: #7f39fb; /* Color hover coherente */
  transform: scale(1.05);
  outline: none;
}

.contact-option-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.4rem;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #6200ea; /* Color principal */
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  transition: color 0.3s ease, transform 0.3s ease;
}

.close-btn:hover,
.close-btn:focus {
  color: #7f39fb; /* Color hover */
  transform: scale(1.1);
  outline: none;
}

/* Animaciones */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Media Queries para diseño responsivo */
@media (max-width: 768px) {
  .contact-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .contact-icon {
    width: 20px;
    height: 20px;
  }

  .modal-content {
    padding: 1.5rem;
    max-width: 350px;
  }

  .contact-option {
    font-size: 1rem;
  }

  .contact-option-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .contact-btn {
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .contact-icon {
    width: 18px;
    height: 18px;
  }

  .contact-text {
    display: none; /* Ocultar texto en pantallas muy pequeñas */
  }

  .modal-content {
    padding: 1rem;
    max-width: 300px;
  }

  .contact-option {
    font-size: 0.9rem;
  }

  .contact-option-icon {
    width: 32px;
    height: 32px;
  }

  .close-btn {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
  }
}
</style>
