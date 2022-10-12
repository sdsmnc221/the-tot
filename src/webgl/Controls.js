import nipplejs from "nipplejs";
import { Vector2 } from "three";
export default class Controls {
  constructor() {
    this._setActions();
    this._setKeyboard();
    this._setJoystick();
  }

  _setActions() {
    this.actions = {};
    this.actions.up = false;
    this.actions.right = false;
    this.actions.down = false;
    this.actions.left = false;
  }

  get isPressed() {
    return !Object.values(this.actions).every((value) => value === false);
  }

  _setKeyboard() {
    this.keyboard = {};
    this.keyboard.events = {};

    this.keyboard.events.keyDown = (_event) => {
      switch (_event.key) {
        case "ArrowUp":
        case "z":
        case "w":
          this.actions.up = true;
          break;

        case "ArrowRight":
        case "d":
          this.actions.right = true;
          break;

        case "ArrowDown":
        case "s":
          this.actions.down = true;
          break;

        case "ArrowLeft":
        case "q":
        case "a":
          this.actions.left = true;
          break;
      }
    };

    this.keyboard.events.keyUp = (_event) => {
      switch (_event.key) {
        case "ArrowUp":
        case "z":
        case "w":
          this.actions.up = false;
          break;

        case "ArrowRight":
        case "d":
          this.actions.right = false;
          break;

        case "ArrowDown":
        case "s":
          this.actions.down = false;
          break;

        case "ArrowLeft":
        case "q":
        case "a":
          this.actions.left = false;
          break;
      }
    };

    document.addEventListener("keydown", this.keyboard.events.keyDown);
    document.addEventListener("keyup", this.keyboard.events.keyUp);
  }

  _setJoystick() {
    this.joystick = nipplejs.create({
      zone: document.querySelector("#app"),
      color: "white",
      size: 96,
      threshold: 3.2, // before triggering a directional event
      fadeTime: 0.32, // transition time
      multitouch: true,
      maxNumberOfNipples: 2, // when multitouch, what is too many?
      mode: "dynamic", // 'dynamic', 'static' or 'semi'
      restJoystick: true, // Re-center joystick on rest state
      restOpacity: 0.32, // opacity when not 'dynamic' and rested
      shape: "circle", // 'circle' or 'square'
      dynamicPage: true, // Enable if the page has dynamically visible elements
      follow: false, // Makes the joystick follow the thumbstick
    });

    this.joystick.on("move", this._controllerMove.bind(this), false);
    this.joystick.on("end", this._controllerEnd.bind(this), false);

    this._vectorControls = new Vector2();
  }

  _controllerMove(e, data) {
    this._vectorControls = new Vector2(data.vector.x, data.vector.y);
    this._isPressed = 1;
  }

  _controllerEnd() {
    this._vectorControls = new Vector2();
    this._isPressed = 0;
  }

  destroy() {
    document.removeEventListener("keydown", this.keyboard.events.keyDown);
    document.removeEventListener("keyup", this.keyboard.events.keyUp);
  }
}
