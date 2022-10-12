import { component } from "bidello";
import {
  Mesh,
  DoubleSide,
  MeshLambertMaterial,
  Vector3,
  MeshBasicMaterial,
} from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import Experience from "../Experience";

export default class TrainCabin extends component() {
  init() {
    this._params = {
      // position: { x: 17, y: 15.2, z: -7 },
      position: { x: -122.17, y: -739.95, z: -600.28 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: -0.02, z: 0 },
      mPosition: { x: -112.17, y: -779.95, z: -260.28 },
      mScale: { x: 380, y: 380, z: 380 },
      mRotation: { x: -4.7, y: -3.12, z: -3.18 },
      hPosition: { x: -112.17, y: -779.95, z: -260.28 },
      hScale: { x: 380, y: 380, z: 380 },
      hRotation: { x: -4.7, y: -3.12, z: -3.18 },
    };

    const experience = new Experience();
    const resource = experience.resources.items.trainModel;
    const resourceInt = experience.resources.items.trainInsideModel;

    this._camera = experience.camera;
    this._scene = experience.scene;
    this._debug = experience.debug;

    this.mesh = resource.scene.clone();
    this.mesh.position.set(...Object.values(this._params.position));
    this.mesh.scale.set(...Object.values(this._params.scale));
    this.mesh.rotation.set(...Object.values(this._params.rotation));

    this.mesh.traverse((child) => {
      if (child instanceof Mesh) {
        child.frustumCulled = false;
        child.material.side = DoubleSide;
      }
    });

    const parts = [];
    this.mesh.traverse((child) => {
      if (child.geometry) {
        let cloned = child.geometry.clone();
        cloned.applyMatrix4(child.matrixWorld);
        parts.push(cloned);
      }
    });
    this.mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(parts);
    this.mergedMesh = new Mesh(this.mergedGeometry, new MeshLambertMaterial());
    this.mergedMesh.position.set(...Object.values(this._params.mPosition));
    this.mergedMesh.scale.set(...Object.values(this._params.mScale));
    this.mergedMesh.rotation.set(...Object.values(this._params.mRotation));

    const position = this.mergedGeometry.attributes.position.array;
    const points = [];
    for (let i = 0; i < position.length; i += 3) {
      points.push(new Vector3(position[i], position[i + 1], position[i + 2]));
    }
    const convexGeometry = new ConvexGeometry(points);
    this.convexHull = new Mesh(
      convexGeometry,
      new MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      })
    );
    this.convexHull.position.set(...Object.values(this._params.hPosition));
    this.convexHull.scale.set(...Object.values(this._params.hScale));
    this.convexHull.rotation.set(...Object.values(this._params.hRotation));

    this.meshInside = resourceInt.scene.clone();
    this.meshInside.position.set(...Object.values(this._params.position));
    this.meshInside.scale.set(...Object.values(this._params.scale));
    this.meshInside.rotation.set(...Object.values(this._params.rotation));

    const partsInt = [];
    this.meshInside.traverse((child) => {
      if (child.geometry) {
        let cloned = child.geometry.clone();
        cloned.applyMatrix4(child.matrixWorld);
        partsInt.push(cloned);
      }
    });
    this.mergedGeometryInt =
      BufferGeometryUtils.mergeBufferGeometries(partsInt);
    this.mergedMeshInt = new Mesh(
      this.mergedGeometryInt,
      new MeshLambertMaterial()
    );
    this.mergedMeshInt.position.set(...Object.values(this._params.mPosition));
    this.mergedMeshInt.scale.set(...Object.values(this._params.mScale));
    this.mergedMeshInt.rotation.set(...Object.values(this._params.mRotation));

    const positionInt = this.mergedGeometryInt.attributes.position.array;
    const pointsInt = [];
    for (let i = 0; i < positionInt.length; i += 3) {
      points.push(
        new Vector3(positionInt[i], positionInt[i + 1], positionInt[i + 2])
      );
    }
    const convexGeometryInt = new ConvexGeometry(pointsInt);
    this.convexHullInt = new Mesh(
      convexGeometryInt,
      new MeshBasicMaterial({
        color: "red",
        wireframe: true,
      })
    );
    this.convexHullInt.position.set(...Object.values(this._params.hPosition));
    this.convexHullInt.scale.set(...Object.values(this._params.hScale));
    this.convexHullInt.rotation.set(...Object.values(this._params.hRotation));

    this._scene.add(this.convexHull);
    // this._scene.add(this.mergedMesh);
    this._scene.add(this.mesh);
    // this._scene.add(this.meshInside);
    // this._scene.add(this.mergedMeshInt);
    // this._scene.add(this.convexHullInt);

    this.onDebug();
  }

  onDebug() {
    if (!this._debug.active) return;

    // TweakPane
    const folderDebug = this._debug.pane.addFolder({
      title: "Train Cabin",
      expanded: true,
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
      .addInput(this._params, "mPosition", {
        label: "MPosition",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.mergedMesh.position.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "mScale", {
        label: "MScale",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.mergedMesh.scale.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "mRotation", {
        label: "MRotation",
        x: { min: -Math.PI * 2, max: Math.PI * 2 },
        y: { min: -Math.PI * 2, max: Math.PI * 2 },
        z: { min: -Math.PI * 2, max: Math.PI * 2 },
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.mergedMesh.rotation.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "hPosition", {
        label: "HPosition",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.convexHull.position.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "hScale", {
        label: "HScale",
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.convexHull.scale.set(x, y, z);
      });
    folderDebug
      .addInput(this._params, "hRotation", {
        label: "HRotation",
        x: { min: -Math.PI * 2, max: Math.PI * 2 },
        y: { min: -Math.PI * 2, max: Math.PI * 2 },
        z: { min: -Math.PI * 2, max: Math.PI * 2 },
      })
      .on("change", ({ value }) => {
        const { x, y, z } = value;
        this.convexHull.rotation.set(x, y, z);
      });
  }
}
