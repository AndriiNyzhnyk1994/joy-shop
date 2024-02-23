import React from 'react'
import s from './IsAviable.module.css'



type PropsType = {
    isAviable: boolean
}


export const IsAviable: React.FC<PropsType> = ({isAviable}) => {
    return (
        isAviable
            ? <span className={s.aviabile}>Есть в наличии</span>
            : <span className={s.notAviabile}>Нет в наличии</span>
    )
}

export default IsAviable