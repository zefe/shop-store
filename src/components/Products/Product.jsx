import React from 'react';
import '../../assets/styles/components/product.css';

export const Product = ({ product }) => {
    return (
        <div className="products__item">
            <img src={ product.image } alt={ product.title }  />
            <h2>$ { product.price} </h2>
            <p>{ product.name }</p>
            <small>{ product.productType }</small>
            <button>Add cart</button>
        </div>
    )
}
