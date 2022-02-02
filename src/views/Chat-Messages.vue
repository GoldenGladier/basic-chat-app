<template>
    <div class="chat-messages-page">
      <div class="layout-contacts">
        <div class="info-user">
          <h3 @click="addresseeUID = !addresseeUID">Welcome, {{ username[0] }}.</h3>
        </div>

        <div class="input input-div" @click="focusInputSearchFriends">
          <font-awesome-icon icon="search"/>
          <input ref="inputSearchFriends" type="text" placeholder="Search Friends" class="input-search-friends">
        </div>
        <!-- Lista de usuarios -->
        <ul class="contact-list">
          <li v-for="contact in contactsList" :key="contact[':key']" class="contact">

            <button v-if="contact.uid != userUID" class="user-button" @click="loadConversation(contact.uid)">
              <div class="img-user-container">
                <img class="img-user" :src="contact.picture" alt="img-user.jpg">
                <span v-if="contact.connected" class="connected-circle"></span>
              </div>

              <div class="contact-information">
                {{contact.name}} 
              </div>
            </button>

          </li>
        </ul>

        <!-- / Lista de usuarios -->
      </div>

      <transition name="displacement">
        <MessagesContainer v-if="addresseeUID" :addresseeUID="addresseeUID" :user="user" :conversationID="conversationID"/>
      </transition>

      <transition name="displacement">
        <div v-if="!addresseeUID" class="layout-messages layout-messages-replace">
          <div class="block-content">
            <img class="img-responsive" src="../../public/undraw_contacts.svg" alt="undraw_contacts.png">
            <h3>What is not communicated does not exist!</h3>
            <p>Choose a person to start talking...</p>
          </div>
        </div>
      </transition>


      <!-- <InformationUser :UID="userInfoUID" /> -->
      <!-- <div class="layout-info-contact"></div> -->
    </div>
</template>

<script>

import MessagesContainer from '../components/Messages-container.vue';
// import InformationUser from '../components/InfoUser.vue';
import { db } from '../db.js';

export default {
    name: 'chat-messages',
    components: {
        MessagesContainer,
        // InformationUser,
    },
    data() {
        return {
          user : db.auth().currentUser,
          username : db.auth().currentUser.displayName.split(' '),
          userUID : db.auth().currentUser.uid,

          textInput : "",
          // messagesList : [],
          contactsList :  [],
          chats : [],
          myRef : null,
          // MESSAGES CONTAINER
          addresseeUID : '',
          conversationID : String,
          // INFO USER CONTAINER
          userInfoUID : db.auth().currentUser.uid,
        }
    }, 
    firebase : { // Usuarios
      contactsList :  db.database().ref("users/"),
      chats : db.database().ref("chats/"),
    },
    methods: {
        searchMyUser : function () {
          this.contactsList.forEach(user => { // Buscando entre todos los usuarios  
            if(user.uid == this.userUID){ 
              this.myRef = user;  // Encontre mi usuario
            }
          });
        },

        loadConversation(addresseeUID){
          this.addresseeUID = '';
          this.addresseeUID = addresseeUID;
          this.userInfoUID = addresseeUID;
          // console.log('Lo cambie a: ' + this.addresseeUID);
          if(!this.myRef){
            this.searchMyUser(); // Buscamos el usuario actual
          }

          if(this.myRef.chats){ // Revisamos que ya exista el arreglo de chats
            this.conversationID = this.myRef.chats[addresseeUID].idConversation;
            // console.log('MASTER: ' + this.conversationID);
          }
          else{ // En caso de que no lo creamos
            var conversationRef = new Object();
            conversationRef.idConversation = this.userUID + '--' + addresseeUID;
            conversationRef.conversation = [];

            db.database().ref('chats/' + conversationRef.idConversation) // Construye la ruta de la conversacion y la registra
              .set(conversationRef)
              .then(() => {
                // console.log('Conversation created!')
            });            

            db.database().ref('users/' + this.userUID + '/chats/' + addresseeUID) // Construye la ruta de la referencia a la conversacion para el remitente
              .set(conversationRef)
              .then(() => {
                // console.log('Conversation ref add in sender!')
            });
            db.database().ref('users/' + addresseeUID + '/chats/' + this.userUID) // Construye la ruta de la referencia a la conversacion para el destinatario
              .set(conversationRef)
              .then(() => {
                // console.log('Conversation ref add in addressee!')
            });

            this.conversationID = conversationRef.idConversation;           
          } // END IF
        }, // END LOAD CONVERSATION

        focusInputSearchFriends(){
          this.$refs.inputSearchFriends.focus();
        }

    },
    mounted(){
      db.database().ref('.info/connected').on('value', function(data){ // Cuando se inicia o cierra sesion
        if(data.val()){
          // console.log('Usuario: ' + db.auth().currentUser.uid);
          db.database().ref('users/' + db.auth().currentUser.uid).onDisconnect().update({ connected : false }); // En desconexión ponemos en 'false'
          db.database().ref('users/' + db.auth().currentUser.uid).update({ connected : true }); // En conexión ponemos en 'true'
        }
      });
    }


}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

