<template>
    <div>

      <div v-if="message.sender == senderID">
        <div class="col-12 justify-content-end">
          <div class="message sender" @click="handdleTimestamp">{{ message.message }}</div>
        </div> 
        <transition name="go-down">
          <p v-if="timestampActive" class="message-timestamp timestamp-sender justify-content-end">{{ new Date(message.timestamp) }}</p>           
        </transition>
      </div>
    
      <div v-else>
        <div class="col-12">
          <div class="message" @click="handdleTimestamp">{{ message.message }}</div>
        </div>
        <transition name="go-down">
          <p v-if="timestampActive" class="message-timestamp timestamp-addressee">{{ new Date(message.timestamp) }}</p>
        </transition>
      </div>

    </div> 
</template>

<script>

export default {
  name: 'Message',
  data() {
    return {
      timestampActive : false,
    }
  },
  props: {
    message : Object,
    senderID : String,
  },
  methods : {
    handdleTimestamp : function () {
      this.timestampActive = !this.timestampActive;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* = = = ANIMACIONES = = = */
.go-down-enter-active{
  transition: all .3s ease;
}
.go-down-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.go-down-enter, .go-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-120%);
  opacity: 0;
}
/* = = = = = = = = = = = */

.messages{
  background: #fefefe;
  display: inline-flex;
  padding: 10px;
  width: 100%;
  height: auto;
  min-height: 40px;
  max-height: 77vh;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateY(-15px);
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
  cursor: pointer;
}
.message-timestamp{
  font-family: 'Poppins', sans-serif; 
  font-size: 10pt;
  color: var(--txt-color-gray);
  margin: 0;
}
.timestamp-sender{
  float: right;
}
.timestamp-addressee{
  float: left;
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
