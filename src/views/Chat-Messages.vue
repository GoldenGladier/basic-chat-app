<template>
    <div>
        <div class="container chat-messages">
            <div class="row buttons-container-top">
                <div class="col-3"> <router-link to="/" class="btn-back">
                  <i class="bi bi-arrow-left-short"></i> 
                </router-link> </div>
                <dov class="col-8 d-flex align-items-center">
                  <h3>Welcome, {{ username }}.</h3>
                </dov>
            </div>
            <Messages :messages="messagesList" :username="username" v-if="messagesList"></Messages>
        </div>   
        <form action="" id="form-new-message" class="form-new-message" v-on:submit.prevent="sendMessage()">
            <div>
                <input type="text" id="input-new-message" class="input-new-message" placeholder="Type something..." autocomplete="off" v-model="textInput">
                <button class="btn-send-message" @focus="sendMessage()"><i class="bi bi-cursor-fill"></i></button>
            </div>
        </form>              
    </div>
</template>

<script>
import Messages from '@/components/Messages.vue'

const io = require('socket.io-client');

const socket = io('192.168.1.71:3000', {
  withCredentials: true,
});

export default {
    name: 'chat-messages',
    components: {
        Messages,
    },
    data() {
        return {
        textInput : "",
        messagesList : [],
        }
    }, 
    props: {
      username: String,
      // addressee: String,
      // id: String,
      // socket: require('socket.io-client'),
    },
    methods: {
        sendMessage() {
            if (this.textInput !== '') {
                // console.log(this.textInput);
                socket.emit('chat message', this.textInput, this.$globalUsername);
                this.textInput = '';
            }
        },        
    },
    computed: {
      // messagesList: function(){
      //   var messagesFiltered = [];
      //   this.messagesList.forEach(message => {
      //     var msg = new Object();
      //     if(message.sender == this.$globalUsername){
      //       msg.msg = message.msg;
      //       msg.sender = message.sender;
      //       msg.type = 'myMessage';
      //     }
      //     else{
      //       msg.msg = message.msg;
      //       msg.sender = message.sender;
      //       msg.type = 'other';            
      //     }
      //     this.messagesFiltered.push(msg);
      //   });
      //   return messagesFiltered;
      // }
    },
    mounted() {
        var self = this;
        this.$globalUsername = self.username;
        socket.on('connect', () => {
          console.log('Connected: ' + socket.connected); // true
          if((socket.connected) && (this.$globalUsername != '')){
            socket.emit('connected user', this.$globalUsername)
          }
        });
        socket.on ('chat message', function(msg, sender) {
          var message = new Object();
          message.msg = msg;
          message.sender = sender;
          self.messagesList.push(message);
          console.log('received: ' + msg);
        });  
        // conexion y desconexion
        socket.on ('connected user', function(new_username) {
          var message = new Object();
          message.msg = new_username + ' se unio a la sala.';
          message.sender = new_username;
          message.type = 'notify';
          self.messagesList.push(message);
        }); 
        socket.on ('disconnect user', function(new_username) {
          var message = new Object();
          message.msg = new_username + ' abandono la sala.';
          message.sender = new_username;
          message.type = 'notify';
          self.messagesList.push(message);
        });                   
    },    

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

.chat-messages{
  /* background: #c5c5c5; */
  display: block;
  height: 90vh;
  padding: 0;
  overflow: hidden;
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
  font-size: 12pt;
  font-family: 'Poppins', sans-serif; 
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
  padding-bottom: 25px;
  background: #fd883a;
}
.chat-messages .row div .btn-back{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* color:  rgb(30, 38, 48); */
  color: #fefefe;
  font-weight: bold;
  font-size: 25pt;
  /* border: solid 1px  rgb(30, 38, 48); */
  border: solid 2px #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-8 h3{
  color: #fefefe;
  font-family: 'Poppins', sans-serif; 
  /* font-weight: bold; */
  font-size: 20pt;
  margin: 0;
}
</style>
