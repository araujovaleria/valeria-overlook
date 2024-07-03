import React from 'react';
import Item from './Item';

function ItemList({ items, onItemClick }) {
    return (
        <div className='itemList'>
            {items.map(item => (
                <Item key={item.id} item={item} onClick={() => onItemClick(item)} />
            ))}
        </div>
    );
}

export default ItemList;
