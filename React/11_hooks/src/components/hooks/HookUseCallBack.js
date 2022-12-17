import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallBack = () => {
  const [counter, setCounter] = useState(0);

  const getItensFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallBack</h2>
      <List getItens={getItensFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallBack;
