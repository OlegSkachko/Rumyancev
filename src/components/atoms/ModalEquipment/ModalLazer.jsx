import React, { useState } from 'react';
import lazer from './../../../img/lazer.jpg'
import './index.css'

const ModalLazer = (props) => {

const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(300)
const [value3,setValue3] = useState(500)
const [value4,setValue4] = useState(1)
const [value5,setValue5] = useState(-35)
const [value6,setValue6] = useState(0.6)
const [value7,setValue7] = useState('FC/APC')
    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Передающий оптический модуль</h1>
                <div >

                                        Параметры передающего оптического модуля серии ID300 
                        на основе лазера с распределённой обратной связью <br/><br/>
                   
                    Длина волны излучения при +25°C, нм  =	{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
                    Длительность импульса лазера при +25°C, пс =	{value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
                    Частота следования импульсов лазера при +25°C, МГц =	0 …{value3} <input onChange={(e) => setValue3(e.target.value)}/><br/>
                    Пиковая мощность излучения лазера в импульсе при  +25°C, мВт=	{value4}±1,0 <input onChange={(e) => setValue4(e.target.value)}/><br/>
                    Выходная мощность излучения лазера при +25°C <br/>
                     и частоте следования импульсов лазера 1 МГц, дБм  = {value5}<input onChange={(e) => setValue5(e.target.value)}/><br/>
                    Ширина спектра лазера на уровне -20 дБ при +25°C, нм =	{value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
                    Оптический коннектор/полировка=	{value7} <input onChange={(e) => setValue7(e.target.value)}/><br/>
                </div>
               
                <img src={lazer}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalLazer;