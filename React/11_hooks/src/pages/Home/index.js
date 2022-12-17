import React from 'react'
import HookUseEffect from '../../hooks/HookUseEffect'
import HookUseReducer from '../../hooks/HookUseReducer'
import HookUseState from '../../hooks/HookUseState'

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  )
}

export default Home