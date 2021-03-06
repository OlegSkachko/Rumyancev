import React, { useState } from 'react';
import jstat from 'jstat';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid} from 'recharts';

const KeyGenerator = () => {
   
    const [keyValue,setKeyValue] = useState(0)
    const [bloknote,setBloknote] = useState(false)
    let [bloknotKey,setBloknotKey] = useState([])
   
    const [val1,setVal1] = useState(0)
    const [val2,setVal2] = useState(0)
    const [val3,setVal3] = useState(0)

    const [itt1,setItt] = useState(0)
    const [err1,setErr] = useState(0)


    let [notClearKey,setNotClearKey] = useState([])
    let [сlearKey,setClearKey] = useState([])
    const [speed,setSpeed] = useState(0)

    const [speedLazer,setSpeedLazer] = useState(500)
    const [speedLazer1,setSpeedLazer1] = useState(500)

    const [data,setData] = useState([{'скорость передачи ключа': 0, 'правильно принятые фотоны': 0, 'количество циклов для формирования ключа заданной длины': 0}])
    
  

    function keyCount() {
      
        
        let key = []
        let clearKeyArray = []
        let countItt = 0
        let countErr = 0
      
        while(clearKeyArray.length < keyValue) {
           
            let itt = jstat.poisson.sample(0.00000003) 
            if(itt === 1) {
                key.push('ITT')
                countItt++
                continue;  
            }

            let err = jstat.poisson.sample(0.0000003) 
            if(err === 1) {
                key.push('ERR')
                countErr++
                continue;  
            }

           let poison1 = jstat.poisson.sample(0.001) 
            if(poison1 === 0) {
                key.push('_')
            
                continue;  
            }

           let stroka1 = (Math.trunc(Math.random()*2) === 0 ? 0 : 'π/2')
           let stroka2 = (stroka1 === 'π/2'? 1 : 0)
           let stroka3 = (Math.trunc(Math.random()*2) === 0? 0 : '3π/2')
           let stroka4 = (stroka3 === '3π/2'? 1 : 0)
           let stroka5

                if(stroka1 === 0 && stroka3 === 0) {
                    stroka5 = 0
                }
                if(stroka1 === 'π/2' && stroka3 === 0 || stroka1 === 0 && stroka3 === '3π/2') {
                    stroka5 ='π/2'
                }
                if(stroka1 === 'π/2' && stroka3 === '3π/2') {
                    stroka5 ='π'
                }
            
            let stroka6 = (stroka5 === 0 ? '100%' : stroka5 === 'π'? 0 : '50%' )
            let stroka7 = (stroka5 === 0 ? 0 : stroka5 === 'π'? '100%' : '50%' )
            let stroka8 = (stroka7 === 0 ? 0 : stroka7 === '100%' ? 1 : '-' )
            key.push(stroka8)

            if(stroka8 === 0 || stroka8 === 1 ) {
                clearKeyArray.push(stroka8)
            }
        
        }
      
        setNotClearKey(key)
        setClearKey(clearKeyArray)
      
        setBloknotKey([...bloknotKey, [...clearKeyArray]])
        setVal1(key.length-clearKeyArray.length)
        setVal2(clearKeyArray.length)
        console.log(speedLazer);
        let a = speedLazer*1000000
        
        setVal3(1/a*key.length.toFixed(8))
        setItt(countItt)
        setErr(countErr)
        setSpeed((1/(1/a*key.length*1000)).toFixed(2))
        let arr = [...data, {'скорость передачи ключа': (1/(key.length/500000000*1000)).toFixed(2), 'правильно принятые фотоны': clearKeyArray.length, 'количество циклов для формирования ключа заданной длины': key.length}]
   
        setData(arr)
    }

      

    return (
        <div className="shop" >
         
              
         Выберите длину ключа: <input type='number' onChange={(e) => setKeyValue(e.target.value)}/> бит   <button onClick={keyCount}> сгенерировать ключ</button><br/>
         Выберите скорость генерации импульсов лазером: <input type='number' onChange={(e) => setSpeedLazer(e.target.value)}/> MГц  <button onClick={keyCount}> ок </button>
         <LineChart
                    width={400}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        
                     {/* <XAxis dataKey="скорость передачи ключа" yAxisId={1}/> */}
                     {/* <XAxis dataKey="правильно принятые фотоны" /> */}
                     <Legend />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="количество циклов для формирования ключа заданной длины" stroke="#111111" yAxisId={1} />
                    <Line type="monotone" dataKey="правильно принятые фотоны" stroke="#ff7300" yAxisId={1} />
                    <Line type="monotone" dataKey="скорость передачи ключа" stroke="#111fff" yAxisId={1} />
                </LineChart>  
        <h4> скорость генерации импульсов лазером = {speedLazer} MГц</h4>
        <h4> количество потерянных фотонов = {val1}</h4>
        <h4> количество правильно принятых фотонов = {val2}</h4>
        <h4> количество циклов для формирования ключа заданной длины= {val2+val1}</h4>
        <h4> ключ сгенерирован за {val3.toFixed(9)} с</h4>
        <h4> скорость генерации ключа {speed} кбит/c</h4>
        <h4> количество ошибок (из-за ИТТ) = {itt1}</h4>
        <h4> количество неопределяемых фотонов = {err1}</h4> 
        <div className='key'>  <h4>сырой ключ = </h4> {notClearKey.map((i,index) => (index%110===0 && index!==0)?<>{i} <br/></>: i)} </div>  
        <div className='key'>  <h4>просеянный ключ = {сlearKey}</h4>  </div> 
       
                <div style={{'fontSize': '25px', 'fontWeight': 900}}>Блокнот ключей</div> 
                <button onClick={()=>setBloknote(true)}> показать блокнот</button>
                <button onClick={()=>setBloknote(false)}> скрыть блокнот</button><br/>
       
        
          
        <div className={bloknote === true ?'bloknot' : 'bloknotNone'  }>
        {bloknotKey.map((i) => (<>{i}<br/></>))}
        </div>
         
        </div>
    );
};

export default KeyGenerator;