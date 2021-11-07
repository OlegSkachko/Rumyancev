import React, { useState } from 'react';
import ModalVolokno from '../../atoms/ModalVolokno/ModalVolokno.jsx';
import Volokno from '../../atoms/Volokno/Volokno.jsx';
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
    }

    return (
        <div>
           {mod()}
           <div>
           <Volokno onClick={()=>chooseEquipment(1)}/>
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    оптический однофотонный приёмник 
                    <button onClick={()=>chooseEquipment(1)}>подробнее</button>
                </div>
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    волоконно-оптическая линия связи
                    <button  onClick={()=>chooseEquipment(1)}>подробнее</button>
                </div>
               
            </div>
        </div>
    );
};

export default Equipment;