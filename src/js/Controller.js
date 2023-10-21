import Conexion from "./Conexion.js";

let insConexion = new Conexion();

const consulta = async () => {
  let objPokemon = await insConexion.getData("pokemon/");
  console.log(objPokemon);
};

consulta();

//let objPokemon = insConexion.getData("pokemon/");
