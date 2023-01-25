import '../css/App.css'
import Board from './Board'
import React, {useState} from 'react'

function App(props) {
  
 
  return (
    <div className="app">
      <div className='mainboard'>
        <Board 
        name="HOME"
        
        />
        <Board 
         name="GUEST"
        />
      </div>
    </div>
  )
}

export default App
