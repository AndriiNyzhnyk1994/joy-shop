import CartItem from '../../Components/CartItem/CartItem'
import s from './Cart.module.css'


function Cart() {
    return (
        <div className={s.cart}>
            <div className='container'>
                <div className={s.cartTitle}>
                    <h2>Cart</h2>
                </div>
                <div className={s.cartInner}>
                    <ul className={s.cartItemsList}>
                        <CartItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart