<template>
  <div class="pre-release-scenes">
    <ticket-machine ref="tm" />
    <Transition name="fade">
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
    </Transition>
    <Transition name="fade">
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
    </Transition>
    <Transition name="fade">
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
    </Transition>
    <Transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-specialCode']"
        :prompt="$t('scenes.prompts.specialCode')"
        with-code-input
        :confirm="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-specialCode',
            })
        "
        :refuse="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-specialCode',
            })
        "
      />
    </Transition>
    <Transition name="fade">
      <ticket-download v-if="$store.state['scenes-ticketDownload']" />
    </Transition>
    <Transition name="fade">
      <turnstiles-announcement v-if="$store.state['scenes-turnstiles']" />
    </Transition>
    <Transition name="fade">
      <train-platform v-if="$store.state['scenes-platform']" />
    </Transition>
    <q-a />
  </div>
</template>

<script>
import TicketMachine from "@/components/TicketMachine/TicketMachine.vue";
import TicketDownload from "@/components/TicketDownload/TicketDownload.vue";
import TurnstilesAnnouncement from "@/components/TurnstilesAnnouncement/TurnstilesAnnouncement.vue";
import PopUp from "@/components/PopUp/PopUp.vue";
import TrainPlatform from "@/components/TrainPlatform/TrainPlatform.vue";
import QA from "@/components/QA/QA.vue";
export default {
  name: "PreReleaseScenes",
  components: {
    TicketMachine,
    TicketDownload,
    TurnstilesAnnouncement,
    TrainPlatform,
    PopUp,
    QA,
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
