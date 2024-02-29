import React from 'react'
import s from './AllAboutItem.module.css'
import ImagesSlider from '../../assets/ImagesSlider/ImagesSlider'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'
import PurchaseMainBlock from '../PurchaseMainBlock/PurchaseMainBlock'

type PropsType = {
    itemData: ItemFullInfoType
    onAddItem: () => void
}

const AllAboutItem: React.FC<PropsType> = ({ itemData, onAddItem }) => {

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
                <PurchaseMainBlock  fullItemData={itemData} onAddItem={onAddItem} />
            </div>
        </div>
    )
}

export default AllAboutItem