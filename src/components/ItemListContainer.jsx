import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const mockItems = [
    { id: 1, title: 'Item 1', description: 'Descrição 1', price: 10, pictureUrl: 'https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/1238f4b179e09bf142cf9226aa06d308.jpeg' },
    { id: 2, title: 'Item 2', description: 'Descrição 2', price: 20, pictureUrl: 'https://a-static.mlcdn.com.br/450x450/smartphone-motorola-moto-g04s-128gb-grafite-4gb-ram-66-cam-50mp-selfie-5mp-dual-chip/magazineluiza/238245300/aa5ab6d4f31a96d15dba0c392094971c.jpg' },
    { id: 3, title: 'Item 3', description: 'Descrição 3', price: 30, pictureUrl: 'https://a-static.mlcdn.com.br/450x450/apple-iphone-15-128gb-preto-61-48mp-ios-5g/magazineluiza/238035600/716d868f4d404bfb6f8189c688a8c74f.jpg' },
];

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

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

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='itemListContainer'>
            <h3>{greeting}</h3>
            {selectedItem ? (
                <ItemDetail item={selectedItem} />
            ) : (
                <ItemList items={items} onItemClick={handleItemClick} />
            )}
        </div>
    );
}

export default ItemListContainer;
