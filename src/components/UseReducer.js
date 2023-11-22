import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState = 0;
    const reducer = (state,action) =>{
        console.log(state, action);
        if(action.type ==='Increment'){
            return state + 1;
        }
        if(action.type ==='Decrement'){
            return state - 1;
        }
        return state;
    }
    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
      <h1>{state}</h1>
      <button onClick = {()=> dispatch({type:'Increment'})}>Increment</button>
      <br></br>
      <button onClick = {()=> dispatch({type:'Decrement'})}>Decrement</button>
    </>
  )
}
