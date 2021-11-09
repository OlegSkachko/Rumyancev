import React from 'react';
import './index.css'
import razvetvitel from './../../../img/razvetvitel.jpg'

const Razvetvitel = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                Волоконно-оптический разветвитель <br/><br/>
                <img className='img' src={razvetvitel}></img>
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Razvetvitel;