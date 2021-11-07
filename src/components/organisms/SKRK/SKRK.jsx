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
            <div className='optovolokno' onClick={()=>chooseEquipment(1)}></div>
        </div>
        {mod()}
        </>
    );
};

export default SKRK;