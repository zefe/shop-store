import React from 'react';
import '../../assets/styles/components/header.css';


import { ReactComponent as Logo }  from '../../assets/images/Logo.svg';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <div className="header__checkout">
            <span className="ti-shopping-cart"></span>
            </div>
        </div>
    )
}
