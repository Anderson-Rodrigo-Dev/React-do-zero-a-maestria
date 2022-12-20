import React, { createContext } from "react";

// 4 - importação de components
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - import state from components
import State from "./components/State";

// 11 - utilizando o contexto
import Context from "./components/Context";

// 9 - type
type textOrNull = string | null;

/* type fixed = "isso" | "ou" | "aquilo"; */

// 10 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = "Anderson";
  const age: number = 28;
  const isWorking: boolean = false;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 9 - type
  const myText: textOrNull = "tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = 2
  mySecondText = "opa";

  // const textandoFixed: fixed = "isso";

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        {!isWorking && <p>Está desempregado!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Rodrigo" />
        <Destructuring
          title="Primeiro Post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo Post"
          content="Mais algum conteúdo"
          commentsQty={6}
          tags={["phyton"]}
          category={Category.PY}
        />
        <State />
        {myText && <p>tem texto na variável</p>}
        {mySecondText && <p>tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
