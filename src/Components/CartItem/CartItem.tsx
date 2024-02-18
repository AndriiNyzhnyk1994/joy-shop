import s from './CartItem.module.css'


function CartItem() {
  return (
    <li className={s.cartItem}>
      <div className={s.cartItemTop}>
        <div className={s.cartImageBlock}>
        <img className={s.cartItemImage} src="https://content1.rozetka.com.ua/goods/images/preview/397236975.jpg" alt="Item image" />  
        </div>
        
        <p className={s.cartItemTitle}>Wireless Super-Duper Keyboard 2000 Microsoft</p>
        <button className={s.deleteCartItem}>DEL</button>
      </div>
      <div className={s.cartItemBottom}>
        <div className={s.countPanel}>
          <button>-</button>
          <input value={3} />
          <button>+</button>
        </div>
        <div className={s.price}>
          <span>{2500}</span>
        </div>
      </div>

    </li>
  )
}

export default CartItem