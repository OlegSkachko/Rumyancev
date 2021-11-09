import React from 'react';
import controler1 from './../../../img/controler1.jpg'
import './index.css'


const Controler1 = (props) => {

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    Первый контроллер поляризации <br/><br/>
                    <img className='img' src={controler1}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Controler1;