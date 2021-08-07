<template>
    <div class="contacts">
        <h2>Welcome, {{ this.$globalUsername }}.</h2>
        <div v-for="user in users" :key="user">
          <router-link :to="'/chat/' + user.username + '/' + user.id">{{ user.username }}</router-link>          
        </div>        
    </div>
</template>

<script>
// import Messages from '@/components/Messages.vue'

const io = require('socket.io-client');

const socket = io('http://localhost:3000', {
  withCredentials: true,
  // extraHeaders: {
  //   'my-custom-header': 'abcd',
  // },
});
export default {
    name: 'contacts',
    components: {
        // Messages,
    },
    data() {
        return {
          users: {},
      }
    }, 
    props: {
      username: String,
    },
    methods: {
       
    },
    mounted() {
      var self = this;
      this.$globalUsername = self.username;

        socket.on('connect', () => {
          console.log('Connected: ' + socket.connected); // true
          if((socket.connected) && (this.username != undefined)){
            socket.emit('connected user', self.username);           
            // socket.emit('requested users');
          }          
        });
        socket.on ('chat message', function(msg) {
          self.messagesList.push(msg);
          console.log('received: ' + msg);
        }); 
        socket.on ('requested users', function(list) {
          self.users = list;
        });           
    },   
}
</script>


<style scoped>
.chat-messages{
  /* background: #c5c5c5; */
  display: block;
  height: 90vh;
}
.form-new-message{
  /* background: #f6eaea; */
  border-top: solid 1px #dbd8e3;
  background: #fefefe;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.form-new-message .input-new-message{
  /* background: #f6eaea; */
  color: rgb(30, 38, 48);
  border: 0px;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 0 5px;
  border: none;
  outline: none; 
}
.form-new-message .input-new-message:focus{
  width: 80%;
}
.form-new-message div .btn-send-message{
  border: none;
  background: #fd883a;
  color: #fefefe;
  padding: 10px 14px;
  border-radius: 50%;
}
.form-new-message div .btn-send-message:focus{
  border: none;  
  outline: none;
}
.chat-messages .buttons-container-top{
  display: flex;
  padding: 10px 25px;
  padding-top: 20px;
}
.chat-messages .row div .btn-back{
  /* background: tomato; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color:  rgb(30, 38, 48);
  font-weight: bold;
  font-size: 25pt;
  border: solid 1px  rgb(30, 38, 48);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
