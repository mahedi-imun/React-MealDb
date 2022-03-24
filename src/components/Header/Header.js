import React from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import './Header.css'

const Header = ({count}) => {
    return (
        <nav className='nav-container'>
            <div > <h3 className='nav-logo'> Fire on </h3></div>
            <div className='nav-items-container'>
                <div className='nav-items'>
                    <a href="/home">Home</a>
                    <a href="/Gun">Gun</a>
                    <a style={{
                        fontSize: "2rem",
                        marginTop: "5px"
                    }}
                        href="/Cart">
                        <BsFillCartCheckFill />
                        <sup>{count}</sup>
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Header;