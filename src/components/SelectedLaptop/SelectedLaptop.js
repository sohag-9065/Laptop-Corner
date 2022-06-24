import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './SelectedLaptop.css'

const SelectedLaptop = ({selectedLaptop , removeOne}) => {
    const {name, img, id} = selectedLaptop;
    // console.log(id)
    return (
        <div className='cart-display'>
           
            <img src={img} alt="" />
            <p>{name}</p>
            <button  onClick={()=> removeOne(id)} className='btn-delete' title='Delete Item'>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SelectedLaptop;