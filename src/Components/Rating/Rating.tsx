import { FaStar } from 'react-icons/fa'
import s from './Rating.module.css'
import { useState } from 'react'

function Rating() {

    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)

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
                                    onClick={() => { setRating(currentRating) }}
                                    value={currentRating} />
                                <FaStar
                                    color={currentRating <= (hover || rating) ? '#ffc107' : 'e4e5e9'}
                                    className={s.star}
                                    size={20}
                                    onMouseEnter={() => { setHover(currentRating) }}
                                    onMouseLeave={() => { setHover(0) }}
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

export default Rating