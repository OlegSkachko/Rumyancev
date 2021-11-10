import React from 'react';
import vofm1 from './../../../img/vofm1.jpg'
import './index.css'


const Vofm2 = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Второй волоконно-оптический фазовый модулятор <br/><br/>
                    <img className='img' src={vofm1}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Vofm2;