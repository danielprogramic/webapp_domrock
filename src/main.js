  // The Vue build version to load with the `import` command
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue from 'vue'

  import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VCard,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  } from 'vuetify'
  import '../node_modules/vuetify/src/stylus/app.styl'

  import App from './App'
  import router from './router'

  Vue.use(Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VFooter,
      VCard,
      VList,
      VBtn,
      VIcon,
      VGrid,
      VToolbar,
      transitions
    },
    theme: {
      primary: '#0a1f30',
      secondary: '#d6e1eb',
      content: '#eeeff1',
      footer: '#eeeff1',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  })

  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })