<script setup>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div
    class="antialiased text-tiny w-full min-h-screen bg-white dark:bg-stone-950 text-stone-950 dark:text-white"
  >
    <Navigation />
    <div class="px-40">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
