import React, { useState } from 'react';
import attenuator from './../../../img/attenuator.jpg'
import './index.css'

const ModalAttenuator = (props) => {

const [value1,setValue1] = useState(30)
const [value2,setValue2] = useState(-40)


    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Регулируемый волоконно-оптический аттенюатор </h1>
                <div>
                Потери энергии в аттенюаторе,дБ  =	0 … {value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
                Рабочий диапазон температур -20...+50С.
                Возвратные потери, дБ   =	{value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
                </div>
               
                <img src={attenuator}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalAttenuator;