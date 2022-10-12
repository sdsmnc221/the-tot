import { Mesh, Scene } from "three";

import Debug from "./Utils/Debug.js";
import Viewport from "./Utils/Viewport.js";
import Raf from "./Utils/Raf.js";
import Camera from "./Camera.js";
import DebugCamera from "./DebugCamera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Resources from "./Utils/Resources.js";

import sources from "./sources";
import settings from "./settings";
import Controls from "./Controls";
import PostProcessing from "@/webgl/PostProcessing";
import { component } from "bidello";

let instance = null;

/**
 * Never extends bidello here, because it's Singleton Class
 */
export default class Experience extends component() {
  constructor(_canvas) {
    super();

    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    // Global access
    window.experience = this;

    // Options
    this.canvas = _canvas;
    this.settings = settings;

    this._params = {
      useDebugCamera: false,
    };

    // Setup
    this.debug = new Debug();
    this.viewport = new Viewport();
    this.raf = new Raf();
    this.controls = new Controls();
    this.scene = new Scene();
    this.resources = new Resources(sources);
    this.availableCameras = {
      simple: new Camera(),
      debug: new DebugCamera(),
    };
    this.camera = this._params.useDebugCamera
      ? this.availableCameras.debug
      : this.availableCameras.simple;
    this.renderer = new Renderer(this.canvas);
    this.world = new World();
    this.composer = new PostProcessing(this.renderer);

    this.onDebug();
  }

  onRaf() {}

  onDebug() {
    if (!this.debug.active) return;

    // TweakPane
    const folderDebug = this.debug.pane.addFolder({
      title: "Experience",
      expanded: true,
    });
    folderDebug
      .addInput(this._params, "useDebugCamera", {
        label: "Use Debug Camera",
      })
      .on("change", ({ value: doDebug }) => {
        this.camera = doDebug
          ? this.availableCameras.debug
          : this.availableCameras.simple;
      });
  }

  destroy() {
    // Traverse the whole scene
    this.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });

    this.renderer.dispose();

    if (this.debug.active) {
      this.camera.controls.dispose();
      this.debug.pane.dispose();
    }
  }
}
