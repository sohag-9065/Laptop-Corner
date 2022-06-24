import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
// import TheoryAnswer from '../TheoryAnswer/TheoryAnswer';
import './LaptopCorner.css';

const LaptopCorner = () => {

    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, []);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);

        if (cart.length > 3) {
            alert('Already Four Laptop Selected.\nIf you choose this laptop , please remove one from selected cart');
        }
        else if (!exist) {
            // console.log(cart.length)
            newCart = [...cart, selectedProduct];
            setCart(newCart);
        }
        else {
            alert('Already selected this laptop.\nPlease selecte another one');
        }

        // console.log(selectedProduct);
    }

    const chooseOne = () => {
        let newCart = [];
        const lenth = cart.length;
        if (lenth) {
            let x = Math.floor((Math.random() * lenth) + 0);
            // console.log(x);
            newCart = [cart[x]];
            setCart(newCart);
        }

    }

    const removeOne = selectedProduct => {
        // console.log(cart[0])
        let newCart = [];
        const rest = cart.filter(product => product.id !== selectedProduct);
        newCart = [...rest];
        setCart(newCart);

    }

    const deleteToCart = () => {
        let newCart = [];
        setCart(newCart);
    }

    return (
        <div>
            <div className='shop-laptops-container'>
                <div className="laptops-container">
                    {
                        laptops.map(laptop => <Laptop
                            key={laptop.id}
                            laptop={laptop}
                            handleAddToCart={handleAddToCart}
                        ></Laptop>)
                    }

                </div>
                {/* <div>
                    <Cart
                        cart={cart}
                        deleteToCart={deleteToCart}
                        removeOne={removeOne}
                        chooseOne={chooseOne}
                    ></Cart>
                </div> */}
            </div>
            {/* <div className='theory-container'>
                <TheoryAnswer></TheoryAnswer>
            </div> */}
        </div>
    );
};

export default LaptopCorner;