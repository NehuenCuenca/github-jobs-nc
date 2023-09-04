<template>
  <header>
    <div class="title">
      <span class="first-word">Github</span>
      <span class="second-word">Jobs</span>
      <RouterLink :to="{ name: 'JobAplication', params: { job: 'asd' } }">To /job-aplication/asd</RouterLink>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>created by Nehuen - devChallenges.io</footer>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
  setup() {
    return {};
  },
  components: { RouterLink }
}
</script>

<style scoped>
header {
  grid-area: header;
  display: grid;
  place-items: center start;
}

header .title {
  width: fit-content;
  display: flex;
  color: var(--darkPurple);
}

header .title .first-word {
  font: 700 1.5rem 'Poppins', sans-serif;
}

header .title .second-word {
  font: 300 1.5rem 'Poppins', sans-serif;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
  display: grid;
  place-items: center;
  color: var(--placeholderGrey);
}
</style>