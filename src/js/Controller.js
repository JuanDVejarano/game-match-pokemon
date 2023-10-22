import Conexion from "./Conexion.js";
import Game from "./Game.js";

let numOfpairs = 9;

let insConexion = new Conexion();
let insGame = new Game();

const main = async (paramNumOfpairs) => {
  insGame.arrayObjPkemon = [];
  insGame.numCards = paramNumOfpairs * 2;
  for (let i = 0; i < paramNumOfpairs; i++) {
    let numRandom = Math.floor(Math.random() * 1000);
    let objPokemon = await insConexion.getData(`pokemon-form/${numRandom}`);
    insGame.arrayObjPkemon.push(objPokemon);
    insGame.arrayObjPkemon.push(objPokemon);
  }
  insGame.createTable();
  crearalistener();
};

function crearalistener() {
  let cards = document.querySelectorAll(".card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener(
      "click",
      function () {
        insGame.clickCard(this);
      },
      false
    );
  }
}

const newMain = () => {
  let numCards = document.getElementById("numPokeCards").value;
  main(numCards);
};

document.getElementById("btnNewCards").addEventListener("click", newMain);
main(numOfpairs);