<template>
  <div class="layout-info-contact"> 
      <div class="info">
        <img class="img-user" :src="user.picture" :alt="user.name">
        <h4>{{ user.name }}</h4>
        
        <h6>Attachments</h6>
        <div class="attachments">
            <!-- <div class="attachment">PDF</div>
            <div class="attachment">Video</div>
            <div class="attachment">MP4</div>
            <div class="attachment">Image</div> -->

            <div class="attachment">
                <div class="content">PDF</div>
            </div>
            <div class="attachment">
                <div class="content">Video</div>
            </div>
            <div class="attachment">
                <div class="content">MP4</div>
            </div>
            <div class="attachment">
                <div class="content">Image</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'Messages',
  props: {
    UID : String,
  },
  data() {
    return {
        user : Object,
    }
  },
  watch : {
    UID : function(newUID){
        this.searchInfoUser(newUID);
    },
  },
  methods : {
      searchInfoUser : function(UID){
        db.database().ref("users/" + UID).get().then((snapshot) => {
            if (snapshot.exists()) { // En caso de que ya exista // console.log(snapshot.val());
                this.user = snapshot.val();
            } else { // Si no existe 
                console.log('ERROR: Información de usuario no encontrada en la DB');
            }
        });
      }
  },
  mounted(){
    this.searchInfoUser(this.UID);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-family: 'Poppins', sans-serif;
}

.layout-info-contact{
    background: var(--bg-color-gray-low);
    width: 100%;
    grid-column-start: 3;

    display: flex;
    justify-content: center;
    align-items: center;
}
.info{
    display: block;
    width: 90%;
}
.img-user{
    margin: 5px;
    padding: 1px;
    max-width: 80%;
    object-fit: cover;
    border-radius: 50%;
    border: solid 2px var(--txt-color-gray);
}
h6{
    margin-top: 40px;
    text-align: left;
}
.attachments{
    /* background: tomato; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 60px), 1fr));
    grid-template-rows: repeat(infinite, minmax(10px, 1fr));
    grid-gap: 5px;
}
.attachments .attachment{
    transition: 0.5s;
    background: rgba(253, 136, 58, 0.2);
    border: solid 1px var(--bg-color-orange);
    border-style: dashed;

    color: var(--bg-color-orange);
    position: relative;
    border-radius: 15px;
}
.attachments .attachment:hover{
    transition: 0.5s !important;
    border-style: solid;
    cursor: pointer;
}
.attachments .attachment .content {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}
.attachments .attachment:after {
    content: '';
    display: block;
    padding-bottom: 100%;
}

</style>
