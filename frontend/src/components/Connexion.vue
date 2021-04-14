<template>
    <div class="div_connexion">
        <h1 class="Connectez">Connectez-vous</h1>
        
        <form class="form" id="login-form">
            <div class="div_1">
                <label for="username">Adresse mail</label><br>
                <input type="text" name="utilisateur"  id="username-field" v-model="username" ><br>
            </div>
            <div class="div_2">
                <label for="password">Mot de passe</label><br>
                <input type="password" name="mot de passe" id="password-field" v-model="password" ><br>
            </div>
            <button @click.prevent="envoyerDonnées()" class="boutonConnect" type="submit">Se connecter</button>
        </form>   
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index.js'

export default {
    name: "Connexion",
    methods: {
        envoyerDonnées() {
            axios.post('http://localhost:3000/api/auth/login', {
                username:(this.username),
                password:(this.password)
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("authentification réussie")
                    router.push("/CreerDiscussion")
                }
            }, (error) => {
                console.log(error);
            });
            
        },
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
.username-field{
    margin-top:1.5em;
}
.login-form-field {
  border: none;
  border-bottom: 1px solid #3a3a3a;
  margin-bottom: 10px;
  border-radius: 3px;
  outline: none;
  padding: 0px 0px 5px 5px;
}
</style>