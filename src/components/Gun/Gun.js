import React from 'react';
import './Gun.css'
const Gun = ({gun,cartCount,showDetails}) => {
    const {name,img,bullet,capacity,price, category,action } = gun;
   
    return (
        <div className='card-body'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <div className='card-info'>
                <h3>{name}</h3>
                <h3>price: ${price}</h3>
                <h4>bullet: {bullet}</h4>
                <h4>capacity: {capacity}</h4>
                <h4>category: {category}</h4>
                <h4>action: {action}</h4>
            </div>
            <div className='btn-container'>
                <button onClick={()=>cartCount()} className='btn'>add to cart </button>
                <button onClick={()=>showDetails(gun)} className='btn'> details</button>          
            </div>
            
        </div>
    );
};

export default Gun;