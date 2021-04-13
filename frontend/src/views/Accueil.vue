<template>
  <div class="home">
    
    <Header />
    <Corps />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Corps from '@/components/Corps.vue'


export default {
  name: 'Accueil',
  components: {
    Header,
    Corps,
  }
}
</script>