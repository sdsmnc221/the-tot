import {
  AmbientLight,
  Color,
  DirectionalLight,
  DirectionalLightHelper,
  sRGBEncoding,
} from "three";
import Experience from "../Experience.js";

export default class Environment {
  constructor() {
    const experience = new Experience();
    this._debug = experience.debug;
    this._scene = experience.scene;

    this._params = {
      sunLight: {
        color: "#943333",
        intensity: 16,
      },
      ambientLight: {
        color: "#c46c86",
      },
    };

    this._initSunLight();

    // Skybox
    const environmentMapTexture =
      experience.resources.items.environmentMapTexture;
    environmentMapTexture.encoding = sRGBEncoding;
    this._scene.background = environmentMapTexture;

    this.onDebug();
  }

  _initSunLight() {
    this.sunLight = new DirectionalLight(
      this._params.sunLight.color,
      this._params.sunLight.intensity
    );
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 50;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(27.9, 0.6, -4.9);
    this.sunLight.rotation.y = 3.8;
    this._scene.add(this.sunLight);

    this.ambientLight = new AmbientLight(this._params.ambientLight.color);
    this._scene.add(this.ambientLight);
  }

  onDebug() {
    if (!this._debug.active) return;

    const helper = new DirectionalLightHelper(this.sunLight, 10);
    this._scene.add(helper);
    helper.visible = false;

    const configDebug = {
      environmentSunVisible: this.sunLight.visible,
      environmentSunColor: this._params.sunLight.color,
      environmentSunIntensity: this.sunLight.intensity,
      environmentSunPosition: this.sunLight.position,
      environmentSunRotation: this.sunLight.rotation,
      environmentSunHelperVisible: helper.visible,
      environmentAmbientVisible: this.ambientLight.visible,
      environmentAmbientColor: this._params.ambientLight.color,
    };

    // TweakPane
    const folderDebug = this._debug.pane.addFolder({
      title: "Environment",
      expanded: false,
    });
    const folderSun = folderDebug.addFolder({
      title: "Directional Light / Sun",
      expanded: false,
    });
    folderSun
      .addInput(configDebug, "environmentSunVisible", {
        label: "active",
      })
      .on("change", ({ value }) => {
        this.sunLight.visible = value;
      });
    folderSun
      .addInput(configDebug, "environmentSunColor", {
        label: "Color",
      })
      .on("change", ({ value }) => {
        this.sunLight.color = new Color(value);
      });
    folderSun
      .addInput(configDebug, "environmentSunIntensity", {
        label: "Intensity",
        step: 0.001,
        min: 0,
        max: 100,
      })
      .on("change", ({ value }) => {
        this.sunLight.intensity = value;
      });
    folderSun.addInput(configDebug, "environmentSunPosition", {
      label: "position",
    });
    folderSun.addInput(configDebug, "environmentSunRotation", {
      label: "rotation",
    });
    folderSun
      .addInput(configDebug, "environmentSunHelperVisible", {
        label: "helper",
      })
      .on("change", ({ value }) => {
        helper.visible = value;
      });
    const folderAmbient = folderDebug.addFolder({
      title: "Ambient Light",
      expanded: false,
    });
    folderAmbient
      .addInput(configDebug, "environmentAmbientVisible", {
        label: "active",
      })
      .on("change", ({ value }) => {
        this.ambientLight.visible = value;
      });
    folderAmbient
      .addInput(configDebug, "environmentAmbientColor", {
        label: "Color",
      })
      .on("change", ({ value }) => {
        this.ambientLight.color = new Color(value);
      });
  }
}
