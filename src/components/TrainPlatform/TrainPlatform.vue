<template>
  <div class="train-platform" ref="container"></div>
</template>

<script>
// import { gsap } from "gsap";

export default {
  name: "TrainPlatform",

  data() {
    return {
      DOM: {},
    };
  },
  mounted() {
    this.setup();
  },
  methods: {
    setup() {
      this.DOM = {
        container: this.$refs.container,
      };

      // gsap.set([this.DOM.turnstiles, this.DOM.announcement], {
      //   transformOrigin: "50% 50%",
      //   opacity: 0,
      // });

      // gsap
      //   .timeline()
      //   .addLabel("start", 0)
      //   .to(
      //     this.DOM.announcement,
      //     {
      //       y: 0,
      //       opacity: 1,
      //       startAt: { y: "-100vh", opacity: 0 },
      //       duration: 3.2,
      //       ease: "expo.inOut",
      //       onStart: () =>
      //         setTimeout(
      //           () =>
      //             this.$store.commit("playSound", {
      //               soundName: "platformCrowd",
      //             }),
      //           1200
      //         ),
      //     },
      //     "start"
      //   )
      //   .to(
      //     this.DOM.turnstiles,
      //     {
      //       y: 0,
      //       opacity: 1,
      //       duration: 3.2,
      //       startAt: { y: "100vh", opacity: 1 },
      //       ease: "expo.inOut",
      //       delay: 0.6,
      //       onStart: () =>
      //         setTimeout(
      //           () =>
      //             this.$store.commit("playSound", {
      //               soundName: `attentionPlease${this.$i18n.locale}`,
      //             }),
      //           3200
      //         ),
      //     },
      //     "start"
      //   )
      //   .to(
      //     this.DOM.hpTicket,
      //     {
      //       opacity: 0.64,
      //       scale: 1.8,
      //       x: "19vw",
      //       y: "-33vh",
      //       bottom: 0,
      //       duration: 0.8,
      //       ease: "expo",
      //     },
      //     "start+=4.8"
      //   )
      //   .play();
    },
    showScenePlatform() {
      setTimeout(() => {
        this.$store.commit("showPrompt", { path: "scenes-platform" });
      }, 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
.train-platform {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../../assets/images/pre-release-scenes-bg.png");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-tursntiles {
    display: block;
    position: absolute;
    bottom: 0;
    left: -28vw;
    height: 56vh;
  }

  .text-announcement {
    animation: blink-animation 1s steps(5, start) infinite;
  }

  svg {
    display: block;
    width: 160vw;
    height: auto;
    left: -20vw;
    top: 0;
    position: absolute;
  }

  .bo {
    fill: url(#be);
  }
  .bp {
    fill: url(#bg);
  }
  .bq {
    fill: url(#bf);
  }
  .br {
    fill: url(#bm);
  }
  .bs {
    fill: url(#bd);
  }
  .bt {
    fill: url(#bn);
  }
  .bu {
    fill: url(#ba);
  }
  .bv {
    fill: url(#bh);
  }
  .bw {
    fill: url(#bc);
  }
  .bx {
    fill: url(#bb);
  }
  .by {
    fill: url(#bl);
  }
  .c {
    fill: url(#bi);
  }
  .ca {
    fill: url(#bk);
  }
  .cb {
    fill: url(#bj);
  }
  .cc,
  .cd,
  .ce,
  .cf,
  .cg,
  .ch,
  .ci,
  .cj,
  .ck,
  .cl,
  .cm,
  .cn,
  .co,
  .cp,
  .cq,
  .cr,
  .cs,
  .ct,
  .cu,
  .cv,
  .cw,
  .cx,
  .cy,
  .d,
  .da,
  .db,
  .dc,
  .dd,
  .de,
  .df,
  .dg,
  .dh,
  .di,
  .dj,
  .dk,
  .dl,
  .dm,
  .dn,
  .do,
  .dp,
  .dq,
  .dr,
  .ds,
  .dt,
  .du,
  .dv,
  .dw,
  .dx,
  .dy,
  .e,
  .ea,
  .eb {
    fill-rule: evenodd;
  }
  .cc,
  .dq,
  .ec,
  .eb {
    mix-blend-mode: soft-light;
  }
  .cc,
  .dt,
  .dv,
  .dw {
    opacity: 0.5;
  }
  .cc,
  .eb {
    fill: #fff;
  }
  .cd {
    fill: url(#u);
  }
  .ce {
    fill: url(#t);
  }
  .cf {
    fill: url(#e);
  }
  .cg {
    fill: url(#g);
  }
  .ch {
    fill: url(#f);
  }
  .ci {
    fill: url(#l);
  }
  .cj {
    fill: url(#n);
  }
  .ck {
    fill: url(#m);
  }
  .cl {
    fill: url(#h);
  }
  .cm {
    fill: url(#i);
  }
  .cn {
    fill: url(#j);
  }
  .co {
    fill: url(#q);
  }
  .cp {
    fill: url(#s);
  }
  .cq {
    fill: url(#r);
  }
  .cr {
    fill: url(#y);
  }
  .cs {
    fill: url(#x);
  }
  .ct {
    fill: url(#w);
  }
  .cu {
    fill: url(#b`);
  }
  .cv {
    fill: url(#a`);
  }
  .cw {
    fill: url(#ay);
  }
  .cx {
    fill: url(#aq);
  }
  .cy {
    fill: url(#al);
  }
  .d {
    fill: url(#ar);
  }
  .da {
    fill: url(#am);
  }
  .db {
    fill: url(#aw);
  }
  .dc {
    fill: url(#ax);
  }
  .dd {
    fill: url(#as);
  }
  .de {
    fill: url(#af);
  }
  .df {
    fill: url(#ai);
  }
  .dg {
    fill: url(#ad);
  }
  .dh {
    fill: url(#ao);
  }
  .di {
    fill: url(#aj);
  }
  .dj {
    fill: url(#ae);
  }
  .dk {
    fill: url(#ap);
  }
  .dl {
    fill: url(#aa);
  }
  .dm {
    fill: url(#ab);
  }
  .dn {
    fill: url(#au);
  }
  .do {
    fill: url(#ak);
  }
  .dp {
    fill: url(#av);
  }
  .dq {
    fill: url(#at);
  }
  .ed {
    fill: #ee4887;
    font-family: Silkscreen-Regular, Silkscreen;
  }
  .vn {
    fill: #ee4887;
    font-family: $font-vt;
    text-transform: uppercase;

    .middle * {
      font-size: 56px;
    }
  }
  .dr {
    fill: url(#ac);
  }
  .dr,
  .ds,
  .du,
  .dx,
  .ee,
  .ef {
    mix-blend-mode: screen;
  }
  .ds {
    fill: url(#k);
  }
  .dt {
    fill: url(#ag);
  }
  .dt,
  .dv,
  .dw {
    mix-blend-mode: multiply;
  }
  .eg {
    fill: #ff0051;
  }
  .eh,
  .dy {
    fill: #0e0012;
  }
  .ei {
    fill: #6dff36;
  }
  .du {
    fill: url(#ah);
  }
  .du,
  .dx {
    opacity: 0.2;
  }
  .dv {
    fill: url(#o);
  }
  .dw {
    fill: url(#d);
  }
  .ej {
    font-size: 37px;
  }
  .dx {
    fill: url(#p);
  }
  .e {
    fill: #130617;
  }
  .ea {
    fill: #180b1c;
  }
  .ee {
    fill: url(#v);
  }
  .ef {
    fill: url(#an);
  }
  .ek {
    isolation: isolate;
  }
  .el {
    font-size: 45px;
  }
  .eb {
    opacity: 0.3;
  }
}
</style>
