import React from 'react';




const Volokno = (props) => {
    

    return (
        <div className="shop">
                <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    Одномодовое оптическое волокно 
                    <button  onClick={props.onClick}>подробнее</button>
                </div>
        </div>
    );
};

export default Volokno;