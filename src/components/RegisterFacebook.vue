<template>
    <button @click="registration" class="button btn-facebook"><i class="bi bi-facebook" /> Facebook</button>
</template>

<script>
import firebase from "firebase/app";
import "firebase/app";
import 'firebase/auth'
import { db } from '../db.js';

export default {
    name: 'Register',
    components: {
        // Messages,
    },
    data() {
        return {
            provider : new firebase.auth.FacebookAuthProvider(),
        }
    }, 
    props: {
    },
    methods: {
        registration : function() {
            // provider.addScope('user_birthday');
            db.auth().useDeviceLanguage();

            db
            .auth()
            .signInWithPopup(this.provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log('Facebook: \nUser: ' + user + '\nToken: ' + accessToken);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log('Facebook: \nEmail: ' + email + '\nCredential: ' + credential);
                console.log('ERROR CODE: ' + errorCode + ' -> ' + errorMessage);
            });
            // db.auth()
            // .signInWithPopup(this.provider)
            // .then((result) => {
            //     var user = result.user;
            //     console.log(user.email);
            //     console.log(user.displayName);
            //     // Revisamos si el usuario ya existe en la DB
            //     db.database().ref().child("users").child(user.uid).get().then((snapshot) => {
            //     if (snapshot.exists()) { // En caso de que ya exista // console.log(snapshot.val());
            //         this.$router.replace('chat'); // Redirigimos al chat
            //     } else { // Si no existe // console.log("No data available");
            //         db.database().ref('users/' + user.uid).set({ // Registramos el usuario
            //             name : user.displayName,
            //             picture : user.photoURL,
            //             connected : true,
            //             uid : user.uid,
            //         });               
            //         this.$router.replace('chat'); // Redirigimos a el chat
            //     }
            //     }).catch((error) => {
            //         console.error(error); // Mostramos errores
            //         this.$emit('login-google-error', '(DATABASE) ', error);
            //     });

            // }).catch((error) => {
            //     // Handle Errors here.
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     var email = error.email;
            //     var credential = error.credential;

            //     console.log('ERROR ' + errorCode + ': ' + errorMessage);
            //     console.log('Mail: ' + email);
            //     console.log('Credential: ' + credential);

            //     this.$emit('login-google-error', errorCode, errorMessage);
            // });

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
.btn-facebook{
    /* background: linear-gradient(15deg, #fd883a, #ff6600); */
    border: 2px solid var(--bg-color-dark);
    color: #fefefe;
    color: #3b5998;
    background: transparent;
}

</style>
