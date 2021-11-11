
import React, { useState } from 'react';
import Alisa from '../../atoms/ElementsOfSKRK/Alisa.jsx';
import Attenuator from '../../atoms/ElementsOfSKRK/Attenuator.jsx';
import Bob from '../../atoms/ElementsOfSKRK/Bob.jsx';
import Controler1 from '../../atoms/ElementsOfSKRK/Controler1.jsx';
import Controler2 from '../../atoms/ElementsOfSKRK/Controler2.jsx';
import Controler3 from '../../atoms/ElementsOfSKRK/Controler3.jsx';
import Hbo from '../../atoms/ElementsOfSKRK/Hbo.jsx';
import Lazer from '../../atoms/ElementsOfSKRK/Lazer.jsx';
import Objedinitel from '../../atoms/ElementsOfSKRK/Objedinitel.jsx';
import Razvetvitel from '../../atoms/ElementsOfSKRK/Razvetvitel.jsx';
import Registrator from '../../atoms/ElementsOfSKRK/Registrator.jsx';
import Strobirovanie from '../../atoms/ElementsOfSKRK/Strobirovanie.jsx';
import Summator from '../../atoms/ElementsOfSKRK/Summator.jsx';
import Svetodelitel from '../../atoms/ElementsOfSKRK/Svetodelitel.jsx';
import Vofm1 from '../../atoms/ElementsOfSKRK/Vofm1.jsx';
import Vofm2 from '../../atoms/ElementsOfSKRK/Vofm2.jsx';
import Volokno from '../../atoms/ElementsOfSKRK/Volokno.jsx';
import Volz1 from '../../atoms/ElementsOfSKRK/Volz1.jsx';
import Volz2 from '../../atoms/ElementsOfSKRK/Volz2.jsx';
import Volz3 from '../../atoms/ElementsOfSKRK/Volz3.jsx';
import Vrachatel from '../../atoms/ElementsOfSKRK/Vrachatel.jsx';
import Vrachatel2 from '../../atoms/ElementsOfSKRK/Vrachatel2.jsx';
import ModalAlisa from '../../atoms/ModalEquipment/ModalAlisa.jsx';
import ModalAttenuator from '../../atoms/ModalEquipment/ModalAttenuator.jsx';
import ModalBob from '../../atoms/ModalEquipment/ModalBob.jsx';
import ModalControler1 from '../../atoms/ModalEquipment/ModalControler1.jsx';
import ModalControler2 from '../../atoms/ModalEquipment/ModalControler2.jsx';
import ModalControler3 from '../../atoms/ModalEquipment/ModalControler3.jsx';
import ModalHbo from '../../atoms/ModalEquipment/ModalHbo.jsx';
import ModalLazer from '../../atoms/ModalEquipment/ModalLazer.jsx';
import ModalObjedinitel from '../../atoms/ModalEquipment/ModalObjedinitel.jsx';
import ModalRazvetvitel from '../../atoms/ModalEquipment/ModalRazvetvitel.jsx';
import ModalRegistrator from '../../atoms/ModalEquipment/ModalRegistrator.jsx';
import ModalStrobirovanie from '../../atoms/ModalEquipment/ModalStrobirovanie.jsx';
import ModalSummator from '../../atoms/ModalEquipment/ModalSummator.jsx';
import ModalSvetodelitel from '../../atoms/ModalEquipment/ModalSvetodelitel.jsx';
import ModalVofm1 from '../../atoms/ModalEquipment/ModalVofm1.jsx';
import ModalVofm2 from '../../atoms/ModalEquipment/ModalVofm2.jsx';
import ModalVolokno from '../../atoms/ModalEquipment/ModalVolokno.jsx';
import ModalVolz1 from '../../atoms/ModalEquipment/ModalVolz1.jsx';
import ModalVolz2 from '../../atoms/ModalEquipment/ModalVolz2.jsx';
import ModalVolz3 from '../../atoms/ModalEquipment/ModalVolz3.jsx';
import ModalVrachatel from '../../atoms/ModalEquipment/ModalVrachatel.jsx';
import ModalVrachatel2 from '../../atoms/ModalEquipment/ModalVrachatel2.jsx';
import q from './../../../img/q.mp3'

import './Equipment.css'
const Equipment = (props) => {
  
    const [isEquipment, setIsEquipment] = useState(false)
    const [ModalActiv, setModalActiv] =useState(false)
    let audio = new Audio(q)
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
        <div>
           {mod()}
           <div>
                <Bob onClick={()=>chooseEquipment(100)}/>
                <Alisa onClick={()=>chooseEquipment(101)}/>
                <Volokno onClick={()=>chooseEquipment(1)}/>
                <Lazer onClick={()=>chooseEquipment(2)}/>
                <Attenuator onClick={()=>chooseEquipment(3)}/>
                <Razvetvitel onClick={()=>chooseEquipment(4)}/>
                <Vofm1 onClick={()=>chooseEquipment(5)}/>
                <Controler1 onClick={()=>chooseEquipment(6)}/>
                <Vrachatel onClick={()=>chooseEquipment(7)}/>
                <Volz1 onClick={()=>chooseEquipment(8)}/>
                <Objedinitel onClick={()=>chooseEquipment(9)}/>
                <Controler2 onClick={()=>chooseEquipment(10)}/>
                <Svetodelitel onClick={()=>chooseEquipment(11)}/>
                <Volz2 onClick={()=>chooseEquipment(12)}/>
                <Vrachatel2 onClick={()=>chooseEquipment(13)}/>
                <Vofm2 onClick={()=>chooseEquipment(14)}/>
                <Controler3 onClick={()=>chooseEquipment(15)}/>
                <Hbo onClick={()=>chooseEquipment(16)}/>
                <Volz3 onClick={()=>chooseEquipment(17)}/>
                <Summator onClick={()=>chooseEquipment(18)}/>
                <Registrator onClick={()=>chooseEquipment(19)}/>
                <Strobirovanie onClick={()=>chooseEquipment(20)}/>
                
            </div>
        </div>
    );
};

export default Equipment;