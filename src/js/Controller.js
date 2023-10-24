import Conexion from "./Conexion.js";
import Game from "./Game.js";

let numOfpairs = 9;

let insConexion = new Conexion();
let insGame = new Game();
let loader = document.getElementById("idLoader");

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
  loader.classList.remove("loader--show");
}

const newMain = () => {
  loader.classList.add("loader--show");
  let numCards = document.getElementById("numPokeCards").value;
  main(numCards);
};

const reload = () => {
  newMain();
  insGame.winner();
};

document.getElementById("btnNewCards").addEventListener("click", newMain);
document.getElementById("btnReload").addEventListener("click", reload);
main(numOfpairs);
