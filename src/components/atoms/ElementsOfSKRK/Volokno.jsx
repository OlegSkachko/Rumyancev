import React from 'react';
import odnomod from './../../../img/odnomod.gif'
import './index.css'


const Volokno = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    Одномодовое оптическое волокно <br/><br/>
                    <img className='img' src={odnomod}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Volokno;