import { ItemType } from '../../redux/slices/items/slice'
import s from './Item.module.css'

type ItemPropsType = ItemType


const Item: React.FC<ItemPropsType> = (props) => {
    const {
        id,
        title,
        price,
        isAviable,
        imageUrl,
        category,
        description,
        rating,
        reviews
    } = props

 const croppedTitle = title.length > 35 ? title.substring(0, 35) + '...' : title
    return (
        <div className={s.item}>
            <img src={imageUrl} alt=" ITEM-IMAGE" />
            <a href='#' className={s.itemTitle}>{croppedTitle}</a>
            <div className={s.priceAndBuy}>
                <div className={s.price}>{price}</div>
                <button className={s.addButton}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Item