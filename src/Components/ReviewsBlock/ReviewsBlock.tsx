import React from 'react'
import s from './ReviewsBlock.module.css'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import ItemTopInfo from '../../assets/ItemTopInfo/ItemTopInfo'
import PurchaseInfo from '../PurchaseMainInfo/PurchaseInfo'
import ReviewItem from '../ReviewItem/ReviewItem'
import { ReviewType } from '../../redux/slices/items/slice'


type PropsType = {
    fullItemData: ItemFullInfoType
    onAddItem: () => void
}


const ReviewsBlock: React.FC<PropsType> = ({ fullItemData, onAddItem }) => {

    const reviewsArr: ReviewType[] = fullItemData.reviews

    return (
        <div className={s.reviewsBlock}>
            <ItemTopInfo additionalText={'Отзывы покупателей о '} fullItemData={fullItemData} />
            <div className={s.reviewsBlockInner}>
                <div className={s.reviewsList}>
                    {
                        reviewsArr.map((review, index) => {
                            return <ReviewItem
                                key={index}
                                name={review.name}
                                reviewText={review.text}
                                rating={review.rate}
                            />
                        })
                    }
                </div>

                <PurchaseInfo fullItemData={fullItemData} onAddItem={onAddItem} />
            </div>
        </div>
    )
}

export default ReviewsBlock