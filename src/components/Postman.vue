<template>
    <div class="postman-container">
        <div class="postman">
            <input class="input input-message" v-model="message" v-on:keyup.enter="sendMessage" type="text" autocomplete="false" placeholder="Write Something...">
            <button class="input btn-send" @click="sendMessage"><font-awesome-icon icon="paper-plane"/></button>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from '../db';

export default {
  name: 'Messages-container',
  data() {
    return {
      last_sender: '',
      message : '',
    }
  },
  methods: {
    sendMessage(){
        if(this.message != ''){
            console.log('= = = POSTMAN = = =');
            console.log('Message: ' + this.message);
            console.log('FROM: ' + this.senderID);
            console.log('To: ' + this.addresseeUID);
            console.log('Conversation ID: ' + this.conversationID);
            console.log('= = = = = = = = = =');

            db.database().ref('chats/' + this.conversationID + '/conversation/').push({ // Insertamos el nuevo mensaje
                message : this.message,
                sender : this.senderID,
                timestamp : firebase.database.ServerValue.TIMESTAMP,
            });
            
            this.message = '';
        }
    },
  },
  props: {
    // messages: [],
    addresseeUID: String,
    conversationID : String,
    senderID : String,
  },
  watch : {
    addresseeUID(value){
        if(value){
            console.log('POSTMAN: ' + value);
        }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.postman-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: 0;
  z-index: 3;
  /* background: chartreuse; */
  background: #ffffff;
}

.postman{
  /* background: tomato; */
  border-top: solid 2px var(--bg-color-gray);
  width: 95%;
  margin: auto;
  padding: 0;
  display: block;
}

.input-message{
    transition: 0.5s;
    border: solid 1px #dbd8e3; 
    background: var(--bg-color-gray);
    margin: 0;
    width: 80%;
    max-width: 100%;
}
.input-message:focus{
    transition: 0.5s;
    border: solid 1px var(--txt-color-gray);
}

.btn-send{
    background: var(--bg-color-orange);
    margin: 5px;
    padding: 8px 12px;
    outline: none;
    border-radius: 50%;
    border: 0;
}
.btn-send > * {
    color: #ffff;
}


</style>
