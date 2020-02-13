import React from 'react'
import './App.css'
import Game from './components/Game'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Tic Tac Toe
        </h1>
      </header>
      <Game />
    </div>
  )
}

export default App
