import React from 'react'
import ItemContador from '../itemcontador/ItemContador'

export const ItemDetail = ({producto}) => {
    return (
        <div>
            {producto.title}
            <img src={producto.foto} alt="" />
            {producto.prise}
            <ItemContador/>
        </div>
    )
}
