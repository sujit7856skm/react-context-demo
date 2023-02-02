import { Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useStore } from "../../contexts/StoreProvider";
import { useStyles } from "./styles";

function AddBook({data}) {
    const styles = useStyles();
    const { addNewBook } = useStore();
    const [book, setBook] = useState({ name: '', author: '' });
    const [error, setError] = useState({ name: '', author: '' })

    const handleInputChange = (event) => {
        onChnageValidation(event.target.name, event.target.value)
        setBook({ ...book, [event.target.name]: event.target.value })
    }

    const onChnageValidation = useCallback((name, value) => {
        let errorState = { ...error };
        if (name === 'name') {
            errorState.name = !value ? 'Book name is required.' : '';
        } else if (name === 'author') {
            errorState.author = !value ? 'Author name is required.' : '';
        }
        setError(errorState);
        console.log(errorState);
    }, [book]);

    const formValidation = useCallback(() => {
        let errorState = { ...error };
        errorState.name = !book.name ? 'Book name is required.' : '';
        errorState.author = !book.author ? 'Author name is required.' : '';
        setError(errorState);
        return !Object.values(errorState).some(value => value);
    }, [book]);

    const hnadleOnAdd = () => {
        if (!formValidation()) return;
        addNewBook(book);
        setBook({ name: '', author: '' });
        data?.onClose && data?.onClose()
    }

    return (
        <div className={styles.addBookContainer}>
            <Typography className={styles.bookHeader}>ADD NEW BOOK</Typography>
            <div className={styles.fieldContaianer}>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type="text" name="name" placeholder="Book name" onChange={handleInputChange} value={book.name} />
                    {error.name && <span className={styles.errorText}>{error.name}</span>}
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type="text" name="author" placeholder="Author name" onChange={handleInputChange} value={book.author} />
                    {error.author && <span className={styles.errorText}>{error.author}</span>}
                </div>
                <button className={styles.btn} onClick={hnadleOnAdd}>ADD BOOK</button>
            </div>
        </div>
    );
}

export default AddBook;