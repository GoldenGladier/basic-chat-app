<template>
<div class="home-container">
  <svg class="wave-top" id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(253, 136, 58, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,14L24,23.3C48,33,96,51,144,58.3C192,65,240,61,288,65.3C336,70,384,84,432,79.3C480,75,528,51,576,49C624,47,672,65,720,77C768,89,816,93,864,81.7C912,70,960,42,1008,39.7C1056,37,1104,61,1152,77C1200,93,1248,103,1296,102.7C1344,103,1392,93,1440,81.7C1488,70,1536,56,1584,63C1632,70,1680,98,1728,107.3C1776,117,1824,107,1872,105C1920,103,1968,107,2016,93.3C2064,79,2112,47,2160,49C2208,51,2256,89,2304,86.3C2352,84,2400,42,2448,32.7C2496,23,2544,47,2592,53.7C2640,61,2688,51,2736,51.3C2784,51,2832,61,2880,65.3C2928,70,2976,70,3024,79.3C3072,89,3120,107,3168,107.3C3216,107,3264,89,3312,86.3C3360,84,3408,98,3432,105L3456,112L3456,140L3432,140C3408,140,3360,140,3312,140C3264,140,3216,140,3168,140C3120,140,3072,140,3024,140C2976,140,2928,140,2880,140C2832,140,2784,140,2736,140C2688,140,2640,140,2592,140C2544,140,2496,140,2448,140C2400,140,2352,140,2304,140C2256,140,2208,140,2160,140C2112,140,2064,140,2016,140C1968,140,1920,140,1872,140C1824,140,1776,140,1728,140C1680,140,1632,140,1584,140C1536,140,1488,140,1440,140C1392,140,1344,140,1296,140C1248,140,1200,140,1152,140C1104,140,1056,140,1008,140C960,140,912,140,864,140C816,140,768,140,720,140C672,140,624,140,576,140C528,140,480,140,432,140C384,140,336,140,288,140C240,140,192,140,144,140C96,140,48,140,24,140L0,140Z"></path></svg>

  <div class="container home">
    <div class="row">
      <div class="col-sm">
        <div class="block-content">
          <h1>Welcome to the basic chat application!<span>&#160;</span></h1>
          <p>Here you can talk to other people about what you want.</p>

          <!-- <h4>Enter your name here</h4>
          <form action="" v-on:submit.prevent="redirect()">
            <input type="text" autocomplete="off" class="input-name" placeholder="My name..." v-model="username">
            <button class="btn btn-orange" v-if="btn_is_habilited" @click="redirect()">Let's go</button>
            <button type="button" class="btn btn-disabled" v-else>Let's go</button>   
          </form> -->
          <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->

          <h4>Register or log in with</h4>
          <RegisterGoogleButton @login-google-error="showErrors" />
          <div class="error-msg" v-if=" msgError != '' ">
            <p><font-awesome-icon icon="exclamation-circle"/> {{ msgError }}</p>
          </div>

          <!-- <RegisterFacebookButton /> -->

        </div>
      </div>
      <div class="col-sm">
        <img src="../../public/undraw_chat_app.png" alt="chat-app.webp" class="home-img-block">
      </div>
    </div>
  </div>
  
<svg class="footer" id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 180" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(253, 136, 58, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,162L30,147C60,132,120,102,180,102C240,102,300,132,360,138C420,144,480,126,540,111C600,96,660,84,720,90C780,96,840,120,900,120C960,120,1020,96,1080,93C1140,90,1200,108,1260,102C1320,96,1380,66,1440,51C1500,36,1560,36,1620,42C1680,48,1740,60,1800,54C1860,48,1920,24,1980,24C2040,24,2100,48,2160,63C2220,78,2280,84,2340,78C2400,72,2460,54,2520,57C2580,60,2640,84,2700,96C2760,108,2820,108,2880,114C2940,120,3000,132,3060,117C3120,102,3180,60,3240,48C3300,36,3360,54,3420,51C3480,48,3540,24,3600,30C3660,36,3720,72,3780,81C3840,90,3900,72,3960,72C4020,72,4080,90,4140,108C4200,126,4260,144,4290,153L4320,162L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 0.44)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 0.44)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,126L30,105C60,84,120,42,180,27C240,12,300,24,360,39C420,54,480,72,540,75C600,78,660,66,720,69C780,72,840,90,900,93C960,96,1020,84,1080,81C1140,78,1200,84,1260,75C1320,66,1380,42,1440,33C1500,24,1560,30,1620,30C1680,30,1740,24,1800,30C1860,36,1920,54,1980,78C2040,102,2100,132,2160,141C2220,150,2280,138,2340,135C2400,132,2460,138,2520,141C2580,144,2640,144,2700,135C2760,126,2820,108,2880,111C2940,114,3000,138,3060,138C3120,138,3180,114,3240,114C3300,114,3360,138,3420,147C3480,156,3540,150,3600,132C3660,114,3720,84,3780,66C3840,48,3900,42,3960,60C4020,78,4080,120,4140,129C4200,138,4260,114,4290,102L4320,90L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 0.35)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 0.38)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 100px); opacity:0.8" fill="url(#sw-gradient-2)" d="M0,0L30,0C60,0,120,0,180,0C240,0,300,0,360,18C420,36,480,72,540,93C600,114,660,120,720,123C780,126,840,126,900,126C960,126,1020,126,1080,117C1140,108,1200,90,1260,87C1320,84,1380,96,1440,84C1500,72,1560,36,1620,45C1680,54,1740,108,1800,135C1860,162,1920,162,1980,144C2040,126,2100,90,2160,84C2220,78,2280,102,2340,114C2400,126,2460,126,2520,126C2580,126,2640,126,2700,114C2760,102,2820,78,2880,72C2940,66,3000,78,3060,78C3120,78,3180,66,3240,54C3300,42,3360,30,3420,24C3480,18,3540,18,3600,30C3660,42,3720,66,3780,84C3840,102,3900,114,3960,117C4020,120,4080,114,4140,105C4200,96,4260,84,4290,78L4320,72L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"></path></svg>

</div>
</template>

<script>
import RegisterGoogleButton from './Register.vue';
// import RegisterFacebookButton from '../components/RegisterFacebook.vue';

export default {
  name: 'Home',
  components: {
    // GoogleLogin,
    RegisterGoogleButton,
    // RegisterFacebookButton,
  },
  data() {
    return {
      msgError: '',
    }
  },
  computed: {
    btn_is_habilited: function() {
      if(this.username != ''){
        return true;
      }
      else{
        return false;
      }
    }
  },
  methods: {
    showErrors : function(errorCode, errorMessage){
      this.msgError = errorCode + ': ' + errorMessage;
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

.home{
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow-x: hidden; */
  padding: 20px;
}

.home .home-img-block{
  width: 100%;
}
.col-sm{
  display: flex;
  justify-content: center;
  align-items: center; 
}
.btn-orange{
  background: linear-gradient(15deg, #fd883a, #ff6600);
  border-radius: 20px;
  color: #fefefe;
  transition: 1s;
  display: block;
  margin: 10px auto;
  padding: 8px 20px;
  border: none;
  display: inline-block;
  box-sizing: border-box;
}
.btn-orange:hover{
  background: linear-gradient(65deg, #fd883a, #ff6600);
  border-radius: 20px;
  color: #fefefe;
  transition: 1s;
}

.btn-disabled{
  background: linear-gradient(15deg, #9c9b9e, #b5b4bd);
  border-radius: 20px;
  color: #fefefe;
  transition: 1s;
  display: block;
  margin: 10px auto;
  padding: 8px 20px;
  border: none;
}
.btn-disabled:hover{
  background: linear-gradient(15deg,#b5b4bd, #9c9b9e);
  border-radius: 20px;
  color: #fefefe;
  transition: 1s;
}

/* .block-content{
  margin-top: 50px;
} */
h1{
  font-size: 28pt;
  font-family: 'Poppins', sans-serif; 
  font-weight: bold;
  margin-bottom: 10px;
}

p{
  font-size: 17pt;
  font-family: 'Poppins', sans-serif; 
  margin-bottom: 30px;
  letter-spacing: 1px;
}
h4{
  margin-top: 10px;
  font-size: 12pt;
  font-family: 'Poppins', sans-serif;  
}
.input-name{
  border: 0;
  border-bottom: solid 1px #2e3c4f;
  color: #2e3c4f;
  outline: none;
  text-align: center;
  font-size: 12pt;
  font-family: 'Poppins', sans-serif;
  display: block;   
  margin: auto;
}

.error-msg{
  color: tomato;
  display: flex;
  font-size: 12pt;
}
.error-msg > *{
  font-size: 10pt;
  font-family: 'Poppins', sans-serif;
}

.wave-top{
  position: absolute;
  left: 0;
  top: 0;
}
.footer{
  position: absolute;
  left: 0;
  bottom: 0;
}

.home-container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

</style>