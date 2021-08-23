import React,{ useState } from 'react'
import './style.css'

const UseState = () => {
    const initialData = 15
    const [num, setNum] = useState(initialData)
    return (
        <>
          <div className="card-container">
             <div className="card">
                    <h1>{ num }</h1>
                    <button onClick={() => num < 20 ? setNum(num + 1) : setNum(20)}>Incr</button>
                    <button onClick={() => {num > 0 ? setNum(num - 1) : setNum(0)}}>Decr</button>
             </div>
          </div>
        </>
    )
}

export default UseState
