import React from 'react';
import Encription from '../ElementsOfSKRK/Encription';
import alisa from './../../../img/alisa.jpg'
import './index.css'

const ModalAlisa = (props) => {

    
    return (
        <div className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <h1>Станция Алиса </h1>               
                <img src={alisa}></img>
                <Encription/>
                <button onClick={props.onClick1}>закрыть</button>
                </div>
        </div>
  
    );
};

export default ModalAlisa;