import React, { useEffect, useRef, useState } from 'react'
import s from './AdvancedRating.module.css'
import './AdvancedRating.css'


function AdvancedRating({value}) {

   
    const [widthValue, setWidthValue] = useState(value)
    useEffect(() => {
        // меняем ширину активных звёзд
        const setRatingActiveWidth = (index = value) => {
            const ratingActiveWidth = index / 0.05
            setWidthValue(ratingActiveWidth)
        }

        setRatingActiveWidth()
    }, [])


    return (
        <div className="rating">
            <div className="rating__body">
                <div style={{ width: `${widthValue}%` }} className="rating__active"></div>
                <div className="rating__items">
                    <input type="radio" className="rating__item" value="1" name="rating" />
                    <input type="radio" className="rating__item" value="2" name="rating" />
                    <input type="radio" className="rating__item" value="3" name="rating" />
                    <input type="radio" className="rating__item" value="4" name="rating" />
                    <input type="radio" className="rating__item" value="5" name="rating" />
                </div>
            </div>
            <div className="rating__value">{value}</div>
        </div>
    );
}



export default AdvancedRating