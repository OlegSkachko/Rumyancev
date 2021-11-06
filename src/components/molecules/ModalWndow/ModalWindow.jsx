import React from 'react';
import './ModalWindow.css'
const ModalWindow = (props) => {
 
    return (
        <div style={{zIndex:1000, }} className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div  style={{ overflow:'scroll'}} className='modal__content' onClick={e=>e.stopPropagation()}>
                <h1>{props.title}</h1>
                {props.subtitle}
                <img style={{width:'230px', height:'230px'}} src={props.src}></img>
                <button style={{fontSize: '20px', background: 'linear-gradient(#3dc832, #fff000)'}} onClick={props.onClick1}>{props.btnName}</button>
            </div>
        </div>
    );
};

export default ModalWindow;