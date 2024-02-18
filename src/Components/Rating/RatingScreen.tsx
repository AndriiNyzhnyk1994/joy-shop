import { FaStar } from 'react-icons/fa'
import s from './Rating.module.css'
import React, { useState } from 'react'


type PropsType = {
    rating: number
}

const RatingScreen:React.FC<PropsType> = ({rating}) => {



    return (
        <div className={s.rating}>

            <div className={s.stars}>
                {
                    [...Array(5)].map((el, index) => {
                        const currentRating = index + 1
                        return (
                            <label>
                                <input
                                    type="radio"
                                    name='rating'
                                    value={currentRating} />
                                <FaStar
                                    color={currentRating <= rating ? '#ffc107' : 'e4e5e9'}
                                    className={s.star}
                                    size={20}
                                />
                            </label>
                        )
                    })
                }
                <div className={s.ratingValue}>Rating is {rating}</div>
            </div>
        </div>
    )
}

export default RatingScreen