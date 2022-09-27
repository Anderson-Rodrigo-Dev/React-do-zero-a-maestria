import React from "react";

const ChangeMessaState = ({ handleMessage }) => {
  const messages = ["oi", "olá", "oi, tudo bom?"];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  );
};

export default ChangeMessaState;
