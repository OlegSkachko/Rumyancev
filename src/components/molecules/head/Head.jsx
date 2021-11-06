import React from 'react';
import "./Header.css"

const Head = (props) => {
    return (
        <header id="header">
            <div id="logo">
                <div id="logotype"></div>
                <h3 class="logo-zag">ЮФУ<br/>ИКТИБ<br/>ИБТКС</h3>
            </div>
            <nav id="header-navbar">
                <button className="navbar-btn" onClick={props.project}><a>О проекте</a></button>
                <button className="navbar-btn" onClick={props.skrk}><a>Расчет СКРК</a></button>
                <button className="navbar-btn" onClick={props.equipment}><a>Оборудование</a></button>
</nav>
</header>
    );
};

export default Head;