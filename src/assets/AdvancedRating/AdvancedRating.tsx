import React, {  useState } from 'react'
import s from './AdvancedRating.module.css'


type PropsType = {
    value: number
    size: number
    showValue: boolean
}

const AdvancedRating:React.FC<PropsType> = ({ value, size, showValue }) => {

    const [widthValue, setWidthValue] = useState(() => {
        const ratingActiveWidth = value / 0.05
        return ratingActiveWidth
    })


    return (
        <div style={{fontSize: `${size}px`}} className={s.rating}>
            <div className={s.rating__body}>
                <div style={{ width: `${widthValue}%` }} className={s.rating__active}></div>
                <div className={s.rating__items}>
                    <input type="radio" className={s.rating__item} value="1" name="rating" />
                    <input type="radio" className={s.rating__item} value="2" name="rating" />
                    <input type="radio" className={s.rating__item} value="3" name="rating" />
                    <input type="radio" className={s.rating__item} value="4" name="rating" />
                    <input type="radio" className={s.rating__item} value="5" name="rating" />
                </div>
            </div>
            {showValue && <div className={s.rating__value}>{value}</div>}
        </div>
    );
}

export default AdvancedRating