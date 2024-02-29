import React from 'react'
import s from './PurchaseMainBlock.module.css'
import BonusInfoBlock from '../../assets/BonusInfoBlock/BonusInfoBlock'
import Favorites from '../../assets/favorites/Favorites'
import IsAviable from '../../assets/IsAviable/IsAviable'
import { ItemFullInfoType } from '../../Pages/FullItem/FullItem'
import cartIcon from '../../assets/images/cart.svg'

type PropsType = {
    onAddItem: () => void
    fullItemData: ItemFullInfoType 
}



const PurchaseMainBlock: React.FC<PropsType> = ({ fullItemData, onAddItem }) => {
    return (
            <div className={s.purchaseMainBlock}>
                <div className={s.sellerInfo}>Продавец: <a href="#">JOY SHOP</a></div>
                <div className={s.priceAndFavorites}>
                    <div className={s.priceInfo}>
                        <h3>{fullItemData.price}</h3>
                        <IsAviable isAviable={fullItemData.isAviable} />
                    </div>
                    <Favorites />
                </div>
                <div className={s.buyButtons}>
                    <button onClick={onAddItem} className={s.buyBtn}>
                        <img src={cartIcon} alt="Cart Icon" />
                        Купить
                    </button>
                    <button className={`${s.buyBtn} ${s.buyInCredit}`}>
                        Купить в кредит
                    </button>
                </div>
                <BonusInfoBlock />
            </div>
            
  )
}

export default PurchaseMainBlock