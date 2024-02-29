import React, { useEffect, useRef, useState } from 'react'
import s from './AdvancedRating.module.css'
import './AdvancedRating.css'


function AdvancedRating({ value, size }) {

    const [widthValue, setWidthValue] = useState(() => {
        const ratingActiveWidth = value / 0.05
        return ratingActiveWidth
    })


    return (
        <div style={{fontSize: `${size}px`}} className="rating">
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