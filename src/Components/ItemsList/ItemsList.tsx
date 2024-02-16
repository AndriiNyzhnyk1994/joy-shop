import { useSelector } from 'react-redux'
import Item from '../Item/Item'
import s from './ItemsList.module.css'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchItems } from '../../redux/slices/items/slice'
import { useEffect } from 'react'

const ItemsList: React.FC = () => {
    const {items, status} = useSelector((state: RootState) => state.items)
    const dispatch = useAppDispatch()
    const getItems = async () => {
        dispatch(fetchItems({page: '1'}))
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        getItems()
    }, [])

    console.log(items);
    
    return (
        <main className={s.itemsBlock}>
            <div className='container'>
                <ul className={s.itemsList}>
                    {items.map(item => <li key={item.id}>
                        <Item  {...item} />
                    </li>) }
                </ul>
            </div>
        </main >

    )
}

export default ItemsList