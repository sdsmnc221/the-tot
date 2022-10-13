<template>
  <div class="pre-release-scenes">
    <ticket-machine />
    <Transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-instruction']"
        prompt="Click on the blinking hotspot to claim your free ticket!"
        :valid="
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
        prompt="Do you wanna claim your ticket with your <span>abundance</span> of <span>love</span>?"
        :valid="
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
        prompt="Do you wanna claim your ticket with your <span>abundance</span> of <span>trust</span>?"
        :valid="
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
        prompt="<p>Are you that special person that the <span>Train of Thoughts</span> is meant for?</p><p>Enter your <span>special code</span> to confirm!</p>"
        with-code-input
        :valid="
          () =>
            $store.commit('hidePrompt', {
              path: 'scenes-ticketMachine-specialCode',
            })
        "
      />
    </Transition>
  </div>
</template>

<script>
import TicketMachine from "@/components/TicketMachine/TicketMachine.vue";
import PopUp from "@/components/PopUp/PopUp.vue";
export default {
  name: "PreReleaseScenes",
  components: { TicketMachine, PopUp },
};
</script>

<style lang="scss" scoped>
.pre-release-scenes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;
}
</style>
