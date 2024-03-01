import React from 'react'
import s from './ReviewItem.module.css'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'

type PropsType = {
    reviewText: string
    rating: number
    name: string
}


const ReviewItem:React.FC<PropsType> = ({reviewText, rating, name}) => {
    return (
        <div className={s.reviewItem}>
            <div className={s.nameAndDate}>
                <h5 className={s.userName}>{name}</h5>
            </div>
            <div className={s.ratingBlock}>
                <AdvancedRating showValue={false} size={20} value={rating} />
            </div>
            <div className={s.reviewText}>
                {reviewText}
            </div>
        </div>
    )
}

export default ReviewItem