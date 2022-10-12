import "./scss/global/index.scss";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
import en from "./i18n/en.json";
import vn from "./i18n/fr.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    vn: vn,
  },
});

const metaManager = createMetaManager();

const app = createApp(App);
app.use(i18n);
app.use(metaManager);
app.use(metaPlugin); // optional, only needed for OptionsAPI (see below)
app.mount("#app");
