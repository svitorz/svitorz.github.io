<script setup>
const links = {
  github: {
    name: "github",
    href: "https://github.com/svitorz",
  },
  linkedin: {
    name: "linkedin",
    href: "https://linkedin.com/in/svitorz/",
  },
  instagram: {
    name: "instagram",
    href: "https://instagram.com/svitorz/",
  },
  x: {
    name: "x",
    href: "https://x.com/svitorz",
  },
  spotify: {
    name: "spotify",
    href: "https://open.spotify.com/user/mz3wxk4tgqd2avtvuadovgj9b?si=57284ef78a434d61",
  },
};
</script>
<template>
  <h1 class="text-3xl">about</h1>
  <div class="text-lg">
    <div class="pt-2">
      <h2>about me</h2>
      <p class="text-stone-700 dark:text-stone-300">
        i am a passionate full-stack developer, always looking for new
        challenges and opportunities to grow. i have strong experience with web
        development, working mainly with laravel, vue.js, and docker. as a linux
        enthusiast, i spend most of my time in the terminal, optimizing
        workflows and contributing to open-source projects. i am also a
        researcher in affective computing, exploring how technology can enhance
        human-computer interaction. outside of coding, i am a huge basketball
        fan, supporting the los angeles clippers, and a football enthusiast,
        cheering for the são paulo fc and following patrick mahomes in the nfl.
      </p>
    </div>

    <div class="pt-2">
      <h2>links</h2>
      <a
        :href="link.href"
        target="_blank"
        class="[&:not(:last-child)]:px-2 underline hover:text-stone-100 dark:hover:text-stone-200"
        v-for="link in links"
        >{{ link.name }}</a
      >
    </div>

    <div class="pt-2">
      <h2>projects</h2>
      <p class="text-stone-700 dark:text-stone-300">
        i have worked on several projects that showcase my skills in full-stack
        development, including my research in affective computing, my final
        project for my technical course, and personal side projects.
      </p>

      <a
        href="https://github.com/svitorz/meeting_faces"
        target="_blank"
        class="[&:not(:last-child)]:px-2 underline hover:text-stone-100 dark:hover:text-stone-200"
      >
        meeting faces (final project)
      </a>

      <a
        href="https://github.com/svitorz/meetingfaces"
        target="_blank"
        class="[&:not(:last-child)]:px-2 underline hover:text-stone-100 dark:hover:text-stone-200"
      >
        meeting faces (technical course capstone)
      </a>

      <a
        href="https://github.com/svitorz/oficina_spring"
        target="_blank"
        class="[&:not(:last-child)]:px-2 underline hover:text-stone-100 dark:hover:text-stone-200"
      >
        oficina spring (api with spring boot)
      </a>

      <a
        href="https://github.com/svitorz/ecommerce"
        target="_blank"
        class="underline hover:text-stone-100 dark:hover:text-stone-200"
      >
        full-stack ecommerce (side project)
      </a>
    </div>

    <div class="py-2">
      <h2>studies</h2>
      <p class="text-stone-700 dark:text-stone-300">
        i am currently completing my technical course in computer science at
        ifsp, where i have gained strong foundations in software development,
        networking, and security. in the future, i will pursue a bachelor's
        degree in information systems at the same institution, further deepening
        my expertise in technology and innovation.
      </p>
    </div>
  </div>
</template>
