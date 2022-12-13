import React from 'react'
import HookUseReducer from '../../hooks/HookUseReducer'
import HookUseState from '../../hooks/HookUseState'

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
    </div>
  )
}

export default Home