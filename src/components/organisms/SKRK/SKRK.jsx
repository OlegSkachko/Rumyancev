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
import q from './../../../img/q.mp3'
import ModalObjedinitel from '../../atoms/ModalEquipment/ModalObjedinitel';
import ModalAlisa from '../../atoms/ModalEquipment/ModalAlisa';
import ModalBob from '../../atoms/ModalEquipment/ModalBob';
import ModalControler2 from '../../atoms/ModalEquipment/ModalControler2';
import ModalSvetodelitel from '../../atoms/ModalEquipment/ModalSvetodelitel';
import ModalVolz2 from '../../atoms/ModalEquipment/ModalVolz2';
import ModalVrachatel2 from '../../atoms/ModalEquipment/ModalVrachatel2';
import ModalVofm2 from '../../atoms/ModalEquipment/ModalVofm2';
import ModalControler3 from '../../atoms/ModalEquipment/ModalControler3';
import ModalHbo from '../../atoms/ModalEquipment/ModalHbo';
import ModalVolz3 from '../../atoms/ModalEquipment/ModalVolz3';
import ModalSummator from '../../atoms/ModalEquipment/ModalSummator';
import ModalRegistrator from '../../atoms/ModalEquipment/ModalRegistrator';
import ModalStrobirovanie from '../../atoms/ModalEquipment/ModalStrobirovanie';


const SKRK = () => {
    let audio = new Audio(q)
    const [isEquipment, setIsEquipment] = useState(false)
    const [ModalActiv, setModalActiv] =useState(false)
  
    function chooseEquipment(n) {
        setIsEquipment(n)
        setModalActiv(true)

    }
   
    function mod(){
        audio.play()
        if(isEquipment === 100) {
            return(
             <ModalBob
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 101) {
            return(
             <ModalAlisa
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
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
        if(isEquipment === 9) {
            return(
             <ModalObjedinitel
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 10) {
            return(
             <ModalControler2
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 11) {
            return(
             <ModalSvetodelitel
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 12) {
            return(
             <ModalVolz2
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 13) {
            return(
             <ModalVrachatel2
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 14) {
            return(
             <ModalVofm2
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 15) {
            return(
             <ModalControler3
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 16) {
            return(
             <ModalHbo
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 17) {
            return(
             <ModalVolz3
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 18) {
            return(
             <ModalSummator
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 19) {
            return(
             <ModalRegistrator
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
        if(isEquipment === 20) {
            return(
             <ModalStrobirovanie
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }

    }
    

    return (
        <>
        <div className='main'>
            <div className='alisa' onClick={()=>chooseEquipment(101)}></div>
            <div className='bob' onClick={()=>chooseEquipment(100)}></div>
            <div className='oii' onClick={()=>chooseEquipment(2)}></div>
            <div className='lazer' onClick={()=>chooseEquipment(2)}></div>
            <div className='attenuator' onClick={()=>chooseEquipment(3)}></div>
            <div className='razvetvitel' onClick={()=>chooseEquipment(4)}></div>
            <div className='vofm1' onClick={()=>chooseEquipment(5)}></div>
            <div className='vrachatel' onClick={()=>chooseEquipment(7)}></div>
            <div className='controler1' onClick={()=>chooseEquipment(6)}></div>
            <div className='volz1' onClick={()=>chooseEquipment(8)}></div>
            <div className='objedinitel' onClick={()=>chooseEquipment(9)}></div>
            <div className='optovolokno' onClick={()=>chooseEquipment(1)}></div>
            <div className='controler2' onClick={()=>chooseEquipment(10)}></div>
            <div className='svetodelitel' onClick={()=>chooseEquipment(11)}></div>
            <div className='volz2' onClick={()=>chooseEquipment(12)}></div>
            <div className='vrachatel2' onClick={()=>chooseEquipment(13)}></div>
            <div className='vofm2' onClick={()=>chooseEquipment(14)}></div>
            <div className='controler3' onClick={()=>chooseEquipment(15)}></div>
            <div className='hbo' onClick={()=>chooseEquipment(16)}></div>
            <div className='volz3' onClick={()=>chooseEquipment(17)}></div>
            <div className='summator' onClick={()=>chooseEquipment(18)}></div>
            <div className='registrator' onClick={()=>chooseEquipment(19)}></div>
            <div className='strobirovanie' onClick={()=>chooseEquipment(20)}></div>
           
        </div>
        {mod()}
        </>
    );
};

export default SKRK;