import React, { useState } from 'react'
import favoritesIcon from '../../assets/images/favorite.svg'
import favoritesAddedIcon from '../../assets/images/favorite-added.svg'
import s from './Favorites.module.css'



const Favorites = () => {

    const [isFavorite, setIsFavorite] = useState(false)

    const heartIcon = (
        <svg
            width="40"
            height="40"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );

    const fillHeart = (
        <svg
            width="40"
            height="40"
            viewBox="0 0 30 30"
            fill="1"
            stroke="none"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            <path d="M12 21.35l2.1-2.1L12 18.25 9.9 16.15l2.1-2.1z"></path>
        </svg>
    );

    return (
        <div onClick={() => setIsFavorite((isFavorite) => !isFavorite)} className={s.favoritesBlock}>
            {isFavorite ? fillHeart : heartIcon}
        </div>
    );
};

export default Favorites;