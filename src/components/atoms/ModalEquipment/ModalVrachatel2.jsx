import React, { useState } from 'react';
import vrachatel from './../../../img/vrachatel.jpg'
import './index.css'

const ModalVrachatel2 = (props) => {

const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(0.5)
const [value3,setValue3] = useState(0.2)
const [value4,setValue4] = useState(0.5)
const [value5,setValue5] = useState(55)
const [value6,setValue6] = useState(18)
const [value7,setValue7] = useState(50)
const [value8,setValue8] = useState('Panda')

    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Второй вращатель плоскости поляризации</h1>
                <div>

Рабочая длина волны, нм  =	{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
Максимальный допуск по углу поворота поляризации, градус =	{value2}  <input onChange={(e) => setValue2(e.target.value)}/><br/>
Зависимость угла поворота поляризации от температуры, градуса/°С =	{value3}  <input onChange={(e) => setValue3(e.target.value)}/><br/>
Вносимые потери, дБ, менее  =	{value4}  <input onChange={(e) => setValue4(e.target.value)}/><br/>
Возвратные потери, дБ, более =	{value5}  <input onChange={(e) => setValue5(e.target.value)}/><br/>
Коэффициент экстинкции, дБ, более  =	{value6}  <input onChange={(e) => setValue6(e.target.value)}/><br/>
Диапазон рабочих температур, °C = 0 … {value7}  <input onChange={(e) => setValue7(e.target.value)}/><br/>
Тип оптического волокна =	{value8}  <input onChange={(e) => setValue8(e.target.value)}/><br/>

                </div>
               
                <img src={vrachatel}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalVrachatel2;