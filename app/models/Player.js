import { generateId } from "../utils/GenerateId.js";

export class Player {
  constructor(name) {
    this.id = generateId()
    this.name = name;
    this.score = 0;
  }


  get PlayerTemplateCard() {
    return `
      <div class="row">
        <div class="col-md-6">
          <div class="row fs-2">
            <h2 class="col-md-6">${this.name}</h2>
            <div class="col-md-6">
              <spanonclick="app.PlayersController.decreasePlayerScore('${this.id}')">⊖</span>
              <span>${this.score}</span>
              <span onclick="app.PlayersController.increasePlayerScore('${this.id}')">⊕</span>
            </div>
          </div>
        </div>`
    //   <div class="col-md-6">
    //     <div class="row fs-2">
    //       <h2 class="col-md-6">Mick</h2>
    //       <div class="col-md-6">
    //         <span>⊖</span><span>0</span><span>⊕</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>`
  }
}

// Player.js
// get PlayerTemplateCard() {
//   return `
//     <div class="card">
//         <div class="card-body">
//             ${this.name} - ${this.score}
//         </div>
//     </div>`
// }
