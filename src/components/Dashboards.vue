<template>
    <section class="section-space cuba-demo-section" id="dashboards">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 wow pulse">
            <div class="cuba-demo-content mt50">
              <div class="couting">
                <h2>2+</h2>
              </div>
              <p>Dashboards                      </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container container-modify">
        <div class="row dashboard">
          <div class="col-lg-6 col-sm-6 wow fadeIn">
            <div class="img-effect"><a href="https://dash.yurabot.xyz"><img class="img-fluid cuba-img" src="../assets/images/landing/db.webp" alt="">
                <div class="cuba_img_content">
                  <h4>{{ t('theme_light') }}</h4>
                </div></a></div>
          </div>
          <div class="col-lg-6 col-sm-6 wow fadeIn">
            <div class="img-effect"><a href="https://dash.yurabot.xyz"><img class="img-fluid cuba-img" src="../assets/images/landing/dn.webp" alt="">
                <div class="cuba_img_content">
                  <h4>{{ t('theme_dark') }}</h4>
                </div></a></div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Dashboards',
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