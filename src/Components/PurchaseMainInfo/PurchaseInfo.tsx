import React from 'react'
import s from './PurchaseInfo.module.css'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import PurchaseMainBlock from '../PurchaseMainBlock/PurchaseMainBlock'

type PropsType = {
    onAddItem: () => void
    fullItemData: ItemFullInfoType
}



const PurchaseInfo: React.FC<PropsType> = ({ fullItemData, onAddItem }) => {
    return (
        <div className={s.purchaseInfo}>
            <div className={s.titleAndImage}>
                <div className={s.itemImageBlock}>
                    <img className={s.itemImage} src={fullItemData.imageUrl} alt="Item Photo" />
                </div>
                <p className={s.itemTitle}>{fullItemData.title}</p>
            </div>
            <PurchaseMainBlock fullItemData={fullItemData} onAddItem={onAddItem} />
        </div>
    )
}

export default PurchaseInfo