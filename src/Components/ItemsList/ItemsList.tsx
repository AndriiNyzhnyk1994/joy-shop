import React from 'react'
import Item from '../Item/Item'

const ItemsList = () => {
    return (
        <div className='items'>
            <ul className='itemsList'>
                <li>
                    <Item />
                    <Item />
                    <Item />
                </li>
            </ul>
        </div>
    )
}

export default ItemsList