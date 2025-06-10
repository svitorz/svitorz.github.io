<script setup>
import StyledButton from "../components/Buttons/StyledButton.vue";
</script>
<template>
  <div class="min-h-screen py-16 px-4">
    <div class="max-w-2xl mx-auto space-y-8">
      <!-- Title -->
      <h1 class="text-5xl font-bold text-center">Contact</h1>
      <!-- Intro -->
      <p class="text-lg text-center">
        I’m always open to new opportunities. Feel free to reach out!
      </p>
      <!-- Contact Info -->
      <div class="space-y-4 text-center">
        <p>
          Email:
          <a
            href="mailto:vitor.fabio.castro@gmail.com"
            class="text-lack-cyan hover:underline"
          >
            vitor.fabio.castro@gmail.com
          </a>
        </p>
        <div class="flex justify-center space-x-6">
          <a
            href="https://github.com/svitorz"
            target="_blank"
            rel="noopener"
            class="hover:text-lack-cyan"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/svitorz"
            target="_blank"
            rel="noopener"
            class="hover:text-lack-cyan"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/svitorz"
            target="_blank"
            rel="noopener"
            class="hover:text-lack-cyan"
          >
            instagram
          </a>
          <a
            href="https://dev.to/svitorz"
            target="_blank"
            rel="noopener"
            class="hover:text-lack-cyan"
          >
            devto
          </a>
        </div>
      </div>
      <!-- Back Button -->
      <section class="text-center pt-8">
        <StyledButton to="/"> back to home </StyledButton>
      </section>
    </div>
  </div>
</template>
