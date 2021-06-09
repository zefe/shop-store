import React from 'react';


import '../../assets/styles/components/header.css';
import { ReactComponent as Logo }  from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
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
            </div>
        </div>
    )
}
