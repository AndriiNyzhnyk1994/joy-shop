import Item from '../Item/Item'
import s from './ItemsList.module.css'

const ItemsList = () => {



    return (
        <main className={s.itemsBlock}>
            <div className='container'>
                <ul className={s.itemsList}>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                    <li>
                        <Item />
                    </li>
                </ul>
            </div>
        </main >

    )
}

export default ItemsList