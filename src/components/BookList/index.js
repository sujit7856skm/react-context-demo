import { Typography } from "@mui/material";
import { useStore } from "../../contexts/StoreProvider";
import { useStyles } from "./styles";

function BookList() {
    const styles = useStyles();
    const { books } = useStore();
    if (!books) return null;
    return (
        books?.length > 0 && (
            <div className={styles.booksContainer}>
                <div className={styles.booksInnerContainer}>
                    {books?.map((book) => (
                        <div className={styles.bookCard} key={book.id}>
                            <div className={styles.cardHeader}>
                                <Typography className={styles.headerText}>{book.name}</Typography>
                            </div>
                            <div className={styles.cardBody}>
                                <p>Author : {book.author}</p>
                                <p>Publish : {book?.publishDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}

export default BookList;