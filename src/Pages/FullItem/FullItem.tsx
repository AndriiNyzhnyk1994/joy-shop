import React, { useEffect, useState } from 'react'
import s from './FullItem.module.css'
import ItemCharacteristics from '../../Components/ItemCharacteristics/ItemCharacteristics'
import { useAppDispatch } from '../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'
import { CartItemType, addItem } from '../../redux/slices/cart/slice'
import axios from 'axios'
import { BlankItemType } from '../../Components/ItemInfoBlank/ItemInfoBlank'
import AllAboutItem from '../../Components/AllAboutItem/AllAboutItem'
import { Helmet } from 'react-helmet'
import ReviewsBlock from '../../Components/ReviewsBlock/ReviewsBlock'
import { ReviewType } from '../../redux/slices/items/slice'


export enum NavStatusType {
    Characteristics = 'Характеристики',
    AllAbout = 'Всё о товаре',
    Reviews = 'Отзывы',
    Photo = 'Фото'
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


const navValues = ['Всё о товаре', 'Характеристики', 'Отзывы', 'Фото'] as NavStatusType[]

const FullItem: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [itemData, setItemData] = useState<ItemFullInfoType>()

    const [activeNav, setActiveNav] = useState<NavStatusType>(NavStatusType.AllAbout)

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

    const itemInfoSwitch = (value: NavStatusType) => {
        if (itemData) {
            switch (value) {
                case NavStatusType.AllAbout: {
                    return <AllAboutItem onAddItem={onAddItem} itemData={itemData} />
                }
                case NavStatusType.Characteristics: {
                    return <ItemCharacteristics fullItemData={itemData} onAddItem={onAddItem} />
                }
                case NavStatusType.Reviews: {
                    return <ReviewsBlock fullItemData={itemData} onAddItem={onAddItem} />
                }
                default: return <AllAboutItem onAddItem={onAddItem} itemData={itemData} />
            }
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

    return (
        itemData
            ? <div className='container'>
                <Helmet>
                    <title>{itemData.title}</title>
                </Helmet>
                <div className={s.fullItem}>
                    <div className="container">
                        <nav className={s.itemNavBlock}>
                            <div className={s.itemNavList}>
                                {navValues.map(item => {
                                    return (
                                        <div
                                            key={item}
                                            onClick={() => setActiveNav(item)}
                                            className={`${s.itemNavElement} ${activeNav === item ? s.activeNav : ''}`}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </nav>
                        <div className={s.fullItemInner}>
                            {itemInfoSwitch(activeNav)}
                        </div>
                    </div>
                </div>
            </div>
            : <></>
    )
}

export default FullItem