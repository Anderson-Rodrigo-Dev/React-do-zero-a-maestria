import React from "react";

// useContext
import { useContext } from "react";
import { SomeContext } from "../../components/hooks/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>About</h1>
      <p>Valor do context: {contextValue}</p>
    </div>
  );
};

export default About;
