import axios from "axios";  //Importa a biblioteca axios, que é usada para fazer requisições HTTP. 

//Cria uma instância do axios, chamada "api"
const Api = axios.create({
    baseURL: "http://localhost:5000" //Define a URL base para todas as requisições feitas com essa instância.
})
export default Api;
