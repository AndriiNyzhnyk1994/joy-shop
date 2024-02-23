import React, { useState } from 'react'
import s from './ItemCharacteristics.module.css'
import ItemInfoBlank, { BlankItemType } from '../ItemInfoBlank/ItemInfoBlank'
import RatingScreen from '../Rating/RatingScreen'
import cartIcon from '../../assets/images/cart.svg'
import bonusIcon from '../../assets/images/bonusIcon.svg'
import favoritesIcon from '../../assets/images/favorite.svg'
import favoritesAddedIcon from '../../assets/images/favorite-added.svg'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import IsAviable from '../../assets/IsAviable/IsAviable'



type PropsType = {
    onAddItem: () => void
    fullItemData: ItemFullInfoType | null
}


const ItemCharacteristics:React.FC<PropsType> = ({onAddItem, fullItemData}) => {

    

    const [isFavorite, setIsFavorite] = useState(false)
    
    console.log(fullItemData?.rating);
    

    return (
        fullItemData
        ? <>
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
                                    <button onClick={() => { setIsFavorite((state) => !state) }} className={s.favoritesBtn}>
                                        {
                                            isFavorite
                                                ? <img className={s.favoritesIcon} src={favoritesAddedIcon} alt="To Favorites" />
                                                : <img className={s.favoritesIcon} src={favoritesIcon} alt="To Favorites" />
                                        }
                                    </button>
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
                                <div className={s.bonusInfoBlock}>
                                    <img className={s.bonusIcon} src={bonusIcon} alt="Bonus Icon" />
                                    <span className={s.bonusText}>
                                        <b>+ 20 бонусных ₴ </b>
                                        на счёт при покупке
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
        : <></>
    )
}

export default ItemCharacteristics