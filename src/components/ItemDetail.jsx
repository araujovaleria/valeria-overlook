import React from 'react';

function ItemDetail({ item }) {
    return (
        <div className='itemDetail'>
            <img src={item.pictureUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
        </div>
    );
}

export default ItemDetail;
