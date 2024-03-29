import ComponentEvents from './ComponentEvents';
import { getScene } from '../utils/Utils';
import Phaser from 'phaser';
export default abstract class BaseComponent {
  // ==============================================================================================
  // properties
  // ==============================================================================================
  private _events = new Phaser.Events.EventEmitter();

  // ==============================================================================================
  // public
  // ==============================================================================================
  
  // ----------------------------------------------------------------------------------------------
  constructor(gameObject?: Phaser.GameObjects.GameObject) {
    this._events = new Phaser.Events.EventEmitter();
  }

  // ----------------------------------------------------------------------------------------------
  destroy(fromGameObject = false): void {
    this._events.emit(ComponentEvents.DESTROY, this);
    this._events.destroy();
  }

  // ----------------------------------------------------------------------------------------------
  get events(): Phaser.Events.EventEmitter {
    return (this._events);
  }

  // ----------------------------------------------------------------------------------------------
  abstract getGameObject(): Phaser.GameObjects.GameObject;

  // ----------------------------------------------------------------------------------------------
  get scene(): Phaser.Scene {
    return (getScene(this.getGameObject()));
  }
}