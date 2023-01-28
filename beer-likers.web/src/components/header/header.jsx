import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="logo.png" height="100" width="100" alt="page logo"/>
            <h1 className="sus">Российская партия любителей пива</h1>
            <nav className="sugus">
                <ul>
                    <li><Link to="/">О нас</Link></li>
                    <li><Link to="/news">Новости</Link></li>
                    <li><Link to="/history">История партии</Link></li>
                    <li><Link to="/survey">Опрос населения</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
