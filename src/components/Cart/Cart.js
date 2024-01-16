


// import React from 'react'
import classes from './Cart.module.css'

import Modal from '../UI/Modal'


const Cart = (props) => {
  const cartItems =( 
  <ul className={classes['cart-items']}>
  {[{id:'cl',name:'sushi', amount:2, price:12.9}].map((item)=>(
  <li>{item.name}</li>))}</ul>
  )
  return (
    <Modal onClose={props.onClose}>
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Totol Am</span>
        <span>2333</span>
      </div>
      
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      <button className={classes.button}>Order</button>
      </div>
    </div>
    </Modal>
  )
}

export default Cart
