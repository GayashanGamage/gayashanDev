<template>
  <div class="c-levelOne-component">
    <div class="c-levelTwo-component">
      <button @click="back">Back to project</button>
      <a :href="projects[project]['domain']" target="_blank">
        <button>Live</button>
      </a>
    </div>
    <div class="c-levelTwo-component">
      <h2>{{ projects[project]["name"] }}</h2>
      <h4>owner is {{ projects[project]["owner"] }}</h4>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import projects from "@/assets/projects.json";

const back = () => {
  router.replace("/project");
};

const project = router.currentRoute.value.params["projectName"];
</script>

<style scoped></style>
