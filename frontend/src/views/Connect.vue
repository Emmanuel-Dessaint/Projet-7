<template>
  <div class="home">
    
    <Header />
    <Connexion />
    {{ message }}
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Connexion from '@/components/Connexion.vue'


export default {
  name: 'Connect',
  components: {
    Header,
    Connexion,
  }
}
</script>