import React, { useState } from 'react';
import vofm1 from './../../../img/vofm1.jpg'
import './index.css'

const ModalVofm1 = (props) => {

const [value1,setValue1] = useState(1625)
const [value2,setValue2] = useState(2.5)
const [value3,setValue3] = useState(45)
const [value4,setValue4] = useState(2)
const [value5,setValue5] = useState(0.5)
const [value6,setValue6] = useState(50)
const [value7,setValue7] = useState(6)
const [value8,setValue8] = useState(12)
const [value9,setValue9] = useState(5)
const [value10,setValue10] = useState(-25)

    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1> Первый волоконно-оптический фазовый модулятор</h1>
                    <h5>Верхнее плечо первого интерферометра Маха-Цендера </h5>
                <div>

<h3>Оптические характеристики</h3>
Рабочий диапазон длин волн, нм =	1530…{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
Вносимые, дБ, менее =	{value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
Возвратные потери, дБ, более =	{value3} <input onChange={(e) => setValue3(e.target.value)}/><br/>
<h3>Электрические характеристики</h3>
Электрооптическая полоса частот модуляции (ВЧ-вход), ГГц =	{value4} <input onChange={(e) => setValue4(e.target.value)}/><br/>
Пульсация S21 (ВЧ-вход), дБ = {value5} <input onChange={(e) => setValue5(e.target.value)}/><br/>
Сопротивление ВЧ-входа, Ом =	{value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
Полуволновое напряжение, В =	{value7} <input onChange={(e) => setValue7(e.target.value)}/><br/>
Электрические обратные потери (ВЧ-вход), дБ = {value8} <input onChange={(e) => setValue8(e.target.value)}/><br/>
                </div>
               
                <img src={vofm1}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalVofm1;