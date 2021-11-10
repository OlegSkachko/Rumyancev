import React, { useState } from 'react';
import volz1 from './../../../img/volz1.jpg'
import './index.css'

const ModalVolz3 = (props) => {

const [value1,setValue1] = useState(1120)
const [value2,setValue2] = useState(1650)
const [value3,setValue3] = useState(1.5)
const [value4,setValue4] = useState(50)


    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Третья волоконно-оптическая линия задержки</h1>
                <div>
Диапазон оптической задержки,  пс =	от 0 до  {value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
Рабочая длина волны, нм =от 1060 до  {value2}  <input onChange={(e) => setValue2(e.target.value)}/><br/>
Вносимые потери, дБ =	от 1 до  {value3}  <input onChange={(e) => setValue3(e.target.value)}/><br/>
Обратные потери, дБ = {value4}  <input onChange={(e) => setValue4(e.target.value)}/><br/>     
                </div>
               
                <img src={volz1}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalVolz3;