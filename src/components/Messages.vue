<template>
  <div class="row messages" id="messages">
    <div v-for="(message, id) in messages" :key="id">
        <div v-if="(message.type !== 'notify')">
          <div v-if="senders(message.sender) && (message.sender !== username)" class="col-12">
            <div class="message user-sender">{{ message.sender }}</div>
          </div>
        </div>

        <div v-if="message.type == 'notify'" class="col-12 justify-content-center">
          <div class="message notify">{{ message.msg }}</div>
        </div>      
        <div v-else-if="message.sender == username" class="col-12 justify-content-end">
          <div class="message sender">{{ message.msg }}</div>
        </div>             
        <div v-else class="col-12">
          <div class="message">{{ message.msg }}</div>
        </div>            
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Messages',
  data() {
    return {
      last_sender: '',
    }
  },
  methods: {
    senders: function(sender){
      if(sender != this.last_sender){
        this.last_sender = sender;
        return true;
      }
      else{
        // this.last_sender = sender;
        return false;
      }
    }    
  },
  props: {
    messages: [],
    username: String,
  },
  watch: {
    messages: function () {
      this.$nextTick(function () {
        var element = document.getElementById('messages');
        element.scrollTo(0, element.scrollHeight);
      })
    },    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages{
  background: #fefefe;
  /* background: tomato; */
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
