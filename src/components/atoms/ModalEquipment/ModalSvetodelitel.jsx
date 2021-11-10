import React, { useState } from 'react';
import svetodelitel from './../../../img/svetodelitel.jpg'
import './index.css'

const ModalSvetodelitel = (props) => {

const [value1,setValue1] = useState(0.5)

    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Поляризационный светоделитель</h1>
                <div>
                вносимыe потери, дБ   =	{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
                </div>
               
                <img src={svetodelitel}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalSvetodelitel;