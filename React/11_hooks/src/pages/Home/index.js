import React from 'react'
import HookUseEffect from '../../components/hooks/HookUseEffect'
import HookUseReducer from '../../components/hooks/HookUseReducer'
import HookUseState from '../../components/hooks/HookUseState'

//useContext 
import { useContext } from 'react'
import { SomeContext } from '../../components/hooks/HookUseContext'

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
    </div>
  )
}

export default Home