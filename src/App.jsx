import '../css/App.css'
import Board from './Board'


function App() {
  
 
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
