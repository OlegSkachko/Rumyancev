import React from 'react';
import objedinitel from './../../../img/objedinitel.jpg'
import './index.css'


const Objedinitel = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    Поляризационный объединитель  <br/><br/>
                    <img className='img' src={objedinitel}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Objedinitel;
