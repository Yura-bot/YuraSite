<template>
    <div class="landing-home">
      <ul class="decoration">
        <li class="one"><img class="img-fluid" src="../assets/images/landing/decore/1.png" alt=""></li>
        <li class="two"><img class="img-fluid" src="../assets/images/landing/decore/2.png" alt=""></li>
        <li class="three"><img class="img-fluid" src="../assets/images/landing/decore/4.png" alt=""></li>
        <li class="four"><img class="img-fluid" src="../assets/images/landing/decore/3.png" alt=""></li>
        <li class="five"><img class="img-fluid" src="../assets/images/landing/2.png" alt=""></li>
        <li class="six"><img class="img-fluid" src="../assets/images/landing/decore/cloud.png" alt=""></li>
        <li class="seven"><img class="img-fluid" src="../assets/images/landing/2.png" alt=""></li>
      </ul>
      <div class="container-fluid">
        <div class="sticky-header">
          <Header/>
        </div>
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="content">
              <div>
                <h1 class="wow fadeIn">Yura Bot <br> {{ t('title2') }}</h1>
                <h3 class="txt-secondary wow fadeIn">{{ t('desc1') }}</h3>
                <p class="mt-3 wow fadeIn" >{{ t('desc2') }}</p>
                <div class="btn-grp mt-4"><a class="btn btn-pill btn-primary btn-air-primary btn-lg mr-3 wow pulse" href="https://discord.com/oauth2/authorize?client_id=662775890194989066&scope=bot&permissions=2146958847" target="_blank">{{ t('addbot') }}</a><a class="btn btn-pill btn-secondary btn-air-secondary btn-lg mr-3 wow pulse" href="https://discord.gg/etQ3uJN" target="_blank">{{ t('support') }}</a><a class="btn btn-pill btn-success btn-air-success btn-lg wow pulse mr-3" href="https://dash.yurabot.xyz/" target="_blank">{{ t('dash') }}</a></div>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6">                 
            <div class="wow fadeIn"><img class="screen1" src="../assets/images/landing/dash2.webp" alt=""></div>
            <div class="wow fadeIn"><img class="screen2" src="../assets/images/landing/dash1.webp" alt=""></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LandingHome',
  components: {
    Header
  },
  data: function() {
    const lang = localStorage.getItem('lang') || navigator.language || 'en';
    return { lang: lang }
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
})
</script>