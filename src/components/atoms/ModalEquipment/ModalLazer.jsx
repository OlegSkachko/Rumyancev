import React, { useState } from 'react';
import lazer from './../../../img/lazer.jpg'
import './index.css'
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid} from 'recharts';

const ModalLazer = (props) => {
   
const [value1,setValue1] = useState(1550)
const [value2,setValue2] = useState(300)
const [value3,setValue3] = useState(500)
const [value4,setValue4] = useState(1)
const [value5,setValue5] = useState(-35)
const [value6,setValue6] = useState(0.6)
const [value7,setValue7] = useState('FC/APC')
const [value8,setValue8] = useState(0)
const data = [ 
{name: '1548', "вероятность при ширине спектра 600пм": 0, "вероятность при ширине спектра 1500пм": 0,},
{name: '1548.5', "вероятность при ширине спектра 600пм": 0, "вероятность при ширине спектра 1500пм": 0.08,},
{name: '1549', "вероятность при ширине спектра 600пм": 0 , "вероятность при ширине спектра 1500пм": 0.3,},
{name: '1549.5', "вероятность при ширине спектра 600пм": 0.15, "вероятность при ширине спектра 1500пм": 0.71,},
{name: '1550', "вероятность при ширине спектра 600пм": 1, "вероятность при ширине спектра 1500пм": 1,},
{name: '1550.5',  "вероятность при ширине спектра 600пм": 0.15, "вероятность при ширине спектра 1500пм": 0.71,},
{name: '1551',  "вероятность при ширине спектра 600пм": 0, "вероятность при ширине спектра 1500пм": 0.3,},
{name: '1551.5',  "вероятность при ширине спектра 600пм": 0, "вероятность при ширине спектра 1500пм": 0.08,},
{name: '1552',  "вероятность при ширине спектра 600пм": 0, "вероятность при ширине спектра 1500пм": 0,},
];   
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
                    Пиковая мощность излучения лазера в импульсе при  +25°C, мВт=	{value4} <input onChange={(e) => setValue4(e.target.value)}/><br/>
                    Выходная мощность излучения лазера при +25°C <br/>
                     и частоте следования импульсов лазера 1 МГц, дБм  = {value5}<input onChange={(e) => setValue5(e.target.value)}/><br/>
                    Ширина спектра лазера на уровне -20 дБ при +25°C, нм =	{value6} <input onChange={(e) => setValue6(e.target.value)}/><br/>
                    Оптический коннектор/полировка=	{value7} <input onChange={(e) => setValue7(e.target.value)}/><br/><br/>

                    энергия в лазерном импульсе = {(value4*value2/100).toFixed(1)} пДж
                </div>
                <LineChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        
                     <XAxis dataKey="name" />
                   
                     <Legend />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="вероятность при ширине спектра 600пм" stroke="#ff7300" yAxisId={1} />
                    <Line type="monotone" dataKey="вероятность при ширине спектра 1500пм" stroke="#111111" yAxisId={2} />
                </LineChart>
                Плотность распределения вероятности генерации лазером фотона с типовой длиной волны 1550 нм  <br/><br/>
                <img src={lazer}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalLazer;