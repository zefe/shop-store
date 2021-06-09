import React from 'react';
import { Product } from './Product';
import '../../assets/styles/components/products.css';

export const Products = ({ products }) => {
    return (
        <div className="products">
        <h1>Special offers</h1>
            <div className="products__items">
                {
                    products.map( product => (
                        <Product key={ product.id } product={ product } />
                    ))
                }
            </div>
        </div>
    )
}
