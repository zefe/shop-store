import React, { useContext } from 'react';
import '../../assets/styles/components/header.css';
import { ReactComponent as Logo }  from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';


export const Header = () => {

    const { state } = useContext(AppContext);
    const { cart } = state;


    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="header__checkout">
                <Link to="/checkout" >
                    <span className="ti-shopping-cart"></span>
                </Link>
                {cart.length > 0 && <div className="header__alert"><p>{ cart.length }</p></div>}          
            </div>
        </div>
    )
}
