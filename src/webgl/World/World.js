import Environment from "./Environment.js";
import { component } from "bidello";
import Experience from "@/webgl/Experience";
import TrainCabin from "./TrainCabin.js";
import Player from "./Player.js";
import CannonUtils from "../Utils/CannonUtils.js";
import * as CANNON from "cannon-es";
import {
  Box3,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  // PlaneGeometry,
  TorusKnotGeometry,
  Vector3,
} from "three";

export default class World extends component() {
  init() {
    const experience = new Experience();
    this._debug = experience.debug;
    this._scene = experience.scene;
    this._camera = experience.camera;
  }

  onResourcesIsReady() {
    console.log("world is ready");
    this.environment = new Environment();
    this.trainCabin = new TrainCabin();
    this.player = new Player();

    this.physics();

    this.onDebug();
  }

  physics() {
    this.physicsWorld = new CANNON.World();
    this.physicsWorld.gravity.set(0, -9.82, 0);

    const torusKnotGeometry = new TorusKnotGeometry();
    this.torusKnotMesh = new Mesh(
      torusKnotGeometry,
      new MeshStandardMaterial()
    );
    this.torusKnotMesh.position.copy(this.player.mesh.position);
    this.torusKnotMesh.geometry.scale(64, 64, 64);
    this.torusKnotMesh.castShadow = true;
    // this._scene.add(this.torusKnotMesh);

    // Create a sphere body
    this.sphereBody = new CANNON.Body({
      mass: 5, // kg
      shape: new CANNON.Sphere(10),
    });
    this.sphereBody.position.set(
      this.player.mesh.position.clone().x,
      this.player.mesh.position.clone().y,
      this.player.mesh.position.clone().z
    );
    this.physicsWorld.addBody(this.sphereBody);

    const playerBb = new Box3().expandByObject(this.player.mesh);
    const playerSize = playerBb.getSize(new Vector3());
    const playerShape = new CANNON.Cylinder(
      playerSize.x,
      playerSize.y,
      playerSize.z,
      32
    );
    this.playerBody = new CANNON.Body({ mass: 32, shape: playerShape });
    this.playerBody.position.copy(this.player.mesh.position);
    this.physicsWorld.addBody(this.playerBody);

    // Create a static plane for the ground
    const planeGeometry = new PlaneGeometry(1000, 1000);
    const planeMesh = new Mesh(planeGeometry, new MeshBasicMaterial());
    planeMesh.rotateX(-Math.PI / 2);
    planeMesh.position.x = this.player.mesh.position.clone().x;
    planeMesh.position.y = this.player.mesh.position.clone().y;
    // this._scene.add(planeMesh);
    const groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC, // can also be achieved by setting the mass to 0
      shape: new CANNON.Plane(),
    });
    groundBody.position.set(
      this.player.mesh.position.clone().x,
      this.player.mesh.position.clone().y - playerSize.y * 2,
      this.player.mesh.position.clone().z
    );
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.physicsWorld.addBody(groundBody);

    this.convertConvexHullToTrimesh(
      this.trainCabin.convexHull,
      this.trainCabin.mesh
    );

    // const trainInsideShape = new CannonUtils().CreateTrimesh(
    //   this.trainCabin.mergedGeometryInt
    // );
    // let trainInsideBody = new CANNON.Body({
    //   mass: 1,
    //   shape: trainInsideShape,
    //   allowSleep: true,
    // });
    // trainInsideBody.position.copy(this.trainCabin.mesh.position);
    // trainInsideBody.quaternion.copy(this.trainCabin.mesh.quaternion);
    // this.physicsWorld.addBody(trainInsideBody);
  }

  convertConvexHullToTrimesh(convexHull, mesh) {
    const shape = new CannonUtils().CreateTrimesh(convexHull.geometry);
    let body = new CANNON.Body({ mass: 0, type: CANNON.Body.STATIC });
    body.allowSleep = true;
    body.addShape(shape);
    body.position.copy(mesh.position);
    body.quaternion.copy(mesh.quaternion);
    this.physicsWorld.addBody(body);
  }

  onRaf({ delta }) {
    if (this.physicsWorld) {
      this.physicsWorld.step(delta);

      this.player.mesh.position.copy(this.playerBody.position);
      // this.player.mesh.quaternion.copy(this.playerBody.quaternion);
    }
  }

  onDebug() {
    if (!this._debug.active) return;
  }
}
