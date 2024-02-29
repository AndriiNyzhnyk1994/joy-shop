import React, { useState } from 'react'
import s from './ItemCharacteristics.module.css'
import ItemInfoBlank, { BlankItemType } from '../ItemInfoBlank/ItemInfoBlank'
import cartIcon from '../../assets/images/cart.svg'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import IsAviable from '../../assets/IsAviable/IsAviable'
import Favorites from '../../assets/favorites/Favorites'
import BonusInfoBlock from '../../assets/BonusInfoBlock/BonusInfoBlock'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'
import PurchaseMainBlock from '../PurchaseMainBlock/PurchaseMainBlock'



type PropsType = {
    onAddItem: () => void
    fullItemData: ItemFullInfoType | null
}


const ItemCharacteristics:React.FC<PropsType> = ({onAddItem, fullItemData}) => {

    const [isFavorite, setIsFavorite] = useState(false)

    return ( 
        fullItemData
        ? <div className={s.wrapper}>
            <div className={s.itemTopInfo}>
                <h2 className={s.itemTopTitle}>{fullItemData.title}</h2>
                <div className={s.itemRating}>
                    <AdvancedRating value={fullItemData.rating} size={23} showValue={false} />
                    <span className={s.reviewsLink}>{fullItemData.reviews.length} reviews</span>
                    <span className={s.itemCode}>Code: 338500994</span>
                </div>
            </div>
            <div className={s.itemMainInfo}>
                        <ItemInfoBlank data={fullItemData.characteristics} />
                        <div className={s.purchaseInfo}>
                            <div className={s.titleAndImage}>
                                <div className={s.itemImageBlock}>
                                    <img className={s.itemImage} src={fullItemData.imageUrl} alt="Item Photo" />
                                    </div>
                                <p className={s.itemTitle}>{fullItemData.title}</p>
                            </div>
                            <PurchaseMainBlock fullItemData={fullItemData} onAddItem={onAddItem} />
                        </div>
                    </div>
        </div>
        : <></>
    )
}

export default ItemCharacteristics