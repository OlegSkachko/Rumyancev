import React, { useState } from 'react';
import controler1 from './../../../img/controler1.jpg'
import './index.css'

const ModalControler3 = (props) => {

const [value1,setValue1] = useState('1260 … 1620' )
const [value2,setValue2] = useState(120)
const [value3,setValue3] = useState('0 … 4π')
const [value4,setValue4] = useState('Синус, треугольник, квадрат')
const [value5,setValue5] = useState('0 … 120')
const [value6,setValue6] = useState(0.15)
const [value7,setValue7] = useState(0.05  )
const [value8,setValue8] = useState(0.05 )
const [value9,setValue9] = useState(65)
const [value10,setValue10] = useState(0.1 )
const [value11,setValue11] = useState('0 … 50')
const [value12,setValue12] = useState('-20 … +70')
const [value13,setValue13] = useState('USB, Ethernet, RS-232 и GPIB')

    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Третий контроллер поляризации</h1>
                <div>
Диапазон рабочих длин волн, нм ={value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
Скорость скремблирования поляризации, крад/с, менее = {value2}  <input onChange={(e) => setValue2(e.target.value)}/><br/>
Ручной контроль поляризации = {value3}  <input onChange={(e) => setValue3(e.target.value)}/><br/>
Форма поляризационной модуляции в каналах  = {value4}  <input onChange={(e) => setValue4(e.target.value)}/><br/>
Внешний режим запуска, крад/с  = {value5}  <input onChange={(e) => setValue5(e.target.value)}/><br/>
Вносимые потери, дБ, менее = {value6}  <input onChange={(e) => setValue6(e.target.value)}/><br/>
Поляризационно-зависимые потери, дБ, менее = {value7}  <input onChange={(e) => setValue7(e.target.value)}/><br/>
Потери при активации, дБ, менее = {value8}  <input onChange={(e) => setValue8(e.target.value)}/><br/>
Возвратные потери, дБ, более = {value9}  <input onChange={(e) => setValue9(e.target.value)}/><br/>
Поляризационно-зависимая модуляция, пс, менее = {value10}  <input onChange={(e) => setValue10(e.target.value)}/><br/>
Диапазон рабочих температур, С=  {value11}  <input onChange={(e) => setValue11(e.target.value)}/><br/>
Диапазон температур хранения, С = {value12}  <input onChange={(e) => setValue12(e.target.value)}/><br/>
Интерфейсы связи = {value13}  <input onChange={(e) => setValue13(e.target.value)}/><br/>
       
                </div>
               
                <img src={controler1}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalControler3;