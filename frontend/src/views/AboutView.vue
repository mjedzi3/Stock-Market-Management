<template>
  <div class="about">
    <h1>What is MEVN STACK</h1>
    <p class="info-text">
      MEVN stack is the open-source JavaScript software stack that has emerged as a new and
      evolving way to build powerful and dynamic web applications. Its software components
      can be used to effectively design frontend and backend development and improve the
      functionality of your website or app.
    </p>
    <ul class="info-text">
      <li>
        <span>MySQL</span>: An Open Source SQL database management system that is developed,
        distributed and supported by Oracle Corporation. MySQL is the most popular language
        for adding, accessing and managing content in a database.
      </li>
      <li>
        <span>ExpressJS</span>: A framework layered on top of NodeJS, used to build the backend
          of a site using NodeJS functions and structures. Since NodeJS was primarily developed
          to run JavaScript on a machine instead of making websites, ExpressJS was created for the
          latter purpose.
      </li>
      <li>
        <span>Vue JS</span>: VueJS is referred to as a client-side framework and is especially
        used in front-end web development. It has two-way data binding that allows seamless
        frontend development along with MVC capability and interactive server-side applications.
      </li>
      <li>
        <span>NodeJS</span>: The JavaScript runtime environment. It is used to run JavaScript on a
        machine rather than in a browser.
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .info-text {
    margin: 50px;
    margin-top: 0px;
    padding: 100px;
    padding-top: 20px;
    padding-bottom: 0px;
    text-align: left;
    line-height: 150%;
  }
  span {
    font-weight: bold;
  }

  // MOBILE VIEW
  @media only screen and (max-width: 550px) {
    .info-text {
      width: 100%;
      margin-right: 5px;
      margin-left: 5px;
      padding: 0px;
    }
  }
</style>
