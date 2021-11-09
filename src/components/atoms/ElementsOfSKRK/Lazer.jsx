import React from 'react';
import './index.css'
import ioi from './../../../img/ioi.jpg'

const Lazer = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Передающий оптический модуль <br/><br/>
                <img className='img' src={ioi}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Lazer;