//useContext
import { useContext } from "react";
import { SomeContext } from "../../components/hooks/HookUseContext";

import HookUseEffect from "../../components/hooks/HookUseEffect";
import HookUseReducer from "../../components/hooks/HookUseReducer";
import HookUseState from "../../components/hooks/HookUseState";
import HookUseRef from "../../components/hooks/HookUseRef";
import HookUseCallBack from "../../components/hooks/HookUseCallBack";
import HookUseMemo from "../../components/hooks/HookUseMemo";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <HookUseRef />
      <HookUseCallBack />
      <HookUseMemo />
    </div>
  );
};

export default Home;
