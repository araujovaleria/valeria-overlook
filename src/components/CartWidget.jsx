import React from 'react';
import card from '../images/carrinho.png';

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={card} alt="Carrinho de compras" />
        </div>
    )
}

export default CartWidget;