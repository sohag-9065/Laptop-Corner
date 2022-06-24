import React from 'react';
import SelectedLaptop from '../SelectedLaptop/SelectedLaptop';
import './Cart.css'

const Cart = ({ cart , deleteToCart , removeOne , chooseOne }) => {
    
    return (
        <div className='cart'>
            <h2 className='cart-heading'>Selected Item</h2>
            <div className="cart-container">
                {
                    cart.map(selectedLaptop => <SelectedLaptop
                        key={selectedLaptop.id}
                        selectedLaptop={selectedLaptop}
                        removeOne={removeOne}
                    ></SelectedLaptop>)
                }
            </div>
            <div className="cart-button">
                <button onClick={chooseOne} className='btn-choose-one'>Choose One From Four</button><br />
                <button onClick={deleteToCart} className='btn-select-again' title='Delete All Item'>Again Select</button>
            </div>

        </div>
    );
};

export default Cart;