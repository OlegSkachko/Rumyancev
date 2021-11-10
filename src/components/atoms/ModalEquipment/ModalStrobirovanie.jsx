import React, { useState } from 'react';
import registrator from './../../../img/registrator.jpg'
import './index.css'

const ModalStrobirovanie = (props) => {
  
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Электронный блок стробирования</h1>
                <img src={registrator}></img>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalStrobirovanie;