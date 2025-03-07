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
              <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">Inicio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900">Acerca</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-700 hover:text-gray-900">Contacto</NuxtLink>
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
// No es necesaria lógica adicional para este layout minimalista
</script>