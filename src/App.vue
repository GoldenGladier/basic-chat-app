<template>
  <div id="app">
    <!-- <div id="nav" v-if="this.$globalUsername !== ''">
      <router-link to="/"><i class="bi bi-house"></i></router-link> 
      <router-link to="/chat"><i class="bi bi-chat-right-dots"></i></router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8vh;
  padding: 5px 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
}

#nav a {
  font-weight: bold;
  color: #b5b9bb;
  font-size: 25pt;
  margin: 0 20px;
}

#nav a.router-link-exact-active {
  color: #fd883a;
}
</style>
