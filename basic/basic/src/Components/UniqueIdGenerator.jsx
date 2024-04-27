import React, { useState } from 'react';

const UniqueIdGenerator = () => {
    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const items = [
        { id: generateUniqueId(), name: 'Item 1', description: 'Description for Item 1' },
        { id: generateUniqueId(), name: 'Item 2', description: 'Description for Item 2' },
        { id: generateUniqueId(), name: 'Item 3', description: 'Description for Item 3' }
    ];

    const [selectedItemId, setSelectedItemId] = useState(null);

    const selectItem = (itemId) => {
        setSelectedItemId(itemId === selectedItemId ? itemId : null);
    };

    return (
        <div>
            <h2>Items List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <div>
                            {console.log(selectedItemId === item.id)}
                            <strong>{item.name}</strong>
                            {/* Render description only if the item is selected */}
                            {selectedItemId === item.id && (
                                <form>
                                    <label>
                                        Description:
                                        <input type="text" value={item.description} readOnly />
                                    </label>
                                </form>
                            )}
                        </div>
                        {/* Button to select item */}
                        <button onClick={() => selectItem(item.id)}>Select</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UniqueIdGenerator;
