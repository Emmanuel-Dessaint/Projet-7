<template>
    <div class="div_connexion">
        <h1 class="Connectez">Créer un compte</h1>
        <form class="form" id="myForm">
            <div class="div_1">
                <label for="username">Adresse mail</label><br>
                <input type="text" name="username" id="username"><br>
            </div>
            <div class="div_2">
                <label for="username">Mot de passe</label><br>
                <input type="text" name="username" id="password"><br>
            </div>
            <button class="boutonConnect" type="submit">Créer un compte</button>
        </form>   
    </div>
</template>

<script>
export default {
    name:"Creercompte",

    // const myForm = document.getElementById('myForm')
    // myForm.addEventListener('submit',function(event) {
    // event.preventDefault()
    // })
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