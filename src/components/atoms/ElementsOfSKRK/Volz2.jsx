import React from 'react';
import volz1 from './../../../img/volz1.jpg'
import './index.css'


const Volz2 = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Вторая волоконно-оптическая линия задержки <br/><br/>
                    <img className='img' src={volz1}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Volz2;