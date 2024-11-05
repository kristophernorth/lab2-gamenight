import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayerService.js";



export class PlayersController {
  constructor() {
    this.drawPlayers()
  }


  drawPlayers() {
    const players = AppState.players
    let playerContent = ''
    players.forEach(player => playerTemplateCard += player.PlayerTemplateCard)
    const playerListElm = document.getElementById('playerList')
    playerListElm.innerHTML = playerListHTML
  }
}
