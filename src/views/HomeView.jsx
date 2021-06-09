import React from 'react';
import { Products } from '../components/Products/Products';
import data from '../data/products';

export const HomeView = () => {
    console.log(data)
    return (
        <>
            <Products products={ data } />
        </>
    )
}
