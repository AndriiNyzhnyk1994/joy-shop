import { useSelector } from 'react-redux'
import Item from '../Item/Item'
import s from './ItemsList.module.css'
import { RootState, useAppDispatch } from '../../redux/store'
import { Status, fetchItems } from '../../redux/slices/items/slice'
import { useEffect } from 'react'
import loadingIcon from '../../assets/images/loading.png'
import ErrorBlock from '../Error/Error'
import { addItem } from '../../redux/slices/cart/slice'


const ItemsList: React.FC = () => {
    const { items, status } = useSelector((state: RootState) => state.items)
    const dispatch = useAppDispatch()
    const getItems = async () => {
        dispatch(fetchItems({ page: '1' }))
        window.scrollTo(0, 0)
    }



    useEffect(() => {
        getItems()
    }, [])



    const itemsList = items.map(item => <li key={item.id}>
        <Item  {...item} />
    </li>)

    return (
        <main className={s.itemsBlock}>
            <div className='container'>
                {status === Status.LOADING
                    ? <div className={'loadingBlock'}>
                        <img className='loadingIcon' src={loadingIcon} alt="LOADING..." />
                    </div>
                    : <ul className={s.itemsList}>
                        {itemsList}
                    </ul>
                }
                {status === Status.ERROR
                    ? <ErrorBlock/>
                    : ''
                } 
            </div>
        </main >

    )
}

export default ItemsList