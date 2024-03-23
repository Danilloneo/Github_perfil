// import { useState } from "react";
import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import MinhaImagem from "./assets/hello.gif";
// import Formulario from "./components/formulario";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  // const nome = 'Danillo';
  // function retornaNome(nome) {
  //   return nome = 'Joana';
  // }

  // const pessoa = {
  //   nome: 'Maria',
  // }

  // let estaDeDia = true;
  
  // const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true);

  return (
      <>
      <center>
        <br></br>
      <input className="input-initial" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite nome de usuario GitHub" />
      </center>
      {nomeUsuario.length > 4 &&(
        <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <center>
      <img className="img-intro" src={MinhaImagem} />
      </center>
      <ReposList nomeUsuario={nomeUsuario} />
      </>
      )}
        
      </> 
      )
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setformularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button> */}
    
      {/* <h1>Olá, {nome}</h1>
      <h2>Subtitulo</h2>
      <h3>Olá, {retornaNome()}</h3>
      <h4>Olá, {pessoa.nome}</h4>
      <h5>{estaDeDia ? 'Bom dia': 'Boa Tarde'}</h5> */}
}

export default App
//A gente pode fazer concatenação sem usar +
//<h3>Olá, {retornaNome()}</h3>

//também podemos acessar atributos de objetos

//usando condicional no html se estaDedia === true se bom dia, : senao boa tarde

// <h5>{estaDeDia === true ? 'Bom dia': 'Boa Tarde'}</h5>

//como usamos o ternario podemos omitir o true

//desta forma tambem esta dedia ? se  : senao 

//tambem podemos fazer o retorno só de expressões verdadeiras

//{estaDedia && 'Bom Dia'}; se estadeDia for true ele vai dar bom dia.

//o ponto e vírgula é opcional. Ele não é obrigatório quando a gente trabalha com react

