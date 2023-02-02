import React, { useContext, useState } from "react";
import uuid from "react-uuid";

const storeContext = React.createContext();

export function useStore() {
    return useContext(storeContext);
}

export default function StoreProvider({ children }) {
    const [books, setBooks] = useState([]);

    const addNewBook = ({ name, author }) => {
        setBooks([...books, { id: uuid(), name, author, publishDate: new Date().toLocaleDateString() }]);
    }

    const updateBook = (book) => {
        setBooks(books.map((item) => {
            if (item.id === book.id) {
                return book;
            }
            return item;
        }))
    }

    return (
        <storeContext.Provider value={{ books, addNewBook, updateBook }}>
            {children}
        </storeContext.Provider>
    )
}