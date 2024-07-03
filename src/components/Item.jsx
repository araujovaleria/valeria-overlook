import React from 'react';

function Item({ item }) {
    return (
        <div className='item'>
            <img src={item.pictureUrl} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>${item.price}</p>
        </div>
    );
}

export default Item;
