<template>
    <section class="section-space cuba-demo-section" id="fonctions">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 wow pulse">
            <div class="cuba-demo-content mt50">
              <div class="couting">
                <h2>{{ t('functionalities') }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container container-modify">
        <div class="row dashboard">

          <div class="ol-lg-12">
            <div class="row">
              <div class="col-xl-4 col-md-6">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="sliders"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('configadvance') }}</h6>
                            <p>{{ t('configadvance_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="database"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('backup') }}</h6>
                            <p>{{ t('backup_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="gift"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('giveaway') }}</h6>
                            <p>{{ t('giveaway_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="cloud"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('suggest') }}</h6>
                            <p>{{ t('suggest_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="zap-off"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('modadvance') }}</h6>
                            <p>{{ t('modadvance_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="user-x"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('automod') }}</h6>
                            <p>{{ t('automod_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="music"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('music') }}</h6>
                            <p>{{ t('music_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-12 col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="star"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('fun') }}</h6>
                            <p>{{ t('fun_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="row">

                  <div class="col-xl-12 col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="shield"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('raidprotection') }}</h6>
                            <p>{{ t('raidprotection_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-12 col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="settings"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('util') }}</h6>
                            <p>{{ t('util_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="box"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('ticket') }}</h6>
                            <p>{{ t('ticket_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="media"><i class="m-r-30" data-feather="image"></i>
                          <div class="media-body">
                            <h6 class="f-w-600">{{ t('img') }}</h6>
                            <p>{{ t('img_desc') }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div> 
            </div>
          </div>
          
        </div>
      </div>

      
    </section>
</template>

<script>

import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Fonctions',
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