import { stringToBoolean } from "@/utils";
import { createStore } from "vuex";
import { i18n } from "../main";

// Create a new store instance.
const globalStore = createStore({
  state() {
    return {
      isDebug: stringToBoolean(process.env.VUE_APP_DEBUG),
      isMobile:
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      showFullscreenBtn: !(
        /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      ),
      isFullscreen: false,
      isLandscape: true,
      lang: navigator.language,
      langSelected: false,
      publicPath: process.env.BASE_URL,
      enterXP: false,
      "scenes-ticketMachine-instruction": false,
      "scenes-ticketMachine-love": false,
      "scenes-ticketMachine-trust": false,
      "scenes-ticketMachine-specialCode": false,
    };
  },
  mutations: {
    selectLang(state, payload) {
      state.lang = payload.lang;
      i18n.global.locale = state.lang;
    },
    setLocale(state) {
      state.langSelected = true;
    },
    resize(state, payload) {
      state.isMobile = payload.isMobile;
    },
    enterExperience(state) {
      state.enterXP = true;
    },
    showPrompt(state, payload) {
      state[payload.path] = true;
    },
    hidePrompt(state, payload) {
      state[payload.path] = false;
    },
  },
});

export default globalStore;
