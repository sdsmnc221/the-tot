import { TextureLoader, CubeTextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import bidello from "bidello";
import { Howl } from "howler";

const resourcesIsReady = new CustomEvent("resourcesIsReady");

export default class Resources {
  constructor(sources, store) {
    this.store = store;
    this.sources = sources;

    this.items = {};
    this.audios = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("draco/");
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    this.loaders.textureLoader = new TextureLoader();
    this.loaders.cubeTextureLoader = new CubeTextureLoader();
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "audio") {
        const file = new Howl({
          src: [source.path],
          ...source.options,
          onload: () => {
            this.audios[source.name] = file;
            this.sourceLoaded(source, file);
          },
        });
      }
    }
  }

  sourceLoaded(source, file) {
    if (source.options && source.type === "texture") {
      for (const [key, value] of Object.entries(source.options)) {
        file[key] = value;
      }
    }

    this.items[source.name] = file;

    this.loaded++;

    this.store.commit("percentLoaded", { percent: this.progressRatio });

    if (this.loaded === this.toLoad) {
      bidello.trigger({ name: "resourcesIsReady" });
      window.dispatchEvent(resourcesIsReady);
      setTimeout(() => this.store.commit("endLoading"), 2400);
    }
  }

  get progressRatio() {
    return this.loaded / this.toLoad;
  }
}
