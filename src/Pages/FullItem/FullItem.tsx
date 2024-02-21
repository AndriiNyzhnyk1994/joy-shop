import React from 'react'
import s from './FullItem.module.css'
import ItemCharacteristics from '../../Components/ItemCharacteristics/ItemCharacteristics'




const FullItem: React.FC = () => {

    
    return (
        <div className={s.fullItem}>
            <div className="container">
                <nav className={s.itemNavBlock}>
                    <ul className={s.itemNavList}>
                        <li className={s.itemNavElement}>
                            <button className={s.itemNavBtn}>Всё о товаре</button>
                        </li>
                        <li className={s.itemNavElement}>
                            <button className={s.itemNavBtn}>Характеристики</button>
                        </li>
                        <li className={s.itemNavElement}>
                            <button className={s.itemNavBtn}>Отзывы</button>
                        </li>
                        <li className={s.itemNavElement}>
                            <button className={s.itemNavBtn}>Фото</button>
                        </li>
                    </ul>
                </nav>
                <div className={s.fullItemInner}>

                    <ItemCharacteristics />
                </div>
            </div>
        </div>
    )
}

export default FullItem