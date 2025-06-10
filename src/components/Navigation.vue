<script setup>
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

// Cria uma variável reativa para controlar a visibilidade do menu mobile
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 shadow-md relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link
            to="/"
            class="text-xl font-bold flex items-center justify-center"
          >
            <img
              src="/icon.svg"
              class="w-6 h-6 mr-2 dark:invert"
              alt="Elephant Icon"
            />
            svitorz
          </router-link>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              >Home</router-link
            >
            <router-link
              to="/about"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              >About</router-link
            >
            <router-link
              to="/projects"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              >Projects</router-link
            >
            <router-link
              to="/contact"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              >Contact</router-link
            >
          </div>
        </div>

        <div class="hidden md:block">
          <ThemeToggle />
        </div>

        <div class="-mr-2 flex md:hidden">
          <ThemeToggle class="mr-4" />
          <button
            @click="isMenuOpen = !isMenuOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="isMenuOpen"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          @click="isMenuOpen = false"
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >Home</router-link
        >
        <router-link
          @click="isMenuOpen = false"
          to="/about"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >About</router-link
        >
        <router-link
          @click="isMenuOpen = false"
          to="/projects"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >Projects</router-link
        >
        <router-link
          @click="isMenuOpen = false"
          to="/contact"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>
