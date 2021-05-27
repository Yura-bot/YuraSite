<template>
<header>                       
  <nav class="navbar navbar-b navbar-trans navbar-expand-xl fixed-top nav-padding" id="sidebar-menu"><a class="navbar-brand p-0" href="#"><img class="img-fluid" src="../assets/images/landing/landing_logo.png" alt=""></a>
  <button class="navbar-toggler navabr_btn-set custom_nav" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
    <div class="navbar-collapse justify-content-end collapse hidenav" id="navbarDefault">
      <ul class="navbar-nav navbar_nav_modify" id="scroll-spy">
        <li class="nav-item"><a class="nav-link" href="/">{{ t('home') }}</a></li>

        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{ t('vote') }}</a>
          <div class="dropdown-content">
            <a href="https://top.gg/bot/662775890194989066" target="_blank">Top.gg</a>
            <a href="https://arcane-center.xyz/bot/662775890194989066" target="_blank">Arcane Center</a>
            <a href="https://shadow-bot.fr/bot/662775890194989066" target="_blank">Shadow Bot</a>
          </div>
        </div>

        <li class="nav-item"><a class="nav-link" href="https://discord.gg/etQ3uJN" target="_blank">{{ t('support') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="https://discord.com/oauth2/authorize?client_id=662775890194989066&scope=bot&permissions=2146958847" target="_blank">{{ t('addbot') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="https://yurabot.xyz/status" target="_blank">{{ t('status') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#fonctions">{{ t('fonctions') }}</a></li>

        <li class="nav-item buy-btn"><a class="nav-link js-scroll" href="https://dash.yurabot.xyz" target="_blank">{{ t('dash') }}</a></li>

      </ul>
    </div>
  </nav>
</header>
</template>

<script>

import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Header',
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