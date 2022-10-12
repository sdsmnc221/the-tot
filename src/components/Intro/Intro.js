import { gsap } from "gsap";

export default class Intro {
  constructor(el, content, enter, enterBackground, circles) {
    this.DOM = {
      el,
      content,
      enterCtrl: enter,
      enterBackground,
      circles,
    };

    // total
    this.circleTextTotal = this.DOM.circles.length;

    this.setup();
  }
  setup() {
    // need to set the transform origin
    // need to set the transform origin in the center
    gsap.set(this.DOM.circles, { transformOrigin: "50% 50%" });
    // hide on start
    gsap.set([this.DOM.circles, this.DOM.content.children], {
      opacity: 0,
    });
    // don't allow to hover
    gsap.set(this.DOM.enterCtrl, { pointerEvents: "none" });

    this.initEvents();
  }
  initEvents() {
    this.enterMouseEnterEv = () => {
      gsap.killTweensOf([this.DOM.enterBackground, this.DOM.circles]);

      gsap.to(this.DOM.enterBackground, {
        duration: 1.2,
        ease: "expo",
        scale: 1.4,
      });
      gsap.to(this.DOM.circles, {
        duration: 1.2,
        ease: "expo",
        scale: 1.15,
        rotation: (i) => (i % 2 ? "-=90" : "+=90"),
        opacity: 0.4,
      });

      this.standby();
    };
    this.enterMouseLeaveEv = () => {
      // gsap.killTweensOf([DOM.enterBackground,this.DOM.circles]);
      gsap.to(this.DOM.enterBackground, {
        duration: 1.2,
        ease: "expo",
        scale: 1,
      });
      gsap.to(this.DOM.circles, {
        duration: 1,
        ease: "expo",
        scale: 1,
        rotation: (i) => (i % 2 ? "+=120" : "-=120"),
        opacity: 1,
        stagger: {
          amount: -0.2,
        },
      });
    };
    this.DOM.enterCtrl.addEventListener("mouseenter", this.enterMouseEnterEv);
    this.DOM.enterCtrl.addEventListener("mouseleave", this.enterMouseLeaveEv);

    this.enterClickEv = () => this.enter();
    this.DOM.enterCtrl.addEventListener("click", this.enterClickEv);
  }
  start() {
    this.startTL = gsap
      .timeline({ onComplete: this.standby.bind(this) })
      .addLabel("start", 0)
      // rotation for all texts
      .to(this.DOM.enter, {
        duration: 2.4,
        ease: "expo.inOut",
        opacity: 1,
      })
      .to(
        this.DOM.circles,
        {
          duration: 3.2,
          ease: "expo.inOut",
          rotation: (i) => (i % 2 ? 90 : -90),
          stagger: {
            amount: 0.4,
          },
        },
        "start"
      )
      // scale in the texts & enter button and fade them in
      .to(
        [this.DOM.circles, this.DOM.enterCtrl],
        {
          duration: 3.2,
          ease: "expo.inOut",
          startAt: { opacity: 0, scale: 0.8 },
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.4,
          },
        },
        "start"
      )
      // at start+1 allow the hover over the enter ctrl
      .add(() => {
        gsap.set(this.DOM.enterCtrl, { pointerEvents: "auto" });
      }, "start+=2");
  }
  standby() {
    this.standbyTL = gsap
      .timeline({ repeat: -1, yoyo: true })
      .addLabel("start", 0)
      // rotation for all texts
      .to(
        this.DOM.circles,
        {
          duration: 3,
          ease: "expo.inOut",
          rotation: (i) => (i % 2 ? 180 : -180),
          stagger: {
            amount: 0.4,
          },
        },
        "start"
      )
      .play();
  }
  enter() {
    this.startTL.kill();
    this.standbyTL.kill();

    gsap.set(this.DOM.enterCtrl, { pointerEvents: "none" });
    this.DOM.enterCtrl.removeEventListener(
      "mouseenter",
      this.enterMouseEnterEv
    );
    this.DOM.enterCtrl.removeEventListener(
      "mouseleave",
      this.enterMouseLeaveEv
    );

    gsap
      .timeline()
      .addLabel("start", 0)
      .to(
        this.DOM.enterCtrl,
        {
          duration: 0.6,
          ease: "back.in",
          scale: 0.2,
          opacity: 0,
        },
        "start"
      )
      .to(
        this.DOM.circles,
        {
          duration: 0.8,
          ease: "back.in",
          scale: 0,
          opacity: 0,
          stagger: {
            amount: -0.4,
          },
        },
        "start"
      )
      .to(
        this.DOM.content,
        {
          opacity: 1,
        },
        "start+=0.4"
      )
      .to(
        this.DOM.content.children,
        {
          duration: 0.9,
          ease: "back.out",
          startAt: { opacity: 0, scale: 1.2 },
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.3,
          },
        },
        "start+=0.8"
      );
  }
}
