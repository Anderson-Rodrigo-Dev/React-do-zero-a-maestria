import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependencias
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de deps. vazio

  useEffect(() => {
    console.log("Serei executado apenas 1x");
  }, []);

  // 3 - item do array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("sou executado apensas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  // 4 - cleanup do useEffect
  useEffect(() => {
    /* const timer = setTimeout(() => {
      console.log("Hello World");
      setAnotherNumber(anotherNumber + 1)
    }, 2000);

    return () => clearTimeout(timer) */
  }, [anotherNumber]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar AnotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
