import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Btn from './components/Btn'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Btn></Btn>
      {/* <Counter></Counter> */}
     
    </>
  )
}

export default App
