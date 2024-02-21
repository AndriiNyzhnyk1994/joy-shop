import React from 'react'
import s from './ItemInfoBlank.module.css'

export type BlankItemType = {
    [key: string]: string[]
}

type PropsType = {
    data: BlankItemType[]
}

function ItemInfoBlank(props: PropsType) {

    const { data } = props

    return (
        <div className={s.itemBlank}>
            <ul>
                {
                    data.map((i) => {

                        const blankKey = Object.keys(i)[0]
                        const blankValues = Object.values(i)
                        
                        return (
                            <li key={blankKey} className={s.blankListItem}>
                                <span className={s.blankKey}>
                                    <span>{blankKey}</span>
                                    <span className={s.restSpace}></span></span>
                                <div className={s.blankValueBlock}>
                                    {
                                        blankValues[0].map(value => <a key={value} className={s.blankValue} href="#">{value}</a>)
                                    }
                                </div>

                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default ItemInfoBlank