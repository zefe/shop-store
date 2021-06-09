import { useState } from 'react';
import initialState from '../data/products';


const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter( items => items.id !== payload.id)
        });
    };

    return {
        addToCart,
        removeFromCart,
        state,
    };


};

export default useInitialState;