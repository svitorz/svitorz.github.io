<template>
  <div class="min-h-screen py-16 px-4">
    <div class="max-w-3xl mx-auto space-y-8">
      <!-- Title -->
      <h1 class="text-5xl font-bold text-center">About Me</h1>

      <!-- Introduction -->
      <p class="text-lg leading-relaxed">
        Hello! I’m <span class="font-semibold">Vitor Castro</span>, a full-stack
        developer based in
        <span class="font-semibold">Cosmorama, São Paulo</span>. I currently
        work at
        <a
          href="https://www.lumiun.com"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold hover:text-lack-blue"
        >
          Lumiun</a
        >, crafting scalable solutions and intuitive interfaces.
      </p>

      <!-- Education -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">Education</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>
            Technical High School (integrated) at the Federal Institute of
            Science and Technology
          </li>
          <li>
            Currently pursuing a Bachelor’s in Information Systems at the same
            institution
          </li>
        </ul>
      </section>

      <!-- Skills -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Skills & Expertise</h2>
        <!-- Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-2">Languages</h3>
            <p>
              PHP, Java, JavaScript, Go, Lua, Ruby, Crystal, C++, Shell, Python
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Front-end</h3>
            <p>HTML, CSS, Bootstrap, Tailwind CSS, Vue.js</p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Frameworks & Libraries</h3>
            <p>
              Laravel, Ruby on Rails, Gin-Gonic, Go-ORM, Spring Boot, Java Swing
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Databases</h3>
            <p>MySQL, PostgreSQL, SQLite, ClickHouse, Firebase, CloudDB</p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Tools & Environments</h3>
            <p>
              Git, Docker, Docker Compose; 4 years of CLI proficiency on Arch
              Linux & Ubuntu (Debian)
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Modeling & Design</h3>
            <p>UML diagrams, class diagrams, use-case modeling</p>
          </div>
          <div class="md:col-span-2">
            <h3 class="font-semibold mb-2">Others</h3>
            <p>
              Computer networks, information security, hardware troubleshooting,
              MIT App Inventor
            </p>
          </div>
        </div>
      </section>

      <!-- Footer Link -->
      <section class="text-center pt-8">
        <router-link
          to="/"
          class="inline-block px-6 py-3 border border-lack-white rounded hover:bg-lack-white hover:text-lack-primary transition"
        >
          Back to Home
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup>
// No extra logic required for the About page
</script>
