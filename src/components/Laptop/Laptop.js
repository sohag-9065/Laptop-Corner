import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Laptop.css'

const Laptop = ({handleAddToCart , laptop}) => {
    const {img, name, price, seller} = laptop;
    // console.log(laptop);
    return (
        <div className='laptop'>
            
            <img src={img} alt="" />
            <div className="laptop-info">
                <p className='laptop-name'>{name}</p>
                <p>Price:$ {price}</p>
                <p><small>Seller: {seller}</small></p>
            </div>
            <button onClick={()=> handleAddToCart(laptop)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;