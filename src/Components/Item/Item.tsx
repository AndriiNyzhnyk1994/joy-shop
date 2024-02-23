import { CartItemType, addItem } from '../../redux/slices/cart/slice'
import { ItemType } from '../../redux/slices/items/slice'
import { useAppDispatch } from '../../redux/store'
import s from './Item.module.css'
import RatingScreen from '../Rating/RatingScreen'
import { Link } from 'react-router-dom'
import { cropString } from '../../utils/cropString'
import IsAviable from '../../assets/IsAviable/IsAviable'

type ItemPropsType = ItemType
 

const Item: React.FC<ItemPropsType> = (props) => {
    const {
        id,
        title,
        price,
        isAviable,
        imageUrl,
        rating
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

    const croppedTitle = cropString(title, 30)


    return (
        <div className={s.item}>
            <Link className={s.imageAndTitle} to={`/element/${id}`}>
                <img src={imageUrl} alt="ITEM-IMAGE" />
                <span title={title} className={s.itemTitle}>{croppedTitle}</span>
            </Link>
            <IsAviable isAviable={isAviable}/>
            <RatingScreen showNumber={true} starSize={16} rating={rating} />
            <div className={s.priceAndBuy}>
                <div className={s.price}>{price}</div>
                <button onClick={addToCart} className={s.addButton}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Item