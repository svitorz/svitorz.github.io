<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <div class="flex items-center justify-center">
    <button
      @click="toggleDark()"
      class="relative w-8 h-8 flex items-center justify-center"
    >
      <Transition mode="out-in">
        <img
          rel="icon"
          src="/moon.svg"
          class="absolute w-5 h-5"
          v-if="!isDark"
        />
        <img rel="icon" src="/sun.svg" class="absolute w-5 h-5 invert" v-else />
      </Transition>
    </button>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
