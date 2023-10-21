//import fetch from "node-fetch";

class Conexion {
  urlApi = "https://pokeapi.co/api/v2/";
  async getData(url) {
    let response = await fetch(`${this.urlApi}${url}`);
    const data = await response.json();
    return data;
  }
}

export default Conexion;
