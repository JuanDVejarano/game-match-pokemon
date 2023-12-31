class Game {
  numCards;
  arrayObjPkemon = [];
  descubiertas = 0;
  successes = 0;

  createTable() {
    this.deleteTable();
    this.barajarArray();
    //Pintar arreglo
    for (let i = 0; i < this.numCards; i++) {
      let html = `<div class='cardBack'> <img class='cardBack__img' src='./assets/img/tcg-card-back.jpg' alt=''> </div> <div class='cardFront'> <img class='cardFront__img' src='${this.arrayObjPkemon[i].sprites.front_default}' alt=''><p class='cardFront__namePokemon'>${this.arrayObjPkemon[i].pokemon.name}</p></div>`;
      var myItem = document.createElement("li");
      myItem.setAttribute("class", "card");
      myItem.innerHTML = html;
      document.getElementById("panelGame").appendChild(myItem);
    }
  }

  // barajar Arreglo
  barajarArray() {
    this.arrayObjPkemon.sort(function () {
      return Math.random() - 0.5;
    });
  }

  deleteTable() {
    this.successes = 0;
    this.fnSuccesses();
    const element = document.getElementById("panelGame");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  clickCard = (element) => {
    if (!element.classList.contains("card__girar")) {
      this.descubiertas = this.descubiertas + 1;
      element.classList.add("card__girar");
      element.classList.add("active");
      if (this.descubiertas === 2) {
        setTimeout(() => {
          let activeCards = document.querySelectorAll(".active");
          if (
            activeCards[1].lastChild.lastChild.textContent ==
            activeCards[0].lastChild.lastChild.textContent
          ) {
            this.descubiertas = 0;
            this.successes = this.successes + 1;
            this.fnSuccesses();
          } else {
            this.descubiertas = 0;
            activeCards[1].classList.remove("card__girar");
            activeCards[0].classList.remove("card__girar");
          }
          activeCards[1].classList.remove("active");
          activeCards[0].classList.remove("active");

          let allCards = document.querySelectorAll(".card");
          for (let j = 0; j < allCards.length; j++) {
            allCards[j].style.pointerEvents = "initial";
          }
          if (this.successes == this.numCards / 2) {
            this.winner();
          }
        }, 1000);
        let allCards = document.querySelectorAll(".card");
        for (let j = 0; j < allCards.length; j++) {
          allCards[j].style.pointerEvents = "none";
        }
      }
    }
  };

  fnSuccesses() {
    let p = document.getElementById("numAnswers");
    p.innerHTML = this.successes;
  }

  winner() {
    let modal = document.getElementById("modalWinner");
    modal.classList.toggle("modal--show");
  }
}

export default Game;
