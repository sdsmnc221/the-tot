import { component } from "bidello";
import { Quaternion, Vector2, Vector3, LoopOnce, LoopRepeat } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import Animation from "../Animation";
import Experience from "../Experience";

export default class Player extends component() {
  init() {
    const experience = new Experience();
    this._debug = experience.debug;
    this._controls = experience.controls;
    this._scene = experience.scene;
    this._camera = experience.camera;
    this._world = experience.world;
    this.charaResource = experience.resources.items.characterModel;

    this._params = {
      position: { x: -487, y: -1092.0, z: -397 },
      scale: { x: 100, y: 100, z: 100 },
      rotation: { x: 0, y: 0, z: 0 },
      camOffset: { x: 651.46, y: 203.94, z: 295.37 },
    };
    this._vectorControls = new Vector2();
    this._speedRun = 2;
    this._speedMove = 100;
    this._targetQuaternion = new Quaternion();
    this._speedRotation = 10;
    this._debugRunning = false;
    this._cameraLerpAmount = 3.2;

    this._initModel();
    this._initAnimation();

    this.onDebug();
  }

  set vectorControls(value) {
    this._vectorControls.x = value.x;
    this._vectorControls.y = value.y;
  }

  _initModel() {
    this.mesh = clone(this.charaResource.scene);
    this._scene.add(this.mesh);

    this.mesh.position.set(...Object.values(this._params.position));
    this.mesh.scale.set(...Object.values(this._params.scale));
    this.mesh.rotation.set(...Object.values(this._params.rotation));

    const parts = [];
    this.mesh.traverse((child) => {
      if (child.geometry) {
        let cloned = child.geometry.clone();
        cloned.applyMatrix4(child.matrixWorld);
        parts.push(cloned);
      }
    });
    this.mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(parts);
  }

  _initAnimation() {
    this.animation = new Animation(this.mesh, this.charaResource.animations);

    this.animation.addAction("idle", "idle");
    this.animation.addAction("walk", "walk");

    this.animation.actions.idle.setLoop(LoopOnce);
    this.animation.actions.idle.clampWhenFinished = true;
    this.animation.actions.walk.setLoop(LoopOnce);
    this.animation.actions.walk.clampWhenFinished = true;

    this.animation.actions.current = this.animation.actions.idle;
    this.animation.play("idle");
    this.mesh.children[1].visible = true;
    this.mesh.children[0].visible = false;
  }

  _keyboard() {
    if (!this._debug.active) return;

    const vectorControls = this._vectorControls;

    if (this._controls.actions.up && this._controls.actions.down)
      vectorControls.y = 0;
    else if (this._controls.actions.up) vectorControls.y = 1;
    else if (this._controls.actions.down) vectorControls.y = -1;
    else vectorControls.y = 0;

    if (this._controls.actions.right && this._controls.actions.left)
      vectorControls.x = 0;
    else if (this._controls.actions.right) vectorControls.x = 1;
    else if (this._controls.actions.left) vectorControls.x = -1;
    else vectorControls.x = 0;
  }

  _joystick() {
    if (!this._debug.active) return;
    const { x, y } = this._controls._vectorControls;
    this._vectorControls.x = x;
    this._vectorControls.y = y;
  }

  get isMoving() {
    return this._vectorControls.x !== 0 || this._vectorControls.y !== 0;
  }

  get isRunning() {
    return this._vectorControls.length() > (this._debug.active ? 1 : 0.5);
  }

  _move(delta) {
    if (this.isMoving) {
      const boostRun =
        this.isRunning || this._debugRunning ? this._speedRun : 1;
      this._world.playerBody.position.z =
        this._world.playerBody.position.z -
        this._vectorControls.y * delta * this._speedMove * boostRun;
      this._world.playerBody.position.x =
        this._world.playerBody.position.x +
        this._vectorControls.x * delta * this._speedMove * boostRun;
    }
  }

  _rotation(delta) {
    if (this.isMoving)
      this._targetQuaternion.setFromAxisAngle(
        new Vector3(0, 1, 0),
        new Vector2(-this._vectorControls.y, this._vectorControls.x).angle()
      );

    if (this.mesh && !this.mesh.quaternion.equals(this._targetQuaternion)) {
      const step = this._speedRotation * delta;
      this.mesh.quaternion.rotateTowards(this._targetQuaternion, step);
    }
  }

  _followCamera() {
    this.offset = new Vector3(
      this.mesh.position.x + this._params.camOffset.x,
      this.mesh.position.y + this._params.camOffset.y,
      this.mesh.position.z + this._params.camOffset.z
    );
    this._camera.position.lerp(this.offset, 0.32);
    this._camera.lookAt(this.mesh.position);
  }

  onRaf({ delta }) {
    this._keyboard();
    this._joystick();
    this._move(delta);
    this._rotation(delta);
    this._followCamera();

    if (this.mesh) {
      if (!this.isMoving) {
        if (!this.animation.isCurrent("idle")) {
          this.animation.play("idle");
          this.mesh.children[1].visible = true;
          this.mesh.children[0].visible = false;
        }
      } else if (!this.animation.isCurrent("walk")) {
        this.animation.play("walk");
        this.animation.actions.current.setLoop(LoopRepeat, Infinity);
        this.mesh.children[0].visible = true;
        this.mesh.children[1].visible = false;

        // if (this.isRunning || this._debugRunning)
        //   this.animation.actions.current.setEffectiveTimeScale(3.2);
        // else this.animation.actions.current.setEffectiveTimeScale(1.0);
      }
    }
  }

  onDebug() {
    if (!this._debug.active) return;

    const folderDebug = this._debug.pane.addFolder({
      title: "Player",
      expanded: false,
    });

    folderDebug.addInput(this, "_debugRunning", {
      label: "Run",
    });
    folderDebug.addInput(this, "_speedMove", {
      label: "Speed Move",
      step: 10,
      min: 0,
      max: 100,
    });
    folderDebug.addInput(this, "_speedRun", {
      label: "Speed Run",
      step: 0.01,
      min: 0,
      max: 20,
    });
    folderDebug.addInput(this, "_speedRotation", {
      label: "Speed Rotation",
      step: 0.01,
      min: 0,
      max: 30,
    });
    folderDebug
      .addInput(this._params, "position", {
        label: "Position",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.mesh.position.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "scale", {
        label: "Scale",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.mesh.scale.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "rotation", {
        label: "Rotation",
        x: { min: -Math.PI * 2, max: Math.PI * 2 },
        y: { min: -Math.PI * 2, max: Math.PI * 2 },
        z: { min: -Math.PI * 2, max: Math.PI * 2 },
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.mesh.rotation.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "camOffset", {
        label: "Camera Offset",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.offset = new Vector3(
          this.mesh.position.x + x,
          this.mesh.position.y + y,
          this.mesh.position.z + z
        );
      });
  }
}
