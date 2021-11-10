import React from 'react';
import './index.css'
import svetodelitel from './../../../img/svetodelitel.jpg'

const Svetodelitel = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Поляризационный светоделитель  <br/><br/>
                <img className='img' src={svetodelitel}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Svetodelitel;