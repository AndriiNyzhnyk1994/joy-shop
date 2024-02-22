import React, { useState } from 'react'
import s from './FullItem.module.css'
import ItemCharacteristics from '../../Components/ItemCharacteristics/ItemCharacteristics'


export enum NavStatusType {
    Characteristics = 'Характеристики',
    AllAbout = 'Всё о товаре',
    Reviews = 'Отзывы',
    Photo = 'Фото'
}


const FullItem: React.FC = () => {

    const [activeNav, setActiveNav] = useState<NavStatusType>(NavStatusType.Characteristics)

    return (
        <div className='container'>
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
                        {activeNav === NavStatusType.Characteristics
                            ? <ItemCharacteristics />
                            : ''
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullItem