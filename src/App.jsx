import { useEffect, useReducer, useState } from 'react'
import './App.css'

function App() {


  const actions = {
    increase : {type : 'INCREASE'},
    decrease : {type : 'DECREASE'},
    reset : {type : 'RESET'}
  }

  const initialState = {count: 0}

  const reducer = (state , action)=>{
    switch (action.type) {
      case 'INCREASE':{
        const newState = {...state}
        newState.count += 1
        return newState
      }
      case 'DECREASE':{
        const newState = {...state}
        newState.count -= 1
        return newState
      }
      case 'RESET':{
        const newState = {...state}
        newState.count = 0
        return newState
      }
      default:
        return state
    }
  }

  const [state , dispatch] = useReducer(reducer , initialState)

  let [h1Class , setH1Class] = useState('white')

  useEffect( ()=>{
    if(state.count > 0){
      setH1Class('green')
    }
    else if(state.count == 0){
      setH1Class('white')
    }
    else{
      setH1Class('orange')
    }
  } , )

  return (
      <>
        <div className="counterContainer">
          <h1 className={`display ${h1Class}`}>{state.count}</h1>
          <div className="btn">
            <button onClick={()=>dispatch(actions.increase)}>+</button>
            <button onClick={()=>dispatch(actions.reset)}>reset</button>
            <button onClick={()=>dispatch(actions.decrease)}>-</button>
          </div>
        </div>
      </>
  )
}

export default App
