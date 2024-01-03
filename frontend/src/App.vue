<template>
  <div class="page-container">
    <header>
      <div class="navbar">
        <img src="./assets/logo-true.png" alt="Stonks Guy" class="logo"/>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
      <div class="hero-image">
        <div class="hero-elements">
          <h1>Michael's Stock Management App</h1>
        </div>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>Author: Michael Jedziniak<br>
      <a href="#">mjedzi3@uic.edu</a></p>
    </footer>
  </div>
</template>

<style lang="scss">
//@import "~bulma/css/bulma.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  margin: 0;
  height: 100%;
}

.page-container {
  position: relative;
  min-height: 100vh;
}

main {
  padding-bottom: 15rem;
}

footer {
  position: absolute;
  background-color: #dadadab2;
  bottom: 0;
  width: 100%;
  text-align: left;
  padding-left: 20px;
}

.hero-image {
  background-image: url('./assets/hero-img-market.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 3.5em;
  height: 15em;
  .hero-elements {
    padding: 5em;
    text-align: center;
    color: white;
  }
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  place-content:space-between;
  grid-template-columns: 50px auto;
  padding: 1em;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #452fd8;
  .logo {
    height: 60px;
    aspect-ratio: auto;
    padding-top: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    background: none;
    position: unset;
    height: auto;
    width: 100%;
    padding: 0;
    a {
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      margin: 0;
      color: #ffffff;
      text-decoration: none;
      padding-left: 3pc;
      padding-right: 3pc;
      padding-top: 4%;
      &.router-link-exact-active, &:hover {
        color: #2c3e50;
        background-color:#b4aaf9;
      }
    }
  }
}

// MOBILE VIEW
@media only screen and (max-width: 550px) {
  .content {
    margin-right: 5px;
    margin-left: 5px;
  }

  .navbar {
    padding: 0;
    nav {
      a {
      font-size: 15px;
      padding-left: 1pc;
      padding-right: 1pc;
      padding-top: 8%;
    }
    }
  }
}
</style>
