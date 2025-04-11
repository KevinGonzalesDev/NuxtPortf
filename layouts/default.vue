<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Cabecera -->
    <header class="bg-white shadow py-4">
      <div class="container mx-auto flex justify-between items-center px-6">
        <div class="flex justify-center align-middle">
          <img class="aspect-auto" width="50" src="/public/makakoIMGpng.png" />
          <span class="box-decoration-clone font-bold bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">
            KGONZALES<br />MAKAKO
          </span>
        </div>

        <nav>
          <ul class="flex space-x-4">
            <li>
              <NuxtLink :to="localePath('index')" class="text-gray-700 hover:text-gray-900">{{ t('index') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('about')" class="text-gray-700 hover:text-gray-900">{{ t('about') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('proyect')" class="text-gray-700 hover:text-gray-900">{{ t('proyect') }}
              </NuxtLink>
            </li>

            <li>
              <div class="relative inline-block text-left">
                <!-- Botón que togglea el menú -->
                <button @click="toggleDropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
             focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex 
             items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Idioma
                  <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <!-- Menú desplegable -->
                <div v-if="isOpen" class="absolute right-0 z-10 mt-2 w-44 bg-white rounded-lg shadow dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li class="flex items-center" v-for="(item, index) in menuItems" :key="index">
                      <img class="w-5 h-5 rounded-full mr-2" :src="item.avatar" alt="Flag">
                      <a @click.prevent="selectLanguage(item.lang)"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {{ item.label }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Área principal de contenido -->
    <main class="flex-grow container mx-auto p-6">
      <NuxtPage />
    </main>

    <!-- Pie de página -->
    <footer class="bg-white shadow py-4">
      <div class="container mx-auto text-center text-sm text-gray-600">
        © 2025 Mi Portafolio. Todos los derechos reservados.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const { t } = useI18n()
const localePath = useLocalePath()
import { useI18n } from 'vue-i18n'
import { useCookie } from '#app'

const { locale, setLocale } = useI18n()


const menuItems = [
  { href: '#', lang: 'en', label: 'English', avatar: '/united-kingdom.png' },
  { href: '#', lang: 'es', label: 'Espanish', avatar: '/spain.png' },
  { href: '#', lang: 'pt', label: 'Portugues', avatar: '/portugal.png' }
]





// Crear una cookie para almacenar el idioma seleccionado
const localeCookie = useCookie('user-locale')

// Si la cookie ya tiene un idioma guardado, lo establecemos al cargar la página
if (localeCookie.value) {
  setLocale(localeCookie.value)
}


const changeLanguage = (lang) => {
  setLocale(lang)
  localeCookie.value = lang // Guardamos el idioma en la cookie
}





const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

async function selectLanguage(languageCode) {
  console.log('Cambiando idioma a:', languageCode);

  // Llama a setLocale con el código del idioma seleccionado (ej: 'en', 'es', 'pt')
  await setLocale(languageCode);

  // Opcional: cierra el dropdown después de seleccionar
  isOpen.value = false;

  // Nota: setLocale puede que recargue la página o navegue a la URL
  // con el prefijo del idioma correcto, dependiendo de tu 'strategy'
  // en la configuración de i18n. Esto es normal.
}


</script>