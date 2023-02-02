import { Button} from "@mui/material";
import React from "react";
import { useConfig } from "../../contexts/ConfigProvider";
import CustomSelect from "../../shared/CustomSelect";
import AddBook from "../AddBook";
import { useStyles } from "./styles";

function Header() {
    const styles = useStyles();
    const { toggleModal } = useConfig();
    const onAddNewBook = () => {
        toggleModal(true, {
            onClose: () => toggleModal(false),
            component: AddBook
        }
        )
    }

    return (
        <div className={styles.header}>
            <div>Book Store</div>
            <div>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className={styles.addBook}
                    onClick={onAddNewBook}
                >
                    Add new book
                </Button>
                <CustomSelect
                    size="small"
                    color="secondary"
                    title={"THME"}
                    variant="outlined"
                />
            </div>
        </div>
    );
}

export default Header;

