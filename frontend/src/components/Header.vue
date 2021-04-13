<template>  
    <div>
        <header>
            <div class="top-background">   
                <div class="menu">
                    <div class="nomPrenom">Groupomania</div>
                    <div class="menuDeroulant">
                        <!-- <div class="menuprojets">Groupomania</div> -->
                        <div class="headerPageprincipale"><router-link class="routerLink" to="/Accueil">Page principale</router-link></div>
                        <div class="headerConnect"><router-link class="routerLink" to="/">Se connecter</router-link></div>
                        <div class="headerSignup"><router-link class="routerLink" to="/Signup">Créer un compte</router-link></div>
                    </div>
                </div>            
            </div>
        </header>      
    </div> 
</template>

<script>
export default {
    name:"Header"
}
</script>

<style>
.routerLink{
    text-decoration: none;
    color: rgb(206, 197, 197);
}
.top-background{
    background: linear-gradient(to right, #111861, #011a32);
    color:rgb(206, 197, 197);
    margin:-10px; 
}
.menu{
    padding-top:3em;
    display:flex;
    justify-content: space-between;
    background: linear-gradient(to right, #111861, #011a32);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    color:rgb(206, 197, 197);
}
.nomPrenom{
    font-size:2em;
    margin-left: 2em;
    cursor:pointer;
}
.menuDeroulant{
    display:flex;
    justify-content: space-between;
    margin-right:3em;
    
}
.menuprojets{
    margin-right: 5em;
    cursor:pointer;
}
.headerConnect{
    margin-right:2em;
    cursor:pointer;
}
.headerSignup{
    cursor:pointer;
}
.presentation{
    margin: 4em 10em 1em 10em;
    padding-bottom:5em;
    font-size:1.5rem;
    text-align: center;
}
</style>