import React from 'react';

export default function TextField() {
    return (
        <div>
            <div>
                <input className="input" type="text" name="name" onChange={handleInputChange} value={book.name} />
            </div>
        </div>
    );
}
