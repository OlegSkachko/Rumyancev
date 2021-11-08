import React, { useState } from 'react';
import ModalVolokno from '../../atoms/ModalVolokno/ModalVolokno';
import './SKRK.css'
const SKRK = () => {

    const [isEquipment, setIsEquipment] = useState(false)
    const [ModalActiv, setModalActiv] =useState(false)
  
    function chooseEquipment(n) {
        setIsEquipment(n)
        setModalActiv(true)

    }

    function mod(){
        if(isEquipment === 1) {
            return(
             <ModalVolokno
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
    }
    

    return (
        <>
        <div className='main'>
            <div className='alisa' onClick={()=>chooseEquipment(1)}></div>
            <div className='bob' onClick={()=>chooseEquipment(1)}></div>
            <div className='oii' onClick={()=>chooseEquipment(1)}></div>
            <div className='lazer' onClick={()=>chooseEquipment(1)}></div>
            <div className='attenuator' onClick={()=>chooseEquipment(1)}></div>
            <div className='razvetvitel' onClick={()=>chooseEquipment(1)}></div>
            <div className='vofm1' onClick={()=>chooseEquipment(1)}></div>
            <div className='vrachatel' onClick={()=>chooseEquipment(1)}></div>
            <div className='controler1' onClick={()=>chooseEquipment(1)}></div>
            <div className='volz1' onClick={()=>chooseEquipment(1)}></div>
            <div className='objedinitel' onClick={()=>chooseEquipment(1)}></div>
            <div className='optovolokno' onClick={()=>chooseEquipment(1)}></div>
            <div className='controler2' onClick={()=>chooseEquipment(1)}></div>
            <div className='svetodelitel' onClick={()=>chooseEquipment(1)}></div>
            <div className='volz2' onClick={()=>chooseEquipment(1)}></div>
            <div className='vrachatel2' onClick={()=>chooseEquipment(1)}></div>
            <div className='vofm2' onClick={()=>chooseEquipment(1)}></div>
            <div className='controler3' onClick={()=>chooseEquipment(1)}></div>
            <div className='hbo' onClick={()=>chooseEquipment(1)}></div>
            <div className='volz3' onClick={()=>chooseEquipment(1)}></div>
            <div className='summator' onClick={()=>chooseEquipment(1)}></div>
            <div className='registrator' onClick={()=>chooseEquipment(1)}></div>
            <div className='strobirovanie' onClick={()=>chooseEquipment(1)}></div>
           
        </div>
        {mod()}
        </>
    );
};

export default SKRK;