import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div>
<button onClick={()=> {setCount(count+1)}}> Increase
</button>
<div>
{count}
</div>
<button onClick={()=> {setCount(count-1)}}> Decrease
</button>
</div>
     
    </>
  )
}

export default App
