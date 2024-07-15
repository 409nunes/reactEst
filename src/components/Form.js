import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log("Cadastrou usuario");
  }
  const [name, setName] = useState("Eduardo");
  return (
    <>
      <h1> Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" placeholder="Digite a sua senha" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}
export default Form;
