import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessaState from "./components/ChangeMessaState";
import CondicionalRender from "./components/CondicionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
  const [userName] = useState("Fátima");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 1000 },
    { id: 3, brand: "Lamborguini", color: "Azul", newCar: false, km: 50000 },
  ];

  const usuarios = [
    { id: 1, name: "Anderson", age: 28, job: "Programador" },
    { id: 2, name: "Eduarda", age: 15, job: "Estudante" },
    { id: 3, name: "Marcos", age: 18, job: "Repositor" },
    { id: 4, name: "Felipe", age: 19, job: "Músico" },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={City} alt="cidade" />
      </div>

      <ManageData />

      <ListRender />

      <CondicionalRender />
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={1000000} color="Blue" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={80000} color="Red" newCar={false} />
      <CarDetails brand="Tesla" km={0} color="Black" newCar={true} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
          key={car.id}
        />
      ))}

      {/* Fragments */}
      <Fragments propFragment="teste" />
      {/* Children */}
      <Container myValue="teste">
        <p>E esse é o conteúdo!!!</p>
      </Container>
      <Container myValue="teste 2">
        <h4>Testando de novo!!!</h4>
      </Container>

      {/*Executar Função*/}
      <ExecuteFunction myFunction={showMessage} />
      {/*State lift */}
      <Message msg={message} />
      <ChangeMessaState handleMessage={handleMessage} />

      {/*Desafio 4 */}
      {usuarios.map((user) => (
        <UserDetails
          name={user.name}
          age={user.age}
          job={user.job}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default App;
