import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) // usestate is a HOOK so that it can update value in user interface

  //  let counter  = 5;

  const addValue = () => {
    console.log("clicked", counter)
    // counter +=1;
    if (counter<20) {
        setCounter(counter + 1);
    }
  
  }
 

  const removeValue = () => {
    console.log("clicked , counter", counter) 
    // counter +=1;
    if (counter>0) {
       setCounter(counter - 1);
    }
  
  }


  // hook update the value in ui otherwise it remains the same 


  return (<>
    <h1>chai aur code </h1>
    <h2>counter value : {counter}</h2>
    <button
      onClick={addValue}
    >Add value{counter} </button>
    <br></br>
    <button
      onClick={removeValue}
    >Remove value{counter}</button>
    <p>footer: {counter}</p>


  </>
  )
}

export default App
