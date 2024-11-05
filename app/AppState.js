import { Player } from './models/Player.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  players = [
    new Player('Jake'),
    new Player('Mick'),
    new Player('Kris'),
    new Player('Jack')
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())