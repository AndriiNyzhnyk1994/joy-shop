import React from 'react'
import s from './FullItem.module.css'
import RatingScreen from '../../Components/Rating/RatingScreen'
import ItemInfoBlank, { BlankItemType } from '../../Components/ItemInfoBlank/ItemInfoBlank'

const FullItem = () => {

    const itemBlankData: BlankItemType[] = [
        {'Количество клавиш': ['87']},
        {'Подключение': ['Беспроводное', 'Проводное']},
        {'Тип упаковки': ['Retail']},
    ] 

    return (
        <div className={s.fullItem}>
            <div className="container">
                <div className={s.fullItemInner}>
                    <div className={s.itemTopInfo}>
                        <h2 className={s.itemTitle}>ITEM TITLE</h2>
                        <div className={s.itemRating}>
                            <RatingScreen showNumber={false} starSize={16} rating={4} />
                            <span className={s.reviewsLink}>1 review</span>
                            <span className={s.itemCode}>Code: 338500994</span>
                        </div>
                    </div>
                    <div className={s.itemMainInfo}>
                        <ItemInfoBlank data={itemBlankData}/>
                        <div className={s.purchaseInfo}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullItem