import React, { useState } from 'react';
import hbo from './../../../img/hbo.jpg'
import './index.css'

const ModalHbo = (props) => {

const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(15)
const [value3,setValue3] = useState(60)
const [value4,setValue4] = useState(3.4)
const [value5,setValue5] = useState(0.3)
const [value6,setValue6] = useState(20)
const [value7,setValue7] = useState(85)
const [value8,setValue8] = useState(85)


    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Направленный волоконный ответвитель Х-типа </h1>
                <div>
Длина волны, нм =	{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
Ширина полосы пропускания, нм	±  =	{value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
Возвратные потери, дБ, более =	{value3} <input onChange={(e) => setValue3(e.target.value)}/><br/>
Вносимые потери, дБ, не более =	{value4} <input onChange={(e) => setValue4(e.target.value)}/><br/>
Неоднородность вносимых потерь, дБ, менее = {value5}<input onChange={(e) => setValue5(e.target.value)}/><br/>
Коэффициент экстинкции, дБ, более =	{value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
Выравнивание осей	медленные и быстрые оси рабочие; медленные оси рабочие, быстрые заблокированы<br/>
Тип волокна	PMF Panda на всех портах<br/>
Диапазон рабочих температур, °C	-40 … +	{value7} <input onChange={(e) => setValue7(e.target.value)}/><br/>
Диапазон температур хранения, °C	-40 … +{value8} <input onChange={(e) => setValue8(e.target.value)}/><br/>
                   
                </div>
               
                <img src={hbo}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalHbo;