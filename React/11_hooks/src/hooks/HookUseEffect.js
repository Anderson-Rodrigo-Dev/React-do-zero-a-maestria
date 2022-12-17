import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - useEffect sem dependencias
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1)
    
    const changeSomething = () => {
        setNumber(number+1)
    }

    // 2 - array de deps. vazio

    useEffect(() => {
      console.log("Serei executado apenas 1x")
    }, [])


  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
