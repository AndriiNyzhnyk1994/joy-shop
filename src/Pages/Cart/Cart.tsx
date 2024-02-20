import { Link } from 'react-router-dom'
import CartItem from '../../Components/CartItem/CartItem'
import s from './Cart.module.css'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import delIconBlack from '../../assets/images/delete-icon-black.svg'
import { clearCart } from '../../redux/slices/cart/slice'

function Cart() {
    const { items, totalPrice } = useSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()

    const onClearCart = () => {
        if (window.confirm('Are you sure tou want to clear the cart?')) {
            dispatch(clearCart())
        }
    }

    const cartItems = items.map(i => <CartItem key={i.id} {...i} />)

    return (
        <div className={s.cart}>
            <div className='container'>
                <div className={s.cartTitle}>
                    <h2>Cart</h2>
                    {items.length
                        ? <button onClick={onClearCart} className={s.clearCartButton}>
                            <img src={delIconBlack} alt="Clear" />
                        </button>
                        : ''}
                </div>
                <div className={s.cartInner}>
                    <ul className={s.cartItemsList}>
                        {cartItems}
                    </ul>
                    <div className={s.cartBottom}>
                        <Link to='/'>
                            <button className={s.backButton}>Back to Catalog</button>
                        </Link>
                        <button disabled={!!items.length} className={s.buyButton}>BUY</button>
                        <span className={s.totalPrice}>{totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart