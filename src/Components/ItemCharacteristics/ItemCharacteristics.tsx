import React, { useState } from 'react'
import s from './ItemCharacteristics.module.css'
import ItemInfoBlank, { BlankItemType } from '../ItemInfoBlank/ItemInfoBlank'
import RatingScreen from '../Rating/RatingScreen'
import cartIcon from '../../assets/images/cart.svg'
import favoritesIcon from '../../assets/images/favorite.svg'
import favoritesAddedIcon from '../../assets/images/favorite-added.svg'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import IsAviable from '../../assets/IsAviable/IsAviable'
import Favorites from '../../assets/favorites/Favorites'
import BonusInfoBlock from '../../assets/BonusInfoBlock/BonusInfoBlock'



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
                    <RatingScreen showNumber={false} starSize={16} rating={fullItemData.rating} />
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
                            <div className={s.purchaseMainBlock}>
                                <div className={s.sellerInfo}>Продавец: <a href="#">JOY SHOP</a></div>
                                <div className={s.priceAndFavorites}>
                                    <div className={s.priceInfo}>
                                        <h3>{fullItemData.price}</h3>
                                        <IsAviable isAviable={fullItemData.isAviable}/>                                        
                                    </div>
                                    <Favorites />
                                </div>
                                <div className={s.buyButtons}>
                                    <button onClick={onAddItem} className={s.buyBtn}>
                                        <img src={cartIcon} alt="Cart Icon" />
                                        Купить
                                    </button>
                                    <button className={`${s.buyBtn} ${s.buyInCredit}`}>
                                        Купить в кредит
                                    </button>
                                </div>
                                <BonusInfoBlock />
                            </div>
                        </div>
                    </div>
        </div>
        : <></>
    )
}

export default ItemCharacteristics