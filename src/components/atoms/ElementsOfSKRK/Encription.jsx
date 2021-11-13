import React, { useState } from 'react';
import './index.css'

const Encription = () => {

    const [value1,setValue1] = useState([0,0,0,0,0,0,0,0])
    const [value2,setValue2] = useState([0,0,0,0,0,0,0,0])
    const [value3,setValue3] = useState([0,0,0,0,0,0,0,0])
    const [value4,setValue4] = useState([0,0,0,0,0,0,0,0])
    const [value5,setValue5] = useState([0,0,0,0,0,0,0,0])
    const [value6,setValue6] = useState([0,0,0,0,0,0,0,0])
    const [value7,setValue7] = useState([0,0,0,0,0,0,0,0])
    const [value8,setValue8] = useState([0,0,0,0,0,0,0,0])

    let stroka1
    let stroka2
    let stroka3
    let stroka4
    let stroka5 =[]
    let stroka6
    let stroka7 =[]
    let stroka8

    function generateKey() {
        stroka1 = value1.map((i)=> {
            let a = Math.trunc(Math.random()*2)
            return a === 0? 0 : 'π/2'
        })
        setValue1(stroka1)
        stroka2 = setTimeout(()=> setValue2(stroka1.map((i)=> i === 'π/2'? 1 : 0)),300)
        stroka3 = value3.map((i)=> {
            let a = Math.trunc(Math.random()*2)
            return a === 0? 0 : '3π/2'
        })
        setTimeout(()=>setValue3(stroka3),600)
        stroka4 = setTimeout(()=> setValue4(stroka3.map((i)=> i === '3π/2'? 1 : 0)),900)


        for(let i = 0; i<8; i++) {
            if(stroka1[i] === 0 && stroka3[i] === 0) {
                stroka5.push(0)
            }
            if(stroka1[i] === 'π/2' && stroka3[i] === 0 || stroka1[i] === 0 && stroka3[i] === '3π/2') {
                stroka5.push('π/2')
            }
            if(stroka1[i] === 'π/2' && stroka3[i] === '3π/2') {
                stroka5.push('π')
            }
        }
        setTimeout(()=>setValue5(stroka5),1200)
        stroka6 = setTimeout(()=> setValue6(stroka5.map((i)=> i === 0 ? '100%' : i === 'π'? 0 : '50%' )),1500)
        stroka7 = stroka5.map((i)=> i === 0 ? 0 : i === 'π'? '100%' : '50%' )
        setTimeout(()=> setValue7(stroka7),1800)
        stroka8 = setTimeout(()=> setValue8(stroka7.map((i)=> i === 0 ? 0 : i === '100%' ? 1 : '-' )),2100)
    }
    return (
        <>
        <h4>Распределение/передача ключа по протоколу B92</h4>
        <button onClick={generateKey}> сгенерировать ключ</button>
        <div className='enc'>
            <div className='enc_content title'>Фазовый сдвиг отправителя Алиса ФA</div>
                {value1.map((i) => <div className='enc_content'>{i}</div>)}
            <div className='enc_content title'>Значения бита отправителя Алиса</div>
                {value2.map((i) => <div className='enc_content'>{i}</div>)}
            <div className='enc_content title'>Фазовый сдвиг получателя Боб ФB</div>
                {value3.map((i) => <div className='enc_content'>{i}</div>)}
            <div className='enc_content title'>Значения бита получателя Боб</div>
                {value4.map((i) => <div className='enc_content'>{i}</div>)}
            <div className='enc_content title'>Разность фаз ФA-ФB</div>
                {value5.map((i) => <div className='enc_content'>{i}</div>)}
            <div className='enc_content title'>Вероятность приёма фотона 1-м однофотонным фотодетектором </div>
                {value6.map((i) => <div className='enc_content a'>{i}</div>)}
            <div className='enc_content title'>Вероятность приёма фотона 2-м однофотонным фотодетектором</div>
                {value7.map((i) => <div className='enc_content a'>{i}</div>)}
            <div className='enc_content title'>Бит ключа</div>
                {value8.map((i) => <div className={(i==='-') ? 'enc_content c': 'enc_content b'}>{i}</div>)}
        </div>

        </>
    );
};

export default Encription;