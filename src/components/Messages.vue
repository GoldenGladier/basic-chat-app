<template>
  <div class="row messages" id="messages">
    <div v-for="(message, id) in messages" :key="id">
        <!-- <div v-if="(message.type !== 'notify')">
          <div v-if="senders(message.sender) && (message.sender !== username)" class="col-12">
            <div class="message user-sender">{{ message.sender }}</div>
          </div>
        </div> -->

        <!-- <div v-if="message.type == 'notify'" class="col-12 justify-content-center">
          <div class="message notify">{{ message.msg }}</div>
        </div>       -->
        <!-- <div v-if="message.sender == senderID" class="col-12 justify-content-end">
          <div class="message sender">{{ message.message }}</div>
          <p>{{ new Date(message.timestamp) }}</p>
        </div>             
        <div v-else class="col-12">
          <div class="message">{{ message.message }}</div>
        </div>             -->
        <Message :message="message" :senderID="senderID" />
    </div> 
  </div>
</template>

<script>
import { db } from '../db';
const conversations = db.database().ref('chats');
import Message from './Message.vue';

export default {
  name: 'Messages',
  components : {
    Message,
  },
  props: {
    conversationID : String,
    senderID : String,
  },
  data() {
    return {
      // last_sender: '',
      messages : [],
      // msgs : [],
    }
  },
  watch : {
    conversationID : function(){
      console.log('\nCAMBIO DE CHAT: ' + this.conversationID + '\n');
      // alert('CAMBIO DE CHAT');
      this.$rtdbBind('messages', conversations.child(this.conversationID).child('conversation'));
    },
    messages : function () {
      this.scrollToEnd();
    }

  },
  mounted(){
    this.$rtdbBind('messages', conversations.child(this.conversationID).child('conversation'));
  },
  methods : {
    scrollToEnd : function() {
      this.$nextTick(function () {
        var element = document.getElementById('messages');
        element.scrollTop = element.scrollHeight;
      })
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages{
  background: #fefefe;
  /* background: tomato; */
  display: inline-flex;
  padding: 30px;
  width: 100%;
  height: auto;
  min-height: 40px;
  max-height: 85%;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 20px;
}
.messages::-webkit-scrollbar {
    width: 1px;     /* Tamaño del scroll en vertical */
    height: 10px;    /* Tamaño del scroll en horizontal */
    display: none;  
}
.messages::-webkit-scrollbar-thumb {
    background: var(--bg-color-orange);
    border-radius: 20px;
}

.messages .col-12{
    display: flex;
    font-family: 'Poppins', sans-serif; 
    font-size: 11pt;    
}
.messages .col-12 .message{
  background: #dbd8e3;
  color: rgb(30, 38, 48);
  /* background: #fd883a;
  color: #fefefe;   */
  padding: 5px 10px;
  border-radius: 0 25px 25px 20px;
  margin-top: 5px;
  width: auto !important;
  display: block;
}
.messages .col-12 .sender{
  border-radius: 25px 0px 25px 25px;
  background: #fd883a;
  /* background: #f8741c; */
  color: #fefefe;  
  right: 0;
}
.messages .col-12 .notify{
  background: transparent;
  font-family: 'Poppins', sans-serif; 
  color: #cac8c5;
  font-size: 11pt;
}
.messages .col-12 .user-sender{
  background: transparent;
  font-family: 'Poppins', sans-serif; 
  color: #cac8c5;
  font-size: 9pt; 
  padding: 0;
  margin-top: 5px;
}

h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
