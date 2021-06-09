import React, { useContext } from 'react';
import { Product } from './Product';
import AppContext from '../../context/AppContext';
import '../../assets/styles/components/products.css';

export const Products = () => {

    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    }

    return (
        <div className="products">
        <h1>Special offers</h1>
            <div className="products__items">
                {
                    products.map( product => (
                        <Product 
                            key={ product.id }
                            product={ product }
                            handleAddToCart={ handleAddToCart }
                        />
                    ))
                }
            </div>
        </div>
    )
}
