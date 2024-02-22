import React, { useEffect, useState } from 'react'
import s from './FullItem.module.css'
import ItemCharacteristics from '../../Components/ItemCharacteristics/ItemCharacteristics'
import { useAppDispatch } from '../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'
import { ItemType } from '../../redux/slices/items/slice'
import { CartItemType, addItem } from '../../redux/slices/cart/slice'
import axios from 'axios'
import { error } from 'console'


export enum NavStatusType {
    Characteristics = 'Характеристики',
    AllAbout = 'Всё о товаре',
    Reviews = 'Отзывы',
    Photo = 'Фото'
}


const FullItem: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const [itemData, setItemData] = useState<ItemType | null>(null)

    const onAddItem = () => {
        
        if(itemData) {
            const cartItem: CartItemType = {
                title: itemData.title,
                count: 0,
                id: itemData.id,
                imageUrl: itemData.imageUrl,
                price: itemData.price
    
            }
            dispatch(addItem(cartItem))
        }
    }

    useEffect(() => {
        async function fetchItem() {
            try{
                const {data} = await axios.get(`https://653db286f52310ee6a9a45a9.mockapi.io/elements/${id}`)
                setItemData(data)
            } catch(error) {
                alert('Error: ' + error)
                navigate('/')
            }
        }
        fetchItem()
    }, [])


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
                            ? <ItemCharacteristics itemData={itemData} onAddItem={onAddItem}  />
                            : ''
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullItem