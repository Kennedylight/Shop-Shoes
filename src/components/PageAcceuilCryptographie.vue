<template>
  <div
    class="relative w-full min-h-[75vh] h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/img/crypto1.jpg)' }"
  >
    <!-- Overlay en dégradé sombre -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-indigo-900/60 to-black/80 z-0"></div>

    <!-- Contenu principal -->
    <div class="relative z-10 w-[90%] max-w-4xl flex flex-col items-center text-center md:text-left space-y-8 animate-fade-in-up" style="animation-delay: 0.3s; animation-fill-mode: both">
      <h1 class="text-3xl md:text-5xl text-center font-extrabold leading-snug tracking-tight text-white">
        Laissez vos données parler <span class="text-[#7F1DFF]">en toute confidentialité</span>.
      </h1>
      <p class="text-lg md:text-xl text-center font-light text-gray-200 max-w-2xl">
        Avec la puissance de l'algorithme AES, chiffrez et déchiffrez vos messages en toute simplicité et sécurité.
      </p>
      <router-link
        to="/chiffrement"
        class="inline-block px-8 py-4 bg-[#7F1DFF] hover:bg-[#5e61ff] text-white text-lg font-medium rounded-xl shadow-lg transition duration-500 hover:scale-105"
      >
        Commencez maintenant
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease forwards;
}
</style>
