class Game {
  numCards;
  arrayObjPkemon = [];

  createGame() {
    // barajar Arreglo
    this.arrayObjPkemon.sort(function () {
      return Math.random() - 0.5;
    });

    //Pintar arreglo
    for (let i = 0; i < this.numCards; i++) {
      let html = `<div class='cardBack'> <img class='cardBack__img' src='./assets/img/tcg-card-back.jpg' alt=''> </div> <div class='cardFront'> <img class='cardFront__img' src='${this.arrayObjPkemon[i].sprites.front_default}' alt=''><p class='cardFront__namePokemon'>${this.arrayObjPkemon[i].pokemon.name}</p></div>`;
      var midiv = document.createElement("div");
      midiv.setAttribute("class", "card");
      midiv.innerHTML = html;
      document.getElementById("panelGame").appendChild(midiv);
    }
  }
}

export default Game;
