import Conexion from "./Conexion.js";
import Game from "./Game.js";

let numOfpairs = 8;

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
  await insGame.createGame();
};

consulta();
