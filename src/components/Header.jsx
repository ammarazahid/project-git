import React from 'react';

function Header(){
    return(
        <header>
    <i className="fab fa-github"></i>
        <nav>
            <ul>
                <li> Why Github ? </li>
                <li> Enterprise </li>
                <li> Explore </li>
                <li> Marketplace </li>
                <li> Pricing </li>
            </ul>
        </nav>
        <input type="search" id="search" placeholder="Search Github" />
        <a href="#" id="sign"> Sign in </a>
        <a href="#" id="SignUP"> Sign up </a>
    </header>
    )
}

export default Header;