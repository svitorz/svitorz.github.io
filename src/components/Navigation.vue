<script setup>
import ThemeToggle from "./ThemeToggle.vue";
</script>
<template>
  <nav class="flex items-center justify-between px-6 py-4">
    <router-link
      to="/"
      class="text-xl font-bold flex items-center justify-center px-2"
    >
      <img src="/icon.svg" class="w-5 h-5 dark:invert" alt="Elephant Icon" />
      svitorz
    </router-link>
    <div class="space-x-4">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/about" class="hover:underline">about</router-link>
      <router-link to="/projects" class="hover:underline">Projects</router-link>
      <router-link to="/contact" class="hover:underline">Contact</router-link>
    </div>
    <div class="float-end">
      <ThemeToggle />
    </div>
  </nav>
</template>
