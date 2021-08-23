import React,{ useReducer } from 'react'

const reducer = (state, action)=> {
    if(action.type === "INCR"){
        if(state < 25){
            state = state + 1
        }
       
    }
    if(action.type === "DECR"){
        state = state - 1
    }
    return state
}


const UseReducer = () => {
    const initialData = 20;
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <>
           <div className="card-container">
             <div className="card">
                    <h1>{ state }</h1>
                    <button onClick={() => dispatch({ type : "INCR"})}>INCR</button>
                    <button onClick={() => dispatch({ type : "DECR"})}>DECR</button>
             </div>
          </div>  
        </>
    )
}

export default UseReducer

