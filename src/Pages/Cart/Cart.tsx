import { Link } from 'react-router-dom'
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
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </ul>
                    <div className={s.cartBottom}>
                        <Link to='/'>
                            <button className={s.backButton}>Back to Catalog</button>
                        </Link>
                        <button className={s.buyButton}>BUY</button>
                        <span className={s.totalPrice}>1265</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart