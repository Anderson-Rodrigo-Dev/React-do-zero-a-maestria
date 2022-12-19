// 4 - importação de components
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

function App() {
  // 1 - variáveis
  const name: string = "Anderson";
  const age: number = 28;
  const isWorking: boolean = false;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
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
      />
      <Destructuring
        title="Segundo Post"
        content="Mais algum conteúdo"
        commentsQty={6}
        tags={["ts", "js", "react", "github"]}
      />
    </div>
  );
}

export default App;
