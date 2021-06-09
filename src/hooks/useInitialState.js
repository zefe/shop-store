import { useState } from 'react';
import dataProducts from '../data/products';


const useInitialState = () => {
    const [state, setstate] = useState(initialState);

    const addToCart = payload => {
        setstate({
            ...state,
            cart: [...state, payload]
        });
    }

    const removeFromCart = payload => {
        setstate({
            ...state,
            cart: state.cart.filter( items => items.id !== payload)
        });
    }

    return {
        addToCart,
        removeFromCart,
        state
    }


};

export default useInitialState;