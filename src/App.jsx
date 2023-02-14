import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import MenuModal from './components/menuModal'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col z-0">      
      <MenuModal/>
    </div>
  )
}

export default App
