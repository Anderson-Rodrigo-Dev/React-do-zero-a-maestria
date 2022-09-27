import "./App.css";
import Car from "./components/Car";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 1000 },
    { id: 3, brand: "Lamborguini", color: "Azul", km: 50000 },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car_container">
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
