import React from 'react';
import alisa from './../../../img/alisa.jpg'
import './index.css'



const Bob = (props) => {
    

    return (
        <div className="shop">
            
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    Станция Боб <br/><br/>
                    
                    <img className='img' src={alisa}></img>

                   
                    <button  onClick={props.onClick}>подробнее</button>
                    
                </div>
        </div>
    );
};

export default Bob;