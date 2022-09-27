import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>se x for true, sim!</p>}
      {!x && <p>agora x é falso!</p>}
      {name === "João" ? (
        <div>
          <p>O nome é {name}!</p>
        </div>
      ) : (
        <div>
          <p>Agora o nome é {name}</p>
        </div>
      )}
      <button onClick={() => setName('Marcos')}>Clique Aqui</button>
    </div>
  );
};

export default CondicionalRender;
