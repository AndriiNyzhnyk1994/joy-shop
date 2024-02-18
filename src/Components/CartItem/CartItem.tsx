import s from './CartItem.module.css'
import delIconBlack from '../../assets/images/delete-icon-black.svg'
import delIconWhite from '../../assets/images/delete-icon-white.svg'
import { CartItemType } from '../../redux/slices/cart/slice'
import React from 'react'

type PropsType = CartItemType


const CartItem: React.FC<PropsType> = (props) => {

  const { id, count, imageUrl, price, title } = props

  return (
    <li className={s.cartItem}>
      <div className={s.cartItemTop}>
        <div className={s.cartImageBlock}>
          <img className={s.cartItemImage} src={imageUrl} alt="Item image" />
        </div>

        <p className={s.cartItemTitle}>{title}</p>
        <button className={s.deleteCartItem}>
          <img src={delIconBlack} alt="DEL" />
        </button>
      </div>
      <div className={s.cartItemBottom}>
        <div className={s.countPanel}>
          <button className={s.countButton}>-</button>
          <input value={count} />
          <button className={s.countButton}>+</button>
        </div>
        <div className={s.price}>
          <span>{price * count}</span>
        </div>
      </div>

    </li>
  )
}

export default CartItem