import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("Clicked And Added ", counter)
  }

  // const addValue = () => {
  //   counter = counter + 1
  //    setCounter(counter)
  // setCounter(counter)
  // setCounter(counter)                   //if we use setCounter multiple times then then value will increase by one only because data render in form of batchs
  // setCounter(counter)
  //   console.log("Clicked And Added ", counter)
  // }

  // const addValue = () => {

  //   setCounter(prevCounter=>prevCounter+1)
  //   setCounter(prevCounter=>prevCounter+1)
  //   setCounter(prevCounter=>prevCounter+1)
  //   setCounter(prevCounter=>prevCounter+1)
  //   setCounter(prevCounter=>prevCounter+1)      //now it increase by 5
  //   console.log("Clicked And Added ", counter)
  // }
  const decreaseValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
      console.log("value Decreases ", counter)
    } else {
      console.log(error)
    }

  }
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={decreaseValue}>Remove Value</button>
    </>
  )
}

export default App
