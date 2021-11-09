import React from 'react';
import './index.css'
import attenuator from './../../../img/attenuator.jpg'

const Attenuator = (props) => {
    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Регулируемый волоконно-оптический аттенюатор <br/><br/>
                <img className='img' src={attenuator}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Attenuator;