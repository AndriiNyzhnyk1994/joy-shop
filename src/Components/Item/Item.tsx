import { CartItemType, addItem } from '../../redux/slices/cart/slice'
import { ItemType } from '../../redux/slices/items/slice'
import { useAppDispatch } from '../../redux/store'
import s from './Item.module.css'

type ItemPropsType = ItemType


const Item: React.FC<ItemPropsType> = (props) => {
    const {
        id,
        title,
        price,
        isAviable,
        imageUrl,
    } = props

    const dispatch = useAppDispatch()
    

    const addToCart = () => {
        const cartItem: CartItemType = {
            title,
            id,
            imageUrl,
            price,
            count: 0
        }    
        dispatch(addItem(cartItem))
    }

    const croppedTitle = title.length > 25 ? title.substring(0, 25) + '...' : title

    return (
        <div className={s.item}>
            <img src={imageUrl} alt=" ITEM-IMAGE" />
            <a href='#' className={s.itemTitle}>{croppedTitle}</a>
            <div className={s.priceAndBuy}>
                <div className={s.price}>{price}</div>
                <button onClick={addToCart} className={s.addButton}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Item