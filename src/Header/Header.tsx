import cartIcon from '../assets/images/cart.svg'
import s from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div className={s.headerInner}>
                        <span>HEADER</span>
                        <span className={s.cartIcon}>
                            <img className={s.cartIconImage} src={cartIcon} alt="Cart" ></img>
                            <span className={s.commonPrice}>{3}</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header