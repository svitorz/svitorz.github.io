<script setup>
const linkClasses =
  "hover:bg-stone-300  dark:hover:text-stone-200 dark:hover:bg-stone-700 rounded-2xl p-2 text-lg px-3";
</script>
<template>
  <nav>
    <div class="flex justify-center items-center py-5">
      <ul class="bg-stone-100 dark:bg-stone-900 p-3 rounded-2xl">
        <li>
          <router-link
            to="/"
            :class="linkClasses"
            activeClass="text-sky-500 dark:text-sky-700"
            >home</router-link
          >
          |
          <router-link
            to="/about"
            :class="linkClasses"
            activeClass="text-sky-500 dark:text-sky-700"
            >about</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
