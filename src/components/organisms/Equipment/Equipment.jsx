import React, { useState } from 'react';
import Attenuator from '../../atoms/ElementsOfSKRK/Attenuator.jsx';
import Controler1 from '../../atoms/ElementsOfSKRK/Controler1.jsx';
import Lazer from '../../atoms/ElementsOfSKRK/Lazer.jsx';
import Razvetvitel from '../../atoms/ElementsOfSKRK/Razvetvitel.jsx';
import Vofm1 from '../../atoms/ElementsOfSKRK/Vofm1.jsx';
import Volokno from '../../atoms/ElementsOfSKRK/Volokno.jsx';
import Volz1 from '../../atoms/ElementsOfSKRK/Volz1.jsx';
import Vrachatel from '../../atoms/ElementsOfSKRK/Vrachatel.jsx';
import ModalAttenuator from '../../atoms/ModalEquipment/ModalAttenuator.jsx';
import ModalControler1 from '../../atoms/ModalEquipment/ModalControler1.jsx';
import ModalLazer from '../../atoms/ModalEquipment/ModalLazer.jsx';
import ModalRazvetvitel from '../../atoms/ModalEquipment/ModalRazvetvitel.jsx';
import ModalVofm1 from '../../atoms/ModalEquipment/ModalVofm1.jsx';
import ModalVolokno from '../../atoms/ModalEquipment/ModalVolokno.jsx';
import ModalVolz1 from '../../atoms/ModalEquipment/ModalVolz1.jsx';
import ModalVrachatel from '../../atoms/ModalEquipment/ModalVrachatel.jsx';


import './Equipment.css'
const Equipment = (props) => {
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
        <div>
           {mod()}
           <div>
                <Volokno onClick={()=>chooseEquipment(1)}/>
                <Lazer onClick={()=>chooseEquipment(2)}/>
                <Attenuator onClick={()=>chooseEquipment(3)}/>
                <Razvetvitel onClick={()=>chooseEquipment(4)}/>
                <Vofm1 onClick={()=>chooseEquipment(5)}/>
                <Controler1 onClick={()=>chooseEquipment(6)}/>
                <Vrachatel onClick={()=>chooseEquipment(7)}/>
                <Volz1 onClick={()=>chooseEquipment(8)}/>
                
            </div>
        </div>
    );
};

export default Equipment;