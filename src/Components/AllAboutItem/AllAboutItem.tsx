import React from 'react'
import s from './AllAboutItem.module.css'
import ImagesSlider from '../../assets/ImagesSlider/ImagesSlider'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import IsAviable from '../../assets/IsAviable/IsAviable'
import cartIcon from '../../assets/images/cart.svg'
import favoritesIcon from '../../assets/images/favorite.svg'
import favoritesAddedIcon from '../../assets/images/favorite-added.svg'
import Favorites from '../../assets/favorites/Favorites'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'
import BonusInfoBlock from '../../assets/BonusInfoBlock/BonusInfoBlock'
import ItemInfoBlank from '../ItemInfoBlank/ItemInfoBlank'

type PropsType = {
    itemData: ItemFullInfoType
}

const AllAboutItem: React.FC<PropsType> = ({ itemData }) => {

    const {
        category,
        characteristics,
        description,
        id,
        imageUrl,
        isAviable,
        photos,
        price,
        rating,
        reviews,
        title
    } = itemData

    return (
        <div className={s.allAboutItem}>
            <div className={s.aboutLeft}>
                <div className={s.itemGalleryMain}>
                    <ImagesSlider images={photos} />
                </div>
                <div className={s.descriptionBlock}>
                    <h2 className={s.descriptionTitle}>Описание</h2>
                    <p className={s.descriptionText}>{description}</p>
                </div>
            </div>
            <div className={s.aboutRight}>
                <div className={s.titleBlock}>
                    <h3 className={s.title}>{title}</h3>
                    <div className={s.ratingBlock}>
                        <AdvancedRating value={rating} size={20} showValue={false} />
                    </div>
                </div>
                <div className={s.buyOptionsBlock}>
                    <div className={s.sellerInfo}>Продавец: <a href="#">JOY SHOP</a></div>
                    <div className={s.buyOptions}>
                        <div className={s.priceAndAviable}>
                            <span className={s.price}>{price}</span>
                            <IsAviable isAviable={isAviable} />
                        </div>
                        <button className={s.buyBtn}>
                            <img src={cartIcon} alt="Cart Icon" />
                            Купить
                        </button>
                        <Favorites />
                    </div>
                    <BonusInfoBlock />
                </div>
                

            </div>
        </div>
    )
}

export default AllAboutItem