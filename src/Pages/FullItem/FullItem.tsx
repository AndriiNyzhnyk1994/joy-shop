import React, { useEffect, useState } from 'react'
import s from './FullItem.module.css'
import ItemCharacteristics from '../../Components/ItemCharacteristics/ItemCharacteristics'
import { useAppDispatch } from '../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'
import { ItemType } from '../../redux/slices/items/slice'
import { CartItemType, addItem } from '../../redux/slices/cart/slice'
import axios from 'axios'
import { error } from 'console'
import { BlankItemType } from '../../Components/ItemInfoBlank/ItemInfoBlank'
import AllAboutItem from '../../Components/AllAboutItem/AllAboutItem'


export enum NavStatusType {
    Characteristics = 'Характеристики',
    AllAbout = 'Всё о товаре',
    Reviews = 'Отзывы',
    Photo = 'Фото'
}

export type ReviewType = {
    name: string
    text: string
    rate: string
}

export type ItemFullInfoType = {
    characteristics: BlankItemType[]
    id: string
    photos: string[]
    title: string
    price: number
    isAviable: boolean
    imageUrl: string
    category: string
    description: string
    rating: number
    reviews: ReviewType[]
}


const FullItem: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [itemData, setItemData] = useState<ItemFullInfoType>()


    const onAddItem = () => {

        if (itemData) {
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
            try {
                const { data } = await axios.get(`https://65c3cdbc4ac991e8059b1449.mockapi.io/items-info/${id}`)
                setItemData(data)
            } catch (error) {
                alert('Error: ' + error)
                navigate('/')
            }
        }
        fetchItem()
    }, [])


    const [activeNav, setActiveNav] = useState<NavStatusType>(NavStatusType.Characteristics)


    const itemInfoSwitch = (value: NavStatusType) => {
        if (itemData) {
            switch (value) {
                case NavStatusType.AllAbout: {
                    return <AllAboutItem itemData={itemData} />
                }
                case NavStatusType.Characteristics: {
                    return <ItemCharacteristics fullItemData={itemData} onAddItem={onAddItem} />
                }
                default: return <AllAboutItem itemData={itemData} />
            }
        }
    }

    return (
        <div className='container'>
            <div className={s.fullItem}>
                <div className="container">
                    <nav className={s.itemNavBlock}>
                        <ul className={s.itemNavList}>
                            <li className={s.itemNavElement}>
                                <button onClick={() => setActiveNav(NavStatusType.AllAbout)} className={s.itemNavBtn}>Всё о товаре</button>
                            </li>
                            <li className={s.itemNavElement}>
                                <button onClick={() => setActiveNav(NavStatusType.Characteristics)} className={s.itemNavBtn}>Характеристики</button>
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
                        {itemInfoSwitch(activeNav)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullItem