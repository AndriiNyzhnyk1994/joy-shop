import React from 'react'
import s from './ReviewsBlock.module.css'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import ItemTopInfo from '../../assets/ItemTopInfo/ItemTopInfo'
import PurchaseInfo from '../PurchaseMainInfo/PurchaseInfo'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'
import ReviewItem from '../ReviewItem/ReviewItem'

type PropsType = {
    fullItemData: ItemFullInfoType
    onAddItem: () => void
}


const ReviewsBlock: React.FC<PropsType> = ({ fullItemData, onAddItem }) => {

    return (
        <div className={s.reviewsBlock}>
            <ItemTopInfo additionalText={'Отзывы покупателей о '} fullItemData={fullItemData}/>
            <div className={s.reviewsBlockInner}>
                <div className={s.reviewsList}>
                    <ReviewItem review={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, accusantium?'} rating={3}/>
                    <ReviewItem review={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores nulla in exercitationem eius quisquam.'} rating={4} />
                    <ReviewItem review={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sequi, molestiae, velit minus quam iusto deleniti repellendus ipsum eos reiciendis minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sequi, molestiae, velit minus quam iusto deleniti repellendus ipsum eos reiciendis minima.'} rating={5} />
                </div>
                
                <PurchaseInfo fullItemData={fullItemData} onAddItem={onAddItem}/>
            </div>
        </div>
    )
}

export default ReviewsBlock