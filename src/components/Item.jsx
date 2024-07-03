import React from 'react';

function Item({ item, onClick }) {
    return (
        <div className='item' onClick={onClick}>
            <img src={item.pictureUrl} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>R${item.price}</p>
        </div>
    );
}

export default Item;

