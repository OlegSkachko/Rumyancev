import React from 'react';
import vrachatel from './../../../img/vrachatel.jpg'
import './index.css'


const Vrachatel = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Первый вращатель плоскости поляризации (на π/2)<br/><br/>
                    <img className='img' src={vrachatel}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Vrachatel;