import {useNavigate} from "react-router-dom"
//import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss"
import Api from "../../services/Api"
import { useState } from "react";

function Login() {

const navigate = useNavigate() //Iniciando o hook useNavigate

const irParaReembolsos = () => {
  navigate("/reembolsos")  //Redirecionando para a página de reembolsos
}
const [email,setEmail] = useState("")
const [senha,setSenha] = useState("")

const fazerLogin = async (e) => {
  e.preventDefault()

  try{

    const resposta = await Api.post("/colaborador/login", {
      "email": email,
      "senha": senha
    })
    console.log(resposta.data)
    alert("Login realizado cfom sucesso!")
    irParaReembolsos()

  }catch(error){
    console.log("Erro ao fazer login", error)
    alert("Erro no login aqui ó")
  }

}

  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerFoto}>
        {/* <img src={Capa} alt="Foto de um navio cargueiro" /> */}
      </section>

      <section className={styles.formWapper}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR </h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="Email" 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={senha}
            onChange={(e)=> setSenha(e.target.value)}
          />

          <p>Esqueci minha senha</p>

          <div className={styles.boxButton}>
            <button onClick={fazerLogin}>Entrar</button>
            <button>Criar conta</button>
          </div>

        </form>
      </section>
    </main>
  );
}
export default Login;
