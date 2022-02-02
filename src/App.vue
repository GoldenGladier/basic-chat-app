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

:root {
  --bg-color-orange: #fd883a;
  --bg-color-dark: #2c3e50;
  --bg-color-gray: #f7f2f2;
  --bg-color-gray-low: #fcfcfc;
  --txt-color-gray: #B2B1B9;
}

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

.input{
  border: none;
  color: #2e3c4f;
  outline: none;
  font-size: 12pt;
  font-family: 'Poppins', sans-serif;
  display: block;   
  margin: auto;
  border-radius: 20px;
  margin: 10px auto;
  padding: 8px 20px;
  display: inline-block;
  box-sizing: border-box; 
}
</style>
