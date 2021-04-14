<template>
  <div class="home">
    
    <HeaderPage />
    <Corps />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue'
import Corps from '@/components/Corps.vue'


export default {
  name: 'CreerDiscussion',
  components: {
    HeaderPage,
    Corps,
  }
}
</script>