import { stringToBoolean } from "@/utils";
import { createStore } from "vuex";

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
    };
  },
  mutations: {
    selectLang(state, payload) {
      state.lang = payload.lang;
      state.langSelected = true;
    },
  },
});

export default globalStore;
