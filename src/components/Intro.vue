<template>
  <div class="section">
    <p>Hello... I'm</p>
    <h1>GAYASHAN GAMAGE</h1>
    <h3>software engineer</h3>
  </div>
  <div class="section">
    <p>
      I love deal with logical stuff and create usefull tools using code lines.
      self study is best way to improve my knowlage.
    </p>
  </div>
  <div class="section">
    <h3>Tech stack</h3>
    <div class="technology technology-backend">
      <div class="technology-card">
        <i class="devicon-python-plain technology-icon"></i>
        <p class="technology-name">python</p>
      </div>
      <div class="technology-card">
        <i class="devicon-fastapi-plain colored technology-icon"></i>
        <p class="technology-name">Fast API</p>
      </div>
      <div class="technology-card">
        <i class="devicon-django-plain colored technology-icon"></i>
        <p class="technology-name">Django</p>
      </div>
      <div class="technology-card">
        <i class="devicon-mongodb-plain colored technology-icon"></i>
        <p class="technology-name">MongoDB</p>
      </div>
      <div class="technology-card">
        <i class="devicon-postgresql-plain colored technology-icon"></i>
        <p class="technology-name">PostGreSQL</p>
      </div>
      <div class="technology-card">
        <i class="devicon-postman-plain colored technology-icon"></i>
        <p class="technology-name">Post MAN</p>
      </div>
    </div>
    <div class="technology technology-devops">
      <div class="technology-card">
        <i class="devicon-docker-plain colored technology-icon"></i>
        <p class="technology-name">Docker</p>
      </div>
      <div class="technology-card">
        <i
          class="devicon-amazonwebservices-plain-wordmark colored technology-icon"
        ></i>
        <p class="technology-name">AWS</p>
      </div>
      <div class="technology-card">
        <i class="devicon-git-plain colored technology-icon"></i>
        <p class="technology-name">GIT</p>
      </div>
    </div>
    <div class="technology technology-frontend">
      <div class="technology-card">
        <i class="devicon-javascript-plain colored technology-icon"></i>
        <p class="technology-name">JavaScript</p>
      </div>
      <div class="technology-card">
        <i class="devicon-vuejs-plain colored technology-icon"></i>
        <p class="technology-name">VueJS</p>
      </div>
      <div class="technology-card">
        <i class="devicon-html5-plain colored technology-icon"></i>
        <p class="technology-name">HTML</p>
      </div>
      <div class="technology-card">
        <i class="devicon-css3-plain colored technology-icon"></i>
        <p class="technology-name">CSS</p>
      </div>
    </div>
  </div>
  <button class="section">Download CV</button>
</template>

<script setup></script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: auto;
  margin: 50px auto;
  width: 600px;
}
.technology {
  border: 1px solid black;
  height: auto;
  display: flex;
  flex-direction: row;
}
.technology-card {
  width: 100px;
  height: 100px;
  /* background-color: crimson; */
  margin: 2px;
}
.technology-icon {
  font-size: 40px;
  background-color: beige;
  padding: 14px;
  line-height: 75px;
  border-radius: 40px;
  margin: 0 0 0 14px;
}
.technology-name {
  text-align: center;
}
</style>
