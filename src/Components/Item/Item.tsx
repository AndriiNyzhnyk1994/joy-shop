import s from './Item.module.css'

const Item = () => {
    return (
        <div className={s.item}>
            <img src="https://m.media-amazon.com/images/I/61dV+aYlNmL._SX679_.jpg" alt="IMAGE" />
            <h4 className={s.itemTitle}>Title</h4>
            <div className={s.priceAndBuy}>
                <button className={s.addButton}>ADD TO CART</button>
                <div className={s.price}>300</div>
            </div>
        </div>
    )
}

export default Item