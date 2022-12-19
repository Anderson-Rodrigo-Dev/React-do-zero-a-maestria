import { useEffect, useLayoutEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum Nome 0");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo! 2");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome 1");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
