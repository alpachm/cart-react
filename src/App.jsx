import './App.css'
import { useState } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'

function App() {

  const [count, setCounter] = useState(0)


  return (
    <div className="App">
      <div className="container">
        <Cart num={count} />
        <Products count={count} setCount={setCounter} />
      </div>
    </div>
  )
}


export default App
