import Conexion from "./Conexion.js";
import Game from "./Game.js";

let numOfpairs = 5;

let insConexion = new Conexion();

insConexion.numCards = numOfpairs * 2;

const consulta = async () => {
  let numRandom = Math.floor(Math.random() * 1000);
  for (let i = 0; i < insConexion.numCards; i++) {
    let objPokemon = await insConexion.getData(`pokemon/${numRandom}`);
    console.log(objPokemon);
  }
};

console.log(Math.floor(Math.random() * 1000));

consulta();

//let objPokemon = insConexion.getData("pokemon/");
