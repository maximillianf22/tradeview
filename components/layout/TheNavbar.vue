<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/">
        <img src="/path-to-logo.png" alt="Logo" class="h-8 w-auto" />
      </a>
      <div class="hidden md:flex space-x-4">
        <a href="#" class="text-white">Opción 1</a>
        <a href="#" class="text-white">Opción 2</a>
        <a href="#" class="text-white">Opción 3</a>
        <a href="#" class="text-white">Opción 4</a>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="text-white">Iniciar Sesión</a>
        <a href="#" class="text-white">Cambiar Idioma</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
};
</script>
