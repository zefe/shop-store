import React, { useContext } from 'react';
import '../assets/styles/views/checkout-view.css';
import AppContext from '../context/AppContext';

export const CheckoutView = () => {

    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;
    
    const handleRemove = product => () => {
        removeFromCart(product);
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }
    
    return (
        <div className="checkout">
            {cart.length > 0 ? <h1>Order List</h1> : <h1>Order List is empty</h1>}
            
            <div className="checkout__products">
                <div className="row">
                    {
                        cart.map((product) => (                            
                        <div className="checkout__product">                    
                            <img src={ product.image } alt={product.name} srcset="" />
                            <h2 className="hidden">{product.name}</h2>
                            <p>1</p>
                            <h2>${ product.price}</h2>
                            <span className="ti-trash" onClick={handleRemove(product) }></span>
                        </div>
                        ))
                    }
                </div>
                {
                    cart.length > 0 && (                        
                    <div className="checkout-amount">
                        <h2>{`Total: $ ${handleSumTotal()}`}</h2>
                        <button>Continue shopping</button>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
