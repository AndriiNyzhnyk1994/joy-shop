import React, { useState } from 'react'
import s from './ItemCharacteristics.module.css'
import ItemInfoBlank, { BlankItemType } from '../ItemInfoBlank/ItemInfoBlank'
import RatingScreen from '../Rating/RatingScreen'
import cartIcon from '../../assets/images/cart.svg'
import bonusIcon from '../../assets/images/bonusIcon.svg'
import favoritesIcon from '../../assets/images/favorite.svg'
import favoritesAddedIcon from '../../assets/images/favorite-added.svg'
import { CartItemType } from '../../redux/slices/cart/slice'
import { ItemType } from '../../redux/slices/items/slice'


const itemBlankData: BlankItemType[] = [
    { 'Количество клавиш': ['87'] },
    { 'Подключение': ['Беспроводное', 'Проводное'] },
    { 'Тип упаковки': ['Retail'] },
    { 'Особенности': ['Индикатор уровня заряда'] },
    { 'Тип клавиатуры': ['Механические'] },
    { 'Раскладка': ['ENG / UKR'] },
    { 'Интерфейс': ['Blutooth', 'USB адаптер 2,4ГГц'] },
    { 'Форма': ['Без цифрового блока'] },
    { 'Вид механических переключателей': ['Тактильные'] },
    { 'Вид клавиатуры': ['Стандартная'] },
    { 'Назначение': ['Для настольного ПК'] },
    {
        'Совместимость с ОС': [
            'Android', 'Chrome OS', 'Mac OS',
            'iOS', 'iPadOS', 'Microsoft Windows'
        ]
    },
    { 'Корпус': ['Пластиковый'] },
    {
        'Комплектация': [
            'Клавиатура', '2 батареи типа AAА (установлены в устройство)',
            'USB-приемник Logi Bolt 4', 'Дополнительные клавиши эмодзи',
            'Документация пользователя'
        ]
    },
    { 'Гарантия': ['24 месяца официальной гарантии от производителя'] },
    { 'Страна регистрации бренда': ['Швейцария'] },
    { 'Страна-производитель': ['Китай'] },
]


type PropsType = {
    onAddItem: () => void
    itemData: ItemType | null
}


const ItemCharacteristics:React.FC<PropsType> = ({onAddItem, itemData}) => {

    

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        itemData
        ? <>
            <div className={s.itemTopInfo}>
                <h2 className={s.itemTopTitle}>{itemData?.title}</h2>
                <div className={s.itemRating}>
                    <RatingScreen showNumber={false} starSize={16} rating={itemData.rating} />
                    <span className={s.reviewsLink}>{itemData.reviews.length} reviews</span>
                    <span className={s.itemCode}>Code: 338500994</span>
                </div>
            </div>
            <div className={s.itemMainInfo}>
                        <ItemInfoBlank data={itemBlankData} />
                        <div className={s.purchaseInfo}>
                            <div className={s.titleAndImage}>
                                <div className={s.itemImageBlock}>
                                    <img className={s.itemImage} src={itemData.imageUrl} alt="Item Photo" />
                                    </div>
                                <p className={s.itemTitle}>{itemData.title}</p>
                            </div>
                            <div className={s.purchaseMainBlock}>
                                <div className={s.sellerInfo}>Продавец: <a href="#">JOY SHOP</a></div>
                                <div className={s.priceAndFavorites}>
                                    <div className={s.priceInfo}>
                                        <h3>{itemData.price}</h3>
                                        <span className={s.aviabile}>Есть в наличии</span>
                                    </div>
                                    <button onClick={() => { setIsFavorite((state) => !state) }} className={s.favoritesBtn}>
                                        {
                                            isFavorite
                                                ? <img className={s.favoritesIcon} src={favoritesAddedIcon} alt="To Favorites" />
                                                : <img className={s.favoritesIcon} src={favoritesIcon} alt="To Favorites" />
                                        }
                                    </button>
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
                                <div className={s.bonusInfoBlock}>
                                    <img className={s.bonusIcon} src={bonusIcon} alt="Bonus Icon" />
                                    <span className={s.bonusText}>
                                        <b>+ 20 бонусных ₴ </b>
                                        на счёт при покупке
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
        : <></>
    )
}

export default ItemCharacteristics