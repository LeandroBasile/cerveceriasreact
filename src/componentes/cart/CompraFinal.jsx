import React from 'react';
import { useCartContext } from '../context/CartContext';

export const CompraFinal = () => {
    
    const { orden } = useCartContext();

  
    return (<div>

    <h1>{orden && `Su numero de orden es: ${orden}`}</h1>



    </div>);
};
