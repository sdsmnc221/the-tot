import { makeID, stringToBoolean } from "@/utils";
import { createStore } from "vuex";
import { i18n } from "../main";

// Create a new store instance.
const globalStore = createStore({
  state() {
    return {
      release: process.env.VUE_APP_RELEASE,
      isDebug: stringToBoolean(process.env.VUE_APP_DEBUG),
      isMobile:
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      isFullscreen: false,
      isLandscape: false,
      prepURIfont: false,
      loading: true,
      percentLoaded: 0,
      lang: navigator.language,
      langSelected: false,
      publicPath: process.env.BASE_URL,
      enterXP: false,
      ticketId: makeID(process.env.VUE_APP_CODE),
      "scenes-ticketMachine-instruction": false,
      "scenes-ticketMachine-love": false,
      "scenes-ticketMachine-trust": false,
      "scenes-ticketMachine-specialCode": false,
      "scenes-ticketDownload": false,
      "scenes-turnstiles": false,
      "scenes-platform": false,
      "scenes-qa": false,
      "scenes-wayOut": false,
      sounds: {},
    };
  },
  mutations: {
    endLoading(state) {
      state.loading = false;
    },
    percentLoaded(state, payload) {
      state.percentLoaded = payload.percent;
    },
    selectLang(state, payload) {
      state.lang = payload.lang;
      i18n.global.locale = state.lang;
    },
    setLocale(state) {
      state.langSelected = true;
    },
    resize(state, payload) {
      state.isMobile = payload.isMobile;
      state.isLandscape = payload.isLandscape;
    },
    prepFont(state) {
      state.prepURIfont = true;
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
    soundsLoaded(state, payload) {
      state.sounds = payload.sounds;
    },
    playSound(state, payload) {
      state.sounds[payload.soundName].play();
    },
    stopSound(state, payload) {
      state.sounds[payload.soundName].stop();
    },
  },
  actions: {
    saveTicketId(context) {
      if (!window.localStorage.getItem("ticketId"))
        window.localStorage.setItem("ticketId", context.state.ticketId);
    },
  },
});

export default globalStore;
