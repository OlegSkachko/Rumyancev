import React from 'react';
import hbo from './../../../img/hbo.jpg'
import './index.css'


const Hbo = (props) => {

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Направленный волоконный ответвитель Х-типа  <br/><br/>
                    <img className='img' src={hbo}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Hbo;