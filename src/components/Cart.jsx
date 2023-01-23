import React from 'react'
import './cart.css'

const Cart = ({ num }) => {
    return (
        <div className='div-cart'>
            <i className='bx bxs-cart'></i>
            <span>{num}</span>
            <span>Items</span>
        </div>
    )
}

export default Cart