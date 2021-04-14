<template>
    <div class="div_connexion">
        <h1 class="Connectez">Créer un compte</h1>

        <form class="form" id="login-form">       
                <label for="username">Adresse mail</label><br>
                <input type="email"  name="utilisateur"  id="username-field" v-model="username" ><br><br>
                <label for="username">Mot de passe</label><br>
                <input type="password" pattern=".{8,}" title="Le mot de passe doit contenir au moins 8 caractères" name="mot de passe" id="password-field" v-model="password" ><br>
                <input @click.prevent="envoyerDonnées()" class="boutonConnect" type="submit" value="Créer un compte"> <!--@click.prevent="envoyerDonnées()" c'est l'ancien bouton-->
                <!-- <input v-on:click="fonctionTest()" class="boutonTest" type="submit" value="Changer de page"> -->

        </form>   
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index.js';

export default {
    name:"Creercompte",
    methods: {
        envoyerDonnées() {
            axios.post('http://localhost:3000/api/auth/signup', {
                username:(this.username),
                password:(this.password)
            })
            .then((response) => {
                console.log(response.data.message);
                 if (response.status === 201) {
                     router.push("/CreerDiscussion")
                }
                // if (response.status === 201) {
                //     router.push("/Accueil")
                // }
            }, (error) => {
                console.log(error);     
            });
        },
        // fonctionTest() {
        //     var search = document.getElementsById('boutonConnect')
        //     search.addEventListener("click",envoyerDonnées())
        // }
    },
}
</script>

<style>
.div_connexion{
    margin-top:200px;
}
.div_1{
    margin-top:1.6em;
}
.div_2{
    margin-top:1em;
}
.boutonConnect{
    margin-top:2em;
}
</style>