import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormatPrice from '../helpers/FormatPrice';
import CardAmountToggle from './CardAmountToggle';
import { useCartContext } from '../context/cart_context';

const CartItem = ({id, name, image, color, price, amount}) => {
  const {removeItem, setDecrease, setIncrease} = useCartContext();

  return (
    <div className='cart_heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div className='color-style' style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      <div className='cart-hide'>
        <p>
          {" "}
          <FormatPrice price={price} />
          {" "}
        </p>
      </div>
      <CardAmountToggle 
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price*amount} />
        </p>
      </div>
      <div>
        <FaTrash className='remove_icon' onClick={() => removeItem(id)} />
      </div>
    </div>
  )
}

export default CartItem;