<template>
    <footer class="footer-bg">
      <div class="container">
        <div class="landing-center ptb50">
          <div class="title"><img class="img-fluid" src="../assets/images/landing/landing_logo.png" alt=""></div>
            <div class="footer-content">
            <p></p><a class="btn mrl5 btn-lg btn-primary default-view lang" target="_blank" href="https://discord.com/oauth2/authorize?client_id=662775890194989066&scope=bot&permissions=2146958847" key="addbot">L'inviter</a><a class="btn mrl5 btn-lg btn-secondary btn-md-res lang" target="_blank" href="https://discord.gg/etQ3uJN" key="support">Support</a>
            <br><br><br>
            <select v-model="lang" @change="handleChange($event)">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>

import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Footer',
  data: function() {
    const lang = localStorage.getItem('lang') || navigator.language || 'en';
    return { lang: lang }
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
    }
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