import React from 'react';
import './card-container.styles.scss';

const CardContainer = () => {
    return (
        <div className='card-container'>
            {
               [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((x,index) => <div key={x} className='div'> {x} </div>)
            }
        </div>
    )
}

export default CardContainer;
