import Conexion from "./Conexion.js";
import Game from "./Game.js";

let numOfpairs = 10;

let insConexion = new Conexion();

const consulta = async () => {
  let objPokemon = await insConexion.getData("pokemon/");
  console.log(objPokemon);
};

console.log(Math.floor(Math.random() * 1000));

consulta();

//let objPokemon = insConexion.getData("pokemon/");