/* Transiciones */

.displacement-enter-active {
  animation: displacement-in .5s;
}

@keyframes displacement-in {
  0% {
    transform: scale(0) translateY(-100%);
    /* transform: translateX(-100%); */
  }
  50% {
    transform: scale(1.5) translateY(-40%);
    /* transform: translateX(-40%); */
  }
  100% {
    transform: scale(1) translateY(0);
    /* transform: translateX(0); */
  }
}

@keyframes displacement-out {
  0% {
    position: absolute;
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0);
  }
}
/* * * * * * * * */

*{
    font-family: 'Poppins', sans-serif; 
}

.chat-messages-page{
  display: grid;
  /* grid-template-columns: 1fr 3fr 1fr; */
  grid-template-columns: 1fr 3fr;
  /* grid-template-columns: minmax(min(100%, 1fr), 1fr) minmax(min(100%, 3fr), 3fr) minmax(min(100%, 1fr), 1fr); */
  height: 100vh;
  overflow: hidden;
}

.layout-contacts{
  background: var(--bg-color-gray-low);
}
.layout-contacts .info-user{
  /* background: tomato; */
  padding: 10px;
}

.input, .button{
  padding: 5px;
  outline: none;
  border: 0;
  color: #2e3c4f;
  text-align: center;
  font-size: 12pt;
  font-family: 'Poppins', sans-serif;
  display: inline;

  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background: transparent;
}

.input::placeholder { 
  color: #dbd8e3; 
}

.input-div{
  display: flex;
  justify-content: left;
  align-items: center;

  border: solid 1px #dbd8e3; 
  background: #ffffff;
  border-radius: 20px;
  width: 90%;
  cursor: text;

  margin: auto;
  padding: 6px 20px;

  transition: 0.5s;
  color: #dbd8e3;
}
/* .input-div i{
  transition: 0.5s;
  color: #dbd8e3;
} */
.input-div:focus-within{
  border: solid 1px var(--txt-color-gray);
  color: var(--bg-color-dark);
  transition: 0.5s;
}
.input-search-friends{
  text-align: left;
  border: 0;
  outline: none;
  box-sizing: border-box;
  width: 90%;
  padding-left: 5px;
}
.input-search-friends::-webkit-input-placeholder { 
  color: #dbd8e3; 
  transition: 0.5s;
}
/* .input-search-friends:focus::-webkit-input-placeholder { 
  color: var(--bg-color-dark);
  transition: 0.5s;
} */

/* CONTACTS */
ul.contact-list{
  padding: 0;
}
.contact-list .contact{
  display: block;
  position: relative;
  list-style: none;
  margin: 5px 0;
}

.user-button{
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: solid 1px #fd883a; */
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
}

.user-button .img-user-container{
  width: 20%;
  border-radius: 50%;
  /* padding: 1px; */
  border: solid 1px var(--txt-color-gray);
  max-width: 50px;
  margin: 5px;
  position: inherit;
  left: 0;

  display: inline-block;
  position: relative;
}
.user-button .img-user-container .img-user{
  width: 100%;
  border-radius: 50%;
}

.img-user-container .connected-circle{
  width: 15px;
  height: 15px;
  background: #66DE93;
  border-radius: 50%;
  border: solid 1px var(--txt-color-gray);

  position: absolute;
  right: 0;
  bottom: 0;
}

.user-button .contact-information{
  width: 80%;
  padding: 5px;
  display: inline-block;
  /* background: thistle; */
  text-align: left;
  font-family: 'Poppins', sans-serif; 
  font-weight: normal;
  color: var(--bg-color-orange);
}

.layout-messages {
  grid-column-start: 2;
}
.layout-messages-replace{
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-responsive{
  width: 50%;
  margin: 10px;
}
.block-content h3{
  font-size: 28pt;
  font-family: 'Poppins', sans-serif; 
  font-weight: bold;
  margin-bottom: 10px;
}
.block-content p{
  font-size: 17pt;
  font-family: 'Poppins', sans-serif; 
  margin-bottom: 30px;
  letter-spacing: 1px;
}

/* Responsive querys */
@media only screen and (max-width: 1023px) {
  .layout-info-contact{
    display: none;
  }
  .chat-messages-page{
      grid-template-columns: 1fr 3fr;
  }
}

@media only screen and (max-width: 767px) {
  .layout-messages, .layout-info-contact{
    display: none;
  }
  .chat-messages-page{
    display: block;
    min-height: 100vh;
  }
  .layout-contacts{
    width: 100%;
    height: 100%;
  }
}

/* * * * * * * * * * */
</style>
