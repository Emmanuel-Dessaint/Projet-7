<template>
  <div class="home">
    
    <Header />
    <Creercompte />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Creercompte from '@/components/Creercompte.vue'


export default {
  name: 'Connect',
  components: {
    Header,
    Creercompte,
  }
}
</script>