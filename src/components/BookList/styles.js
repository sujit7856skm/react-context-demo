import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    booksContainer: {
        width: "100%",
        height: "calc(100% - 71px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        boxSizing: "border-box",
        "&::-webkit-scrollbar": {
            width: "10px",
        },
        "&::-webkit-scrollbar-track": {
            /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.secondary.light,
            borderRadius: "5px"
        }
    },
    booksInnerContainer: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    bookCard: {
        margin: "10px 10px",
        border: `1px solid ${theme.palette.primary.light}`,
        boxShadow: `10px 10px 10px ${theme.palette.primary.main}`,
        width: "250px",
        borderRadius: "6px",
        color: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    cardHeader: {
        borderBottom: `1px solid ${theme.palette.secondary.dark}`,
        width: "100%",
        paddingBottom: "5px",
    },
    headerText: {
        fontSize: "18px",
        fontWeight: 600,
        color: theme.palette.primary.dark
    },
    cardBody: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "&>p": {
            lineHeight: "20px",
            margin: " 10px 0px",
        }
    }
}))