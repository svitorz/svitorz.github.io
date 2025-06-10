<template>
  <div class="min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-4">Projects & Pinned Posts</h1>

    <!-- GitHub Pinned Repositories -->
    <section>
      <h2 class="text-xl mb-3">GitHub Pinned Repositories</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li
          v-for="repo in pinnedRepos"
          :key="repo.name"
          class="p-3 rounded-lg transition max-w-xs mx-auto border border-lack-black dark:border-lack-white"
        >
          <div class="w-full aspect-video mb-3 overflow-hidden rounded">
            <img
              :src="repo.image"
              :alt="`${repo.name} screenshot`"
              class="w-full h-full object-cover"
            />
          </div>
          <a
            :href="repo.url"
            target="_blank"
            class="text-lg font-semibold hover:underline block mb-1"
          >
            {{ repo.name }}
          </a>
          <p class="text-lack-cyan truncate mb-2 text-sm">
            {{ repo.description }}
          </p>
          <div class="flex items-center space-x-3 text-xs text-lack-white">
            <span class="flex items-center space-x-1">
              ★ <span>{{ repo.stars }}</span>
            </span>
            <span class="flex items-center space-x-1">
              ⇄ <span>{{ repo.forks }}</span>
            </span>
            <span class="flex items-center space-x-1">
              <span
                class="w-2 h-2 rounded-full"
                :style="{ backgroundColor: repo.language.color }"
              ></span>
              <span>{{ repo.language.name }}</span>
            </span>
          </div>
        </li>
      </ul>
    </section>

    <!-- LinkedIn Pinned Posts -->
    <section class="mt-8">
      <h2 class="text-xl mb-3">LinkedIn Pinned Posts</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li
          v-for="post in pinnedPosts"
          :key="post.permalink"
          class="p-3 rounded-lg border border-lack-black dark:border-lack-white transition max-w-xs mx-auto"
        >
          <div class="w-full aspect-square mb-3 overflow-hidden rounded">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>
          <a
            :href="post.permalink"
            target="_blank"
            class="text-lack-cyan font-semibold hover:underline text-sm"
          >
            {{ post.title }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// Manual data for GitHub pinned repositories
const pinnedRepos = [
  {
    name: "DevBook",
    description: " Rest API built with Go and Gorilla/Mux ",
    url: "https://github.com/svitorz/DevBook",
    image: "/devbook.jpg",
    stars: 150,
    forks: 20,
    language: { name: "Go", color: "#00ADD8" },
  },
  {
    name: "ecommerce",
    description:
      "eCommerce demo project using Laravel 11x, Vue 3, and Tailwind",
    url: "https://github.com/svitorz/ecommerce",
    image: "/ecommerce.jpg",
    stars: 80,
    forks: 10,
    language: { name: "PHP and JavaScript", color: "#f1e05a" },
  },
  {
    name: "meeting faces",
    description: "Trabalho de Conclusão de Curso - 2024 ",
    url: "https://github.com/dotfiles/meetingfaces",
    image: "/meetingfaces.png",
    stars: 80,
    forks: 10,
    language: { name: "PHP", color: "#f1e05a" },
  },
  {
    name: "dotfiles",
    description: "My personal dotfiles write with Lua",
    url: "https://github.com/svitorz/dotfiles",
    image: "/dotfiles.png",
    stars: 80,
    forks: 10,
    language: { name: "Lua", color: "#f1e05a" },
  },
];

// Manual data for LinkedIn pinned posts
const pinnedPosts = [
  {
    title:
      "Honored to Present “Affective Computing: A Human–Computer Interaction Study” at UniFACEF Researchers’ Meeting",
    permalink:
      "https://www.linkedin.com/posts/svitorz_no-%C3%BAltimo-dia-7-de-novembro-quinta-feira-activity-7268293056460713984-BqjR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzrjRcBgy9xxJXsaxnN46z5ua0fBcBE-vM",
    image: "/computacaoafetiva.jpg",
  },
  {
    title:
      "Honored to Present 'Command-Line Productivity: Empowering Developers with the Terminal' at Coding Ferpa",
    permalink:
      "https://www.linkedin.com/posts/svitorz_linux-terminal-cli-activity-7304814606592442369-LgHy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzrjRcBgy9xxJXsaxnN46z5ua0fBcBE-vM",
    image: "/coding.jpg",
  },
  {
    title:
      "Honored to Lead a Laravel Workshop at COTESI, IFSP Campus Votuporanga",
    permalink:
      "https://www.linkedin.com/posts/svitorz_laravel-cotesi-ifsp-activity-7328433924185985024-Gd4J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzrjRcBgy9xxJXsaxnN46z5ua0fBcBE-vM",
    image: "/cotesi.jpg",
  },
];
</script>
