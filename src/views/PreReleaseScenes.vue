<template>
  <div class="pre-release-scenes">
    <ticket-machine ref="tm" />
    <transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-instruction']"
        :prompt="$t('scenes.prompts.instruction')"
        :confirm="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-instruction',
            })
        "
      />
    </transition>
    <transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-love']"
        :prompt="$t('scenes.prompts.love')"
        :confirm="
          () => {
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-love',
            });
            $refs.tm.zoomIn();
          }
        "
        :refuse="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-love',
            })
        "
      />
    </transition>
    <transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-trust']"
        :prompt="$t('scenes.prompts.trust')"
        :confirm="
          () => {
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-trust',
            });
            $refs.tm.zoomIn();
          }
        "
        :refuse="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-trust',
            })
        "
      />
    </transition>
    <transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-specialCode']"
        :prompt="$t('scenes.prompts.specialCode')"
        with-input
        :confirm="
          () => {
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-specialCode',
            });
            $refs.tm.zoomIn();
          }
        "
        :refuse="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-specialCode',
            })
        "
      />
    </transition>
    <transition name="fade">
      <ticket-download v-if="$store.state['scenes-ticketDownload']" />
    </transition>
    <transition name="fade">
      <turnstiles-announcement v-if="$store.state['scenes-turnstiles']" />
    </transition>
    <transition name="fade">
      <train-platform v-if="$store.state['scenes-platform']" />
    </transition>
    <transition name="fade">
      <q-a v-if="$store.state['scenes-qa']" />
    </transition>
    <transition name="fade">
      <way-out v-if="$store.state['scenes-wayOut']" />
    </transition>
  </div>
</template>

<script>
import TicketMachine from "@/components/TicketMachine/TicketMachine.vue";
import TicketDownload from "@/components/TicketDownload/TicketDownload.vue";
import TurnstilesAnnouncement from "@/components/TurnstilesAnnouncement/TurnstilesAnnouncement.vue";
import PopUp from "@/components/PopUp/PopUp.vue";
import TrainPlatform from "@/components/TrainPlatform/TrainPlatform.vue";
import QA from "@/components/QA/QA.vue";
import WayOut from "@/components/WayOut/WayOut.vue";
export default {
  name: "PreReleaseScenes",
  components: {
    TicketMachine,
    TicketDownload,
    TurnstilesAnnouncement,
    TrainPlatform,
    PopUp,
    QA,
    WayOut,
  },
};
</script>

<style lang="scss" scoped>
.pre-release-scenes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;

  > * {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
