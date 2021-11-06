import React, { useState } from 'react';
import ModalWindow from '../../molecules/ModalWndow/ModalWindow.jsx';
import './Equipment.css'
const Equipment = (props) => {
    const [isByBusiness, setIsByBusiness] = useState(false)
    const [ModalActiv, setModalActiv] =useState(false)
  
    function buyBusiness() {
        setIsByBusiness(true)
        setModalActiv(true)
    }

    function mod(){
        if(isByBusiness) {
            return(
             <ModalWindow
             title='...'
             subtitle='...'
            //  src={myBusiness}
             btnName='закрыть'
             onClick1={()=>{setModalActiv(false)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
        }
    }

    return (
        <div>
           {mod()}
           
            <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    оптический однофотонный передатчик
                    <button  onClick={buyBusiness}>подробнее</button>
                </div>
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    оптический однофотонный приёмник 
                    <button onClick={buyBusiness}>подробнее</button>
                </div>
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    волоконно-оптическая линия связи
                    <button  onClick={buyBusiness}>подробнее</button>
                </div>
               
            </div>
        </div>
    );
};

export default Equipment;