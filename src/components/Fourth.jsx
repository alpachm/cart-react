import React from 'react'
import { useState } from 'react'

const Fourth = ({ color, num, disp, sum, rest, reset }) => {

    return (
        <div style={{ display: disp }} className="box-item">
            <span style={{ backgroundColor: color }} >{num}</span>
            <span onClick={sum}><i className='bx bx-plus' ></i></span>
            <span onClick={rest}><i className='bx bx-minus' ></i></span>
            <span onClick={reset} ><i className='bx bx-trash' ></i></span>
        </div>
    )
}

export default Fourth