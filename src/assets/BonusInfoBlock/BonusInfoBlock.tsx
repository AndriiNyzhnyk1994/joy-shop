import React from 'react'
import bonusIcon from '../../assets/images/bonusIcon.svg'
import s from './BonusInfoBlock.module.css'


function BonusInfoBlock() {
    return (
        <div className={s.bonusInfoBlock}>
            <img className={s.bonusIcon} src={bonusIcon} alt="Bonus Icon" />
            <span className={s.bonusText}>
                <b>+ 20 бонусных ₴ </b>
                на счёт при покупке
            </span>
        </div>
    )
}

export default BonusInfoBlock