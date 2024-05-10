<template>
  <div class="c-levelOne-container">
    <div class="c-levelTwo-container">
      <h3 class="catagory-title">Backend Technologies</h3>
      <div class="c-levelThree-container">
        <div class="tech-item">
          <i class="devicon-python-plain dev-name"></i>
          <p class="tech-name">Python</p>
        </div>
        <div class="tech-item">
          <i class="devicon-django-plain dev-name"></i>
          <p class="tech-name">Django</p>
        </div>
        <div class="tech-item">
          <i class="devicon-fastapi-plain dev-name"></i>
          <p class="tech-name">FastAPI</p>
        </div>
        <div class="tech-item">
          <i class="devicon-mongodb-plain dev-name"></i>
          <p class="tech-name">MongoDB</p>
        </div>
        <div class="tech-item">
          <i class="devicon-postgresql-plain dev-name"></i>
          <p class="tech-name">PostGreSQL</p>
        </div>
      </div>
    </div>
    <div class="c-levelTwo-container">
      <h3 class="catagory-title">Frontend Technologies</h3>
      <div class="c-levelThree-container">
        <div class="tech-item">
          <i class="devicon-javascript-plain dev-name"></i>
          <p class="tech-name">Java Script</p>
        </div>
        <div class="tech-item">
          <i class="devicon-vuejs-plain dev-name"></i>
          <p class="tech-name">Vue JS</p>
        </div>
        <div class="tech-item">
          <i class="devicon-css3-plain dev-name"></i>
          <p class="tech-name">CSS</p>
        </div>
        <div class="tech-item">
          <i class="devicon-html5-plain dev-name"></i>
          <p class="tech-name">HTML</p>
        </div>
      </div>
    </div>
    <div class="c-levelTwo-container">
      <h3 class="catagory-title">Other tools</h3>
      <div class="c-levelThree-container">
        <div class="tech-item">
          <i class="devicon-amazonwebservices-plain-wordmark dev-name"></i>
          <p class="tech-name">AWS</p>
        </div>
        <div class="tech-item">
          <i class="devicon-docker-plain dev-name"></i>
          <p class="tech-name">Docker</p>
        </div>
        <div class="tech-item">
          <i class="devicon-git-plain dev-name"></i>
          <p class="tech-name">GIT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-levelOne-container {
  width: 80%;
  height: auto;
  /* border: 1px solid black; */
  margin: 40px auto;
}
.c-levelTwo-container {
  width: 90%;
  height: auto;
  /* border: 1px solid white; */
  margin: 40px;
}
.catagory-title {
  font-size: 1.6rem;
  color: aliceblue;
  margin-bottom: 15px;
}
.c-levelThree-container {
  /* border: 1px solid black; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}
.tech-item {
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  box-shadow: 1px 2px 4px;
  border-radius: 4px;
}
.dev-name {
  padding: 13px;
  background-color: white;
  color: #2c2b7f;
  font-size: 1.8rem;
  border-radius: 4px 0 0 4px;
}
.tech-name {
  width: 100%;
  padding: 14px 30px;
  background-color: #2c2b7f;
  border-radius: 0 4px 4px 0;
  font-size: 1.1rem;
  color: bisque;
}
</style>
