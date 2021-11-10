import React, { useState } from 'react';
import objedinitel from './../../../img/objedinitel.jpg'
import './index.css'

const ModalObjedinitel= (props) => {

const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(40)
const [value3,setValue3] = useState(0,5)
const [value4,setValue4] = useState(0,7)
const [value5,setValue5] = useState(50)
const [value6,setValue6] = useState(20)
const [value7,setValue7] = useState(50)
const [value8,setValue8] = useState(300)
const [value9,setValue9] = useState(5)
const [value10,setValue10] = useState('PM Panda ')
const [value11,setValue11] = useState('SMF-28e')
const [value12,setValue12] = useState(70)
const [value13,setValue13] = useState(85)
const [value14,setValue14] = useState('5,5×35')

    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1> Поляризационный объединитель</h1>
                <div>
Центральная длина волны оптического излучения, нм = {value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
Рабочий диапазон длин волн, нм = ± {value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
Типовые вносимые потери, дБ	= {value3} <input onChange={(e) => setValue3(e.target.value)}/><br/>
Максимальные вносимые потери, дБ = {value4}±1,0 <input onChange={(e) => setValue4(e.target.value)}/><br/>
Минимальные возвратные потери, дБ	=  {value5}<input onChange={(e) => setValue5(e.target.value)}/><br/>
Коэффициент экстинкции, более, дБ	= {value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
Коэффициент направленности, более, дБ	= {value7}±1,0 <input onChange={(e) => setValue7(e.target.value)}/><br/>
Мощность оптического излучения, менее, мВт	= {value8}±15 <input onChange={(e) => setValue8(e.target.value)}/><br/>
Нагрузка на растяжение, менее, н	= {value9} <input onChange={(e) => setValue9(e.target.value)}/><br/>
Тип оптического волокна на входных портах 1 и 2	= {value10} <input onChange={(e) => setValue10(e.target.value)}/><br/>
Тип оптического волокна на выходном порте 3	={value11} <input onChange={(e) => setValue11(e.target.value)}/><br/>
Рабочая температура, С =	-5…+{value12} <input onChange={(e) => setValue12(e.target.value)}/><br/>
Температура хранения, С	= -40…+{value13} <input onChange={(e) => setValue13(e.target.value)}/><br/>
Размер упаковки (диаметр×длина), мм ={value14} <input onChange={(e) => setValue14(e.target.value)}/><br/>	
                </div>
               
                <img src={objedinitel}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalObjedinitel;