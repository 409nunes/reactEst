import "./App.css";
/*
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";
*/
import List from "./components/List";
import Form from "./components/Form";

function App() {
  /*
  const name = "Eduardo";
  const newName = name.toUpperCase();

  const nome = "Maria";

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";
  */
  return (
    <div className="App">
      <Form />
      <List />
    </div>

    /*
  return (
    <div className="App">
      <Form></Form>
      
      <h1>Teste Evento</h1>
      <Evento numero="1"></Evento>
      <Evento numero="2"></Evento>

      <Frase></Frase>
      <SayMyName nome="Eduardo"></SayMyName>
      <SayMyName nome="Gaby"></SayMyName>
      <SayMyName nome={nome}></SayMyName>
      <Pessoa
        nome="Eduardo"
        idade="35"
        profissao="Programador"
        foto="https://github.com/409nunes.png"
      />

      <h2>Alterando o JSX {name}</h2>
      <HelloWorld></HelloWorld>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 3)}</p>
      <img src={url} alt="Minha Imagem"></img>

      <List></List>
    </div>
    */
  );
}

export default App;
