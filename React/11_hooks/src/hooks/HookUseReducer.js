import { useReducer } from "react";

const HookUseReducer = () => {
  // 1 - começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      <h2>UseReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar Número</button>
    </div>
  );
};

export default HookUseReducer;