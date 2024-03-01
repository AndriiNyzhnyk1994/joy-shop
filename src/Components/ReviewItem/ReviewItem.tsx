import React from 'react'
import s from './ReviewItem.module.css'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'

type PropsType = {
    review: string
    rating: number
}


const ReviewItem:React.FC<PropsType> = ({review, rating}) => {
    return (
        <div className={s.reviewItem}>
            <div className={s.nameAndDate}>
                <h5 className={s.userName}>Пользователь 3</h5>
            </div>
            <div className={s.ratingBlock}>
                <AdvancedRating showValue={false} size={20} value={rating} />
            </div>
            <div className={s.reviewText}>
                {review}
            </div>
        </div>
    )
}

export default ReviewItem