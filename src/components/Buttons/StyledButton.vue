<template>
  <RouterLink :to="to" :class="buttonClasses">
    <slot />
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  /**
   * Route target, can be a string or a route location object
   */
  to: {
    type: [String, Object],
    required: true,
  },
  /**
   * Optional additional classes to merge
   */
  extraClass: {
    type: String,
    default: "",
  },
});

// Default Tailwind classes for the button
const defaultClasses = [
  "px-6",
  "py-3",
  "border",
  "rounded",
  "transition",
  "border-lack-black",
  "dark:border-lack-white",
  "hover:bg-lack-black",
  "hover:text-lack-white",
  "dark:hover:bg-lack-white",
  "dark:hover:text-lack-primary",
];

const buttonClasses = computed(() => {
  return [...defaultClasses, ...props.extraClass.split(" ")].join(" ");
});
</script>
