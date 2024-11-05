// import { HomeController } from './controllers/HomeController.js';
import { PlayersController } from './controllers/PlayerController.js';
const USE_ROUTER = false

class App {

  PlayersController = new PlayersController

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
