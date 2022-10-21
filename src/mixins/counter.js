export default {
  data() {
    return {
      d: 0,
      h: 0,
      m: 0,
    };
  },
  methods: {
    counter() {
      const now = new Date().getTime();
      const countdownDate = new Date(this.$store.state.release);
      const timeLeft = countdownDate - now;
      this.d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.h = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    },
  },
};
