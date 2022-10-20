export default [
  // {
  //   name: "environmentMapTexture",
  //   type: "cubeTexture",
  //   path: [
  //     "textures/environmentMap/px.png",
  //     "textures/environmentMap/nx.png",
  //     "textures/environmentMap/py.png",
  //     "textures/environmentMap/ny.png",
  //     "textures/environmentMap/pz.png",
  //     "textures/environmentMap/nz.png",
  //   ],
  // },
  // {
  //   name: "trainModel",
  //   type: "gltfModel",
  //   path: "models/Train/untitled.glb",
  // },
  // {
  //   name: "trainInsideModel",
  //   type: "gltfModel",
  //   path: "models/Train/untitled-interior.glb",
  // },
  // {
  //   name: "characterModel",
  //   type: "gltfModel",
  //   path: "models/Character/untitled.glb",
  // },
  {
    name: "click",
    type: "audio",
    path: "sounds/global-click.mp3",
  },
  {
    name: "train",
    type: "audio",
    path: "sounds/intro-train.mp3",
    options: {
      loop: true,
    },
  },
  {
    name: "trainHorn",
    type: "audio",
    path: "sounds/intro-train-horn.mp3",
  },
  {
    name: "tmEnter",
    type: "audio",
    path: "sounds/tm-enter.mp3",
    options: {
      volume: 0.2,
    },
  },
  {
    name: "tmTicket",
    type: "audio",
    path: "sounds/tm-ticket.mp3",
  },
  {
    name: "tmZoomIn",
    type: "audio",
    path: "sounds/tm-zoom-in.mp3",
  },
  {
    name: "tmShowTicket",
    type: "audio",
    path: "sounds/tm-show-ticket.mp3",
    options: {
      volume: 0.4,
    },
  },
  {
    name: "tmDownloadPop",
    type: "audio",
    path: "sounds/tm-download-pop.mp3",
  },
  {
    name: "platformCrowd",
    type: "audio",
    path: "sounds/platform-crowd.mp3",
    options: {
      volume: 0.8,
      loop: true,
    },
  },
  {
    name: "attentionPleaseen",
    type: "audio",
    path: "sounds/attention-please-en.mp3",
  },
  {
    name: "attentionPleasevn",
    type: "audio",
    path: "sounds/attention-please-vn.mp3",
  },
];
