import React from 'react';
import '../assets/styles/views/checkout-view.css';

export const CheckoutView = () => {
    return (
        <div className="checkout">
            <h1>Order List</h1>
            <div className="checkout__products">
                <div className="row">
                    <div className="checkout__product">                    
                        <p>IMAGEN</p>
                        <h2>Bocina JBL Go 2 portátil con bluetooth deep sea blue</h2>
                        <p>1</p>
                        <h2>$4,565.00</h2>
                        <span className="ti-trash"></span>
                    </div>
                    <div className="checkout__product">                    
                        <p>IMAGEN</p>
                        <h2>Bocina JBL Go 2 portátil con bluetooth deep sea blue</h2>
                        <p>1</p>
                        <h2>$4,565.00</h2>
                        <span className="ti-trash"></span>
                    </div>
                    <div className="checkout__product">                    
                        <p>IMAGEN</p>
                        <h2>Bocina JBL Go 2 portátil con bluetooth deep sea blue</h2>
                        <p>1</p>
                        <h2>$4,565.00</h2>
                        <span className="ti-trash"></span>
                    </div>
                </div>
                <div className="checkout-amount">
                    <h2>Total: $8,989.00</h2>
                    <button>Continue shopping</button>
                </div>
            </div>
        </div>
    )
}
