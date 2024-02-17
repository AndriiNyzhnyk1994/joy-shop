import s from './Cart.module.css'


function Cart() {
    return (
        <div className={s.cart}>
            <div className='container'>
                <div className={s.cartInner}>
                    <ul className={s.cartItemsList}>
                        <li className={s.cartItem}>
                            {/* <CartItem/> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart