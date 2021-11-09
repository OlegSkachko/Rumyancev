import React, { useState } from 'react';
import ModalAttenuator from '../../atoms/ModalEquipment/ModalAttenuator';
import ModalControler1 from '../../atoms/ModalEquipment/ModalControler1';
import ModalLazer from '../../atoms/ModalEquipment/ModalLazer';
import ModalRazvetvitel from '../../atoms/ModalEquipment/ModalRazvetvitel';
import ModalVofm1 from '../../atoms/ModalEquipment/ModalVofm1';
import ModalVolokno from '../../atoms/ModalEquipment/ModalVolokno';
import ModalVolz1 from '../../atoms/ModalEquipment/ModalVolz1';
import ModalVrachatel from '../../atoms/ModalEquipment/ModalVrachatel';
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
        if(isEquipment === 2) {
            return(
             <ModalLazer
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 3) {
            return(
             <ModalAttenuator
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 4) {
            return(
             <ModalRazvetvitel
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 5) {
            return(
             <ModalVofm1
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 6) {
            return(
             <ModalControler1
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 7) {
            return(
             <ModalVrachatel
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 8) {
            return(
             <ModalVolz1
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
            <div className='oii' onClick={()=>chooseEquipment(2)}></div>
            <div className='lazer' onClick={()=>chooseEquipment(2)}></div>
            <div className='attenuator' onClick={()=>chooseEquipment(3)}></div>
            <div className='razvetvitel' onClick={()=>chooseEquipment(4)}></div>
            <div className='vofm1' onClick={()=>chooseEquipment(5)}></div>
            <div className='vrachatel' onClick={()=>chooseEquipment(7)}></div>
            <div className='controler1' onClick={()=>chooseEquipment(6)}></div>
            <div className='volz1' onClick={()=>chooseEquipment(8)}></div>
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