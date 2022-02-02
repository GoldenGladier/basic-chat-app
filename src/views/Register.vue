<template>
    <button @click="registration" class="button btn-google"><i class="bi bi-google"></i> Google</button>
</template>

<script>
import firebase from "firebase/app";
import "firebase/app";
// import "firebase/auth";
import 'firebase/auth'
import { db } from '../db.js';

export default {
    name: 'Register',
    components: {
        // Messages,
    },
    data() {
        return {
            provider : new firebase.auth.GoogleAuthProvider(),
        }
    }, 
    props: {
    },
    methods: {
        registration : function() {
            db.auth()
            .signInWithPopup(this.provider)
            .then((result) => {
                var user = result.user;
                console.log(user.email);
                console.log(user.displayName);
                console.log(user.uid);
                // Revisamos si el usuario ya existe en la DB
                db.database().ref().child("users").child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) { // En caso de que ya exista // console.log(snapshot.val());
                    this.$router.replace('chat'); // Redirigimos al chat
                } else { // Si no existe // console.log("No data available");
                    db.database().ref('users/' + user.uid).set({ // Registramos el usuario
                        name : user.displayName,
                        picture : user.photoURL,
                        connected : true,
                        uid : user.uid,
                    });               
                    this.$router.replace('chat'); // Redirigimos a el chat
                }
                }).catch((error) => {
                    console.error(error); // Mostramos errores
                    this.$emit('login-google-error', '(DATABASE) ', error);
                });

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

                console.log('ERROR ' + errorCode + ': ' + errorMessage);
                console.log('Mail: ' + email);
                console.log('Credential: ' + credential);

                this.$emit('login-google-error', errorCode, errorMessage);
            });

        },

    },

}
</script>


<style scoped>

.button {   
    transition: 1s;
    border-radius: 20px;
    display: block;
    margin: 10px auto;
    padding: 8px 20px;
    border: none;
    display: inline-block;
    box-sizing: border-box;   
    outline: none;
}
.btn-google{
    /* background: linear-gradient(15deg, #fd883a, #ff6600); */
    border: 2px solid var(--bg-color-dark);
    color: #fefefe;
    color: tomato;
    background: transparent;
}

</style>
