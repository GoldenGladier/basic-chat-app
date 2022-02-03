<template>

  <div class="layout-messages">

    <div class="layaut-translucent" v-click-outside="clickoutside_closeConversation">
        <div class="addressee-information">
            <div class="img-user-container">
              <img :src="addressee.picture" :alt="addressee.name" class="addressee-img">
              <span v-if="addressee.connected" class="connected-circle"></span>
              <!-- <span class="connected-circle"></span> -->
            </div>
            <!-- <img :src="addressee.picture" :alt="addressee.name" class="addressee-img"> -->
            <h4>{{ addressee.name }}</h4>

            <button class="btn-close" title="Close conversation" @click="closeConversation"><i class="bi bi-x"></i></button>
        </div>
        <Messages v-if="conversationID" :conversationID="conversationID" :senderID="user.uid"/>
        <Postman :addresseeUID="addresseeUID" :conversationID="conversationID" :senderID="user.uid"/> 
    </div>

  </div>
</template>

<script>
import Postman from './Postman.vue';
import Messages from './Messages.vue';
import { db } from '../db';

export default {
  name: 'Messages-container',
  components : {
    Postman,
    Messages,
  },
  props: {
    addresseeUID : String,
    user : Object,
    conversationID : String,
  },
  data() {
    return {
      // last_sender: '',
      // conversationID : '',
      addressee : Array,
    }
  },
  mounted(){
    this.searchAddressee();
  },
  watch: {
    addresseeUID: function () {
      this.searchAddressee();
    }
  },
  methods : {
    // This function get all information about the addressee
    searchAddressee : function(){
      // console.log('BUSCANDO AL DESTINATARIO');
      this.addressee = [];
      db.database().ref().child("users").child(this.addresseeUID).get().then((snapshot) => { // Traemos al destinatario
      if (snapshot.exists()) { 
          this.addressee = snapshot.val();
      } else { // Si no existe
          console.log('ERROR: Data addressee is not avalaible in database');
      }
      }).catch((error) => {
        console.error(error); // Mostramos errores
      });
    },
    // This function close the conversaction active currently 
    closeConversation : function(){
      this.$emit('close-conversation');
    },
    clickoutside_closeConversation : function(){
      if(screen.width < 767){
        this.$emit('close-conversation');
      }
    }    

  },
  directives : {
    click_outside : {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-messages{
  position: relative;
  height: 100vh;
  /* overflow: hidden; */
}

.addressee-information{
    display: flex;
    justify-content: left;
    align-items: center;

    padding: 5px;
    padding-bottom: 0;
    z-index: 10;
    border-bottom: solid 2px var(--bg-color-gray);
    width: 95%;
    margin: auto;

    background: #fefefe;
    position: relative;
}
.addressee-information > *{
    margin: 0;
}

.btn-close{
  padding: 15px;
  position: absolute;
  right: 0;
}
.btn-close > *{
  color: #fd883a !important;
}
.btn-close:active, .btn-close:focus{
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.btn-close:active > i, .btn-close:focus > i{
  color: var(--bg-color-orange) !important;
}
.btn-close i::before{
  content: none !important;
}

.img-user-container{
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
    margin-right: 10px;
    position: relative;
}

.addressee-img{
    object-fit: cover;
    width: 100%;
    height: 100%;
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

@media only screen and (max-width: 767px) {
  .layout-messages{
    display: block;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: tomato;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
  }
  .layaut-translucent{
    height: 90vh;
    background: #fefefe;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 25px 25px 0 0;
    overflow: hidden;
  }
}

</style>
