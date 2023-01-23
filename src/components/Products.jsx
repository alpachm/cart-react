import React from 'react'
import { useState } from 'react'
import First from './First'
import Fourth from './Fourth'
import './products.css'
import Recycle from './Recycle'
import Second from './Second'
import Third from './Third'


const Products = ({ count, setCount }) => {

  // ---------------------USESTATE 

  const [color, setColor] = useState('#FFC107')
  const [color2, setColor2] = useState('#FFC107')
  const [color3, setColor3] = useState('#FFC107')
  const [color4, setColor4] = useState('#FFC107')

  const [first, setFirst] = useState('ZERO')
  const [display, setDisplay] = useState('flex')

  const [second, setSecond] = useState('ZERO')
  const [display2, setDisplay2] = useState('flex')

  const [third, setThird] = useState('ZERO')
  const [display3, setDisplay3] = useState('flex')

  const [fourth, setFourth] = useState('ZERO')
  const [display4, setDisplay4] = useState('flex')

  // --------------------FUNCIONES

  const suma = (num, setNum, setCol) => {
    num === 'ZERO' ? setNum(1)
      : setNum(num + 1)
    sumCart(num)
    if (num === 'ZERO') setCol('#007bff')
  }

  const resta = (num, setNum, setCol) => {
    num === 'ZERO' ? num === 'ZERO'
      : num === 1 ? setNum('ZERO')
        : setNum(num - 1)
    restCart(num)
    if (num === 1) setCol('#FFC107')
  }

  const reset = (numSet) => {
    const alert = confirm('¿Esta seguro de eliminar este elemento?')

    if (!alert) return

    numSet('none')
    if (count !== 0) setCount(count - 1)
  }

  const sumCart = (num) => {
    if (num !== 'ZERO') return
    if (num === 'ZERO' && count === 0) setCount(1)
    else setCount(count + 1)
  }

  const restCart = (num) => {
    if (num === 1) setCount(count - 1)
  }

  const allReset = (setCol) => {
    setFirst('ZERO')
    setSecond('ZERO')
    setThird('ZERO')
    setFourth('ZERO')
    setCount(0)
    setColor('#FFC107')
    setColor2('#FFC107')
    setColor3('#FFC107')
    setColor4('#FFC107')
  }

  return (
    <div className='products'>
      <div className="items">
        <Recycle fun={allReset} />
        <First color={color} num={first} disp={display} sum={() => suma(first, setFirst, setColor)} rest={() => resta(first, setFirst, setColor)} reset={() => reset(setDisplay)} />
        <Second color={color2} num={second} disp={display2} sum={() => suma(second, setSecond, setColor2)} rest={() => resta(second, setSecond, setColor2)} reset={() => reset(setDisplay2)} />
        <Third color={color3} num={third} disp={display3} sum={() => suma(third, setThird, setColor3)} rest={() => resta(third, setThird, setColor3)} reset={() => reset(setDisplay3)} />
        <Fourth color={color4} num={fourth} disp={display4} sum={() => suma(fourth, setFourth, setColor4)} rest={() => resta(fourth, setFourth, setColor4)} reset={() => reset(setDisplay4)} />
      </div>
    </div>
  )
}

export default Products

