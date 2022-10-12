import { PerspectiveCamera } from "three";
import Experience from "./Experience.js";
import { component } from "bidello";

export default class Camera extends component(PerspectiveCamera) {
  constructor() {
    super(48, window.innerWidth / window.innerHeight, 0.1, 10000);
  }

  init() {
    const experience = new Experience();
    this._scene = experience.scene;
    this._debug = experience.debug;
    this._canvas = experience.canvas;

    this.position.set(-5.97, -712, -101.44);
    this.rotation.set(0, 0.93, 0);

    this.layers.enable(0);
    this.layers.enable(1);

    this._scene.add(this);

    this.onDebug();
  }

  onResize({ ratio }) {
    this.aspect = ratio;
    this.updateProjectionMatrix();
  }

  onDebug() {
    if (!this._debug.active) return;

    const configDebug = {
      cameraPosition: this.position,
      cameraRotation: this.rotation,
    };

    // TweakPane
    const folderDebug = this._debug.pane.addFolder({
      title: "Camera",
      expanded: false,
    });
    folderDebug.addInput(configDebug, "cameraPosition", {
      label: "position",
    });
    folderDebug.addInput(configDebug, "cameraRotation", {
      label: "rotation",
    });
  }

  onRaf() {
    if (!this._debug.active) return;
  }
}
