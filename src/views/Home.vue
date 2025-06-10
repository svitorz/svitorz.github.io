<script setup>
import StyledButton from "../components/Buttons/StyledButton.vue";
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="flex-grow flex items-center justify-center">
      <div class="text-center space-y-4 px-4">
        <h1 class="text-6xl font-bold">Hello, i'm Vitor Castro</h1>
        <p class="text-xl text-lack-cyan">
          Full-stack developer, Linux enthusiast, and minimalist design lover.
        </p>
        <div class="mt-6">
          <StyledButton to="/projects"> Projects </StyledButton>
        </div>
      </div>
    </section>
  </div>
</template>
