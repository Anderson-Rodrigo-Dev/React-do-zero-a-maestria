import React, { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = "João"

    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João Souza"
        setName("Matheus Batisti")
    }

  return (
    <div>
        {/* 1 useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
    </div>
  )
}

export default HookUseState