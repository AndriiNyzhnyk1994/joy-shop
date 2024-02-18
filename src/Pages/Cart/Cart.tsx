import { Link } from 'react-router-dom'
import CartItem from '../../Components/CartItem/CartItem'
import s from './Cart.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


function Cart() {
    const { items, totalPrice } = useSelector((state: RootState) => state.cart)

    const cartItems = items.map(i => <CartItem key={i.id} {...i} />)

    return (
        <div className={s.cart}>
            <div className='container'>
                <div className={s.cartTitle}>
                    <h2>Cart</h2>
                </div>
                <div className={s.cartInner}>
                    <ul className={s.cartItemsList}>
                        {cartItems}
                    </ul>
                    <div className={s.cartBottom}>
                        <Link to='/'>
                            <button className={s.backButton}>Back to Catalog</button>
                        </Link>
                        <button className={s.buyButton}>BUY</button>
                        <span className={s.totalPrice}>{totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart