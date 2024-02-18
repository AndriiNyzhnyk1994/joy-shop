import s from './CartItem.module.css'
import delIconBlack from '../../assets/images/delete-icon-black.svg'
import delIconWhite from '../../assets/images/delete-icon-white.svg'
import { CartItemType, addItem, minusItem, removeItem } from '../../redux/slices/cart/slice'
import React from 'react'
import { useAppDispatch } from '../../redux/store'

type PropsType = CartItemType


const CartItem: React.FC<PropsType> = (props) => {
  const { id, count, imageUrl, price, title } = props
  const dispatch = useAppDispatch()

  const addCartItem = () => {
    dispatch(addItem(props))
  }
  const minusCartItem = () => {
    dispatch(minusItem(id))
  }
  const removeCartItem = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      dispatch(removeItem(id))
    }
  }


  return (
    <li className={s.cartItem}>
      <div className={s.cartItemTop}>
        <div className={s.cartImageBlock}>
          <img className={s.cartItemImage} src={imageUrl} alt="Item image" />
        </div>

        <p className={s.cartItemTitle}>{title}</p>
        <button onClick={removeCartItem} className={s.deleteCartItem}>
          <img src={delIconBlack} alt="DEL" />
        </button>
      </div>
      <div className={s.cartItemBottom}>
        <div className={s.countPanel}>
          <button
            disabled={count === 1}
            onClick={minusCartItem}
            className={`${count === 1 ? s.inactiveButton : ''} ${s.countButton}`}>-</button>
          <input value={count} />
          <button onClick={addCartItem} className={s.countButton}>+</button>
        </div>
        <div className={s.price}>
          <span>{price * count}</span>
        </div>
      </div>

    </li>
  )
}

export default CartItem