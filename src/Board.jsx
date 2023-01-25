import '../css/Board.css'
import React, {useState} from "react"

export default function Board (props) {

const [score, setScore]  = useState(0)

    return (
        <div className="board">
            <h1>{props.name}</h1>   
            <div className="score">
                {score}
            </div>
            <div className="button-container">
                <button onClick={()=>{setScore(prev=>prev+1)}}>+1</button>
                <button onClick={()=>{setScore(prev=>prev+2)}}>+2</button>
                <button onClick={()=>{setScore(prev=>prev+3)}}>+3</button>
            </div>
        </div>
    )
}