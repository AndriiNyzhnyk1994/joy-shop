import { useSelector } from 'react-redux'
import cartIcon from '../assets/images/cart.svg'
import s from './Header.module.css'
import { RootState } from '../redux/store'
import { CartItemType } from '../redux/slices/cart/slice'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const Header = () => {

    const { items } = useSelector((state: RootState) => state.cart)

    const totalCount = items.reduce((acc: number, el: CartItemType) => {
        return acc + el.count
    }, 0)

    const isMounted = useRef(false)

    useEffect(() => {
        if(isMounted.current) {
            const json = JSON.stringify(items)
            localStorage.setItem('cartData', json)
        }else {
            isMounted.current = true
        }
    }, [items])


    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div className={s.headerInner}>
                        <Link to='/'>
                            <span>HEADER</span>
                        </Link>

                        <Link to='/cart'>
                            <span className={s.cartIcon}>
                                <img className={s.cartIconImage} src={cartIcon} alt="Cart" ></img>
                                {totalCount ?
                                 <span className={s.totalCount}>
                                    {totalCount > 99
                                        ? '99+'
                                        : totalCount
                                    }</span> : ''}

                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header