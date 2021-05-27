<template>

  <div class="page-wrapper landing-page">
    <LandingHome/>
    <br>
    <Fonctions/>
    <Dashboards/>
    <Footer/>
  </div>

</template>

<script>

import LandingHome from '@/components/LandingHome.vue'
import Fonctions from '@/components/Fonctions.vue'
import Dashboards from '@/components/Dashboards.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    LandingHome,
    Fonctions,
    Dashboards,
    Footer
  }
}
</script>
