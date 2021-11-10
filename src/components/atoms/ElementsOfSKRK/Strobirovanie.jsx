import React from 'react';
import './index.css'
import registrator from './../../../img/registrator.jpg'

const Strobirovanie = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Электронный блок стробирования <br/><br/>
                <img className='img' src={registrator}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Strobirovanie;