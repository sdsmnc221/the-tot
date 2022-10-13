<template>
  <div class="pre-release-scenes">
    <ticket-machine />
    <Transition name="fade">
      <pop-up
        v-if="$store.state['scenes-ticketMachine-instruction']"
        :prompt="$t('scenes.prompts.instruction')"
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
        :prompt="$t('scenes.prompts.love')"
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
        :prompt="$t('scenes.prompts.trust')"
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
        :prompt="$t('scenes.prompts.specialCode')"
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
