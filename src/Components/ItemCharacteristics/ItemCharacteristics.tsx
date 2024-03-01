import React, { useState } from 'react'
import s from './ItemCharacteristics.module.css'
import ItemInfoBlank, { BlankItemType } from '../ItemInfoBlank/ItemInfoBlank'
import cartIcon from '../../assets/images/cart.svg'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import IsAviable from '../../assets/IsAviable/IsAviable'
import Favorites from '../../assets/favorites/Favorites'
import BonusInfoBlock from '../../assets/BonusInfoBlock/BonusInfoBlock'
import AdvancedRating from '../../assets/AdvancedRating/AdvancedRating'
import PurchaseMainBlock from '../PurchaseMainBlock/PurchaseMainBlock'
import ItemTopInfo from '../../assets/ItemTopInfo/ItemTopInfo'
import PurchaseInfo from '../PurchaseMainInfo/PurchaseInfo'



type PropsType = {
    onAddItem: () => void
    fullItemData: ItemFullInfoType | null
}


const ItemCharacteristics:React.FC<PropsType> = ({onAddItem, fullItemData}) => {

    return ( 
        fullItemData
        ? <div className={s.wrapper}>
            <ItemTopInfo fullItemData={fullItemData} additionalText=''/>
            <div className={s.itemMainInfo}>
                        <ItemInfoBlank data={fullItemData.characteristics} />
                        <PurchaseInfo fullItemData={fullItemData} onAddItem={onAddItem} />
                    </div>
        </div>
        : <></>
    )
}

export default ItemCharacteristics