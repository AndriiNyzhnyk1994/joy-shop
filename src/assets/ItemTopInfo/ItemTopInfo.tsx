import React from 'react'
import s from './ItemTopInfo.module.css'
import AdvancedRating from '../AdvancedRating/AdvancedRating'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import { calculateRating } from '../../utils/calculateRating'


type PropsType = {
    additionalText: string
    fullItemData: ItemFullInfoType
}

const ItemTopInfo:React.FC<PropsType> = ({fullItemData, additionalText}) => {
  return (
    <div className={s.itemTopInfo}>
                <h2 className={s.itemTopTitle}>{`${additionalText} ${fullItemData.title}`}</h2>
                <div className={s.itemRating}>
                    <AdvancedRating value={calculateRating(fullItemData.reviews)} size={23} showValue={false} />
                    <span className={s.reviewsLink}>{fullItemData.reviews.length} reviews</span>
                    <span className={s.itemCode}>Code: {fullItemData.id}</span>
                </div>
            </div>
  )
}

export default ItemTopInfo