import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TAILWIND TEST</h1>
      <Card userName="TUSHAR RAWAT" img="https://images.pexels.com/photos/18515836/pexels-photo-18515836/free-photo-of-portrait-of-a-starling-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card userName="HITESH KUMAR" status="EXPERT" img="https://images.pexels.com/photos/15776823/pexels-photo-15776823/free-photo-of-seagull-flying-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </>
  )
}

export default App
