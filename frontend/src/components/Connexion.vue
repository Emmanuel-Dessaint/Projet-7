<template>
    <div class="div_connexion">
        <h1 class="Connectez">Connectez-vous</h1>
        
        <form class="form" id="login-form">
            <div class="div_1">
                <label for="username">Adresse mail</label><br>
                <input type="text" name="utilisateur"  id="username-field" v-model="username" ><br>
            </div>
            <div class="div_2">
                <label for="username">Mot de passe</label><br>
                <input type="password" name="mot de passe" id="password-field" v-model="password" ><br>
            </div>
            <button @click.prevent="envoyerDonnées()" class="boutonConnect" type="submit">Se connecter</button>
        </form>   
    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        envoyerDonnées() {
            alert(this.username)
            console.log(this.password)
            axios.post('http://localhost:3000/api/auth/login', {
                FirstName:(this.username),
                LastName:(this.password)
            })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
            
        },
    },
  // Fetches posts when the component is created.
  created() {
    axios.post(`http://localhost:8080/#/`, {test:'message test'})
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(response)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
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