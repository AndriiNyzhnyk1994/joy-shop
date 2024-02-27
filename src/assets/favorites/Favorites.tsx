import React, { useState } from 'react'
import favoritesIcon from '../../assets/images/favorite.svg'
import favoritesAddedIcon from '../../assets/images/favorite-added.svg'
import s from './Favorites.module.css'

function Favorites() {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <button onClick={() => { setIsFavorite((state) => !state) }} className={s.favoritesBtn}>
            {
                isFavorite
                    ? <img className={s.favoritesIcon} src={favoritesAddedIcon} alt="To Favorites" />
                    : <img className={s.favoritesIcon} src={favoritesIcon} alt="To Favorites" />
            }
        </button>
    )
}

export default Favorites