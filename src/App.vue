<script setup>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="w-full lowercase bg-lack-white text-lack-black dark:bg-lack-primary dark:text-lack-white font-jetbrains"
  >
    <Navigation />
    <main class="pt-4">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
