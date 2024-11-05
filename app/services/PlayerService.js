import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
  addPlayer(playerName) {
    const newPlayer = new Player(playerName)
    AppState.players.push(newPlayer)
  }

}

export const playersService = new PlayerService()