import "./scss/global/index.scss";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
// TODO: Delete comments... Just for prototype
//import './registerServiceWorker'
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

const lang = navigator.language.substring(0, 2) === "fr" ? "fr" : "en";

const i18n = createI18n({
  locale: lang,
  fallbackLocale: "en",
  messages: {
    en: en,
    fr: fr,
  },
});

const metaManager = createMetaManager();

const app = createApp(App);
app.use(i18n);
app.use(metaManager);
app.use(metaPlugin); // optional, only needed for OptionsAPI (see below)
app.mount("#app");
