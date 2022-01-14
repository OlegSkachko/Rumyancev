import React, { useState } from 'react';
import odnomod from './../../../img/odnomod.gif'
import './index.css'

const ModalVolokno = (props) => {

const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(1480)
const [value3,setValue3] = useState(0.12)
const [value4,setValue4] = useState(10)
const [value5,setValue5] = useState(1)
const [value6,setValue6] = useState(1.0)
const [value7,setValue7] = useState(125)
const [value8,setValue8] = useState(250)
const [value9,setValue9] = useState(5)
const [value10,setValue10] = useState(-25)
const [value11,setValue11] = useState(1.468)

    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Одномодовое оптическое волокно</h1>
                <div>
                    Центральная длина волны излучения, нм =	{value1}  <input onChange={(e) => setValue1(e.target.value)}/><br/>
                    Длина волны отсечки, менее, нм  =	{value2} <input onChange={(e) => setValue2(e.target.value)}/><br/>
                    Числовая апертура =	{value3}± 0,02 <input onChange={(e) => setValue3(e.target.value)}/><br/>
                    Диаметр поля моды, мкм =	{value4}±1,0 <input onChange={(e) => setValue4(e.target.value)}/><br/>
                    Погонное затухание, не более, дБ/км = {value5}<input onChange={(e) => setValue5(e.target.value)}/><br/>
                    Неконцентричность оболочки сердцевины, не более, мкм =	{value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
                    Диаметр отражающей оболочки, мкм =	{value7}±1,0 <input onChange={(e) => setValue7(e.target.value)}/><br/>
                    Диаметр покрытия, мкм =	{value8}±15 <input onChange={(e) => setValue8(e.target.value)}/><br/>
                    Длина биения, менее, мм =	{value9} <input onChange={(e) => setValue9(e.target.value)}/><br/>
                    Перекрёстные помехи, дБ =	{value10} <input onChange={(e) => setValue10(e.target.value)}/><br/><br/>
                    Эффективный показатель преломления = {value11} <input onChange={(e) => setValue11(e.target.value)}/><br/>
                    Скорость распространения фотона в оптическом волокне = {(300000/value11).toFixed(1)} км/c <br/>
                </div>
               
                <img src={odnomod}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalVolokno;