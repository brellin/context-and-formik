import React, { createContext, useState } from 'react'

import Div from './Components/Div'
import './App.scss'

export const Themes = createContext()

function App() {

  const [color, setColor] = useState('black')

  return <div className="wrapper">
    <header>
      <h1>Context</h1>
    </header>

    <Themes.Provider value={color}>
      <Div color={color} setColor={setColor} />
    </Themes.Provider>
  </div>

}

export default App
