<template>
  <div class="c-levelOne-container">
    <div class="c-levelTwo-container">
      <h3>Backend Technologies</h3>
      <div class="c-levelThree-container">
        <div class="tech-item">
          <i class="devicon-python-plain"></i>
          <p>Python</p>
        </div>
        <div class="tech-item">
          <i class="devicon-django-plain"></i>
          <p>Django</p>
        </div>
        <div class="tech-item">
          <i class="devicon-fastapi-plain"></i>
          <p>FastAPI</p>
        </div>
        <div class="tech-item">
          <i class="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>
        <div class="tech-item">
          <i class="devicon-postgresql-plain"></i>
          <p>PostGreSQL</p>
        </div>
      </div>
    </div>
    <div class="c-levelTwo-container">
      <h3>Frontend Technologies</h3>
      <div class="c-levelThree-container">
        <div class="tech-item">
          <i class="devicon-javascript-plain"></i>
          <p>Java Script</p>
        </div>
        <div class="tech-item">
          <i class="devicon-vuejs-plain"></i>
          <p>Vue JS</p>
        </div>
        <div class="tech-item">
          <i class="devicon-css3-plain"></i>
          <p>CSS</p>
        </div>
        <div class="tech-item">
          <i class="devicon-html5-plain"></i>
          <p>HTML</p>
        </div>
      </div>
    </div>
    <div class="c-levelTwo-container">
      <h3>Other tools</h3>
      <div class="c-levelThree-container">
        <div class="tech-item">
          <i class="devicon-amazonwebservices-plain-wordmark"></i>
          <p>AWS</p>
        </div>
        <div class="tech-item">
          <i class="devicon-docker-plain"></i>
          <p>Docker</p>
        </div>
        <div class="tech-item">
          <i class="devicon-git-plain"></i>
          <p>GIT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-levelThree-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.tech-item {
  display: flex;
  font-size: 1.2rem;
  padding: 0.8em;
  border: 1px solid black;
  width: 120px;
  border-radius: 6px;
}
</style>
