import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import { Quasar, Notify } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/themify/themify.css";
import "@quasar/extras/line-awesome/line-awesome.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(Quasar, {
  plugins: { Notify },

  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {}, // default set of options for Notify Quasar plugin
    loading: {}, // default set of options for Loading Quasar plugin
    loadingBar: {}, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  },
});

app.mount("#app");
