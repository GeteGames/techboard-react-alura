import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

// no react, componentes são FUNÇÕES

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência articial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner></Banner>
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]}></Tema>
      </section>
      <section>
        <Tema tema={temas[1]}></Tema>
      </section>
      <section>
        <Tema tema={temas[2]}></Tema>
      </section>
      <section>
        <Tema tema={temas[3]}></Tema>
      </section>
      <section>
        <Tema tema={temas[4]}></Tema>
        <section>
          <Tema tema={temas[5]}></Tema>
        </section>
      </section>
    </main>
  );
}

export default App;
