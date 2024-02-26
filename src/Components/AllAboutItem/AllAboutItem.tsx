import React from 'react'
import s from './AllAboutItem.module.css'
import ImagesSlider from '../../assets/ImagesSlider/ImagesSlider'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'


type PropsType = {
    itemData: ItemFullInfoType 
}

const AllAboutItem: React.FC<PropsType> = ({itemData}) => {
    
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
            </div>
            <div className={s.aboutRight}></div>
        </div>
    )
}

export default AllAboutItem