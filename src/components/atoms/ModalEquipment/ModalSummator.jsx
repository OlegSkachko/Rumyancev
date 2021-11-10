import React, { useState } from 'react';
import razvetvitel from './../../../img/razvetvitel.jpg'
import './index.css'

const ModalSummator = (props) => {

const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(80)
const [value3,setValue3] = useState(0.8)
const [value4,setValue4] = useState(0.6)
const [value5,setValue5] = useState(20)
const [value6,setValue6] = useState(50)
const [value7,setValue7] = useState(300)
const [value8,setValue8] = useState(70)
const [value9,setValue9] = useState(85)


    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Волоконно-оптический сумматор</h1>
                <div>
                    Длина волны излучения, нм	 =	{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
                    Ширина спектральной полосы пропускания, нм =	{value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
                    Вносимые потери, дБ менее =	{value3} <input onChange={(e) => setValue3(e.target.value)}/><br/>
                    Неравномерность вносимых потерь, дБ	менее  =	{value4} <input onChange={(e) => setValue4(e.target.value)}/><br/>
                    Коэффициент экстинкции, дБ, более = {value5}<input onChange={(e) => setValue5(e.target.value)}/><br/>
                    Возвратные потери, дБ, не менее  = {value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
                    Оптическая мощность, мВт менее  = {value7} <input onChange={(e) => setValue7(e.target.value)}/><br/>
                    Диапазон рабочих температур, °С	-5 … =	{value8} <input onChange={(e) => setValue8(e.target.value)}/><br/>
                    Диапазон температур хранения, °С -40 …=	{value9} <input onChange={(e) => setValue9(e.target.value)}/><br/>
                </div>
               
                <img src={razvetvitel}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalSummator;