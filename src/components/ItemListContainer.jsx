import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const mockItems = [
    { id: 1, title: 'Item 1', description: 'Description 1', price: 10, pictureUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Item 2', description: 'Description 2', price: 20, pictureUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Item 3', description: 'Description 3', price: 30, pictureUrl: 'https://via.placeholder.com/150' },
];

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockItems);
            }, 2000);
        });

        fetchItems.then((data) => {
            setItems(data);
        });
    }, []);

    return (
        <div className='itemListContainer'>
            <h3>{greeting}</h3>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;
