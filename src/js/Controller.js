import Conexion from "./Conexion.js";
import Game from "./Game.js";

let numOfpairs = 9;
let descubiertas = 0;

let insConexion = new Conexion();
let insGame = new Game();

insGame.numCards = numOfpairs * 2;

const consulta = async () => {
  for (let i = 0; i < numOfpairs; i++) {
    let numRandom = Math.floor(Math.random() * 1000);
    let objPokemon = await insConexion.getData(`pokemon-form/${numRandom}`);
    insGame.arrayObjPkemon.push(objPokemon);
    insGame.arrayObjPkemon.push(objPokemon);
  }
  insGame.createGame();
  crearalistener();
};

const clickCard = (element) => {
  if (!element.classList.contains("card__girar")) {
    descubiertas = descubiertas + 1;
    element.classList.add("card__girar");
    element.classList.add("active");
    if (descubiertas === 2) {
      setTimeout(() => {
        let activeCards = document.querySelectorAll(".active");
        if (
          activeCards[1].lastChild.lastChild.textContent ==
          activeCards[0].lastChild.lastChild.textContent
        ) {
          descubiertas = 0;
        } else {
          descubiertas = 0;
          activeCards[1].classList.remove("card__girar");
          activeCards[0].classList.remove("card__girar");
        }
        activeCards[1].classList.remove("active");
        activeCards[0].classList.remove("active");

        let allCards = document.querySelectorAll(".card");
        for (let j = 0; j < allCards.length; j++) {
          allCards[j].style.pointerEvents = "initial";
        }
      }, 1000);
      console.log("Desactivar cliks");
      let allCards = document.querySelectorAll(".card");
      for (let j = 0; j < allCards.length; j++) {
        allCards[j].style.pointerEvents = "none";
      }
    }
  }
};

function crearalistener() {
  let cards = document.querySelectorAll(".card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener(
      "click",
      function () {
        clickCard(this);
      },
      false
    );
  }
}

consulta();
