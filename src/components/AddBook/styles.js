import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    addBookContainer: {
        width: "350px",
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "6px",
        padding: "10px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: `0px 0px 20px ${theme.palette.secondary.dark}`,
    },
    bookHeader: {
        fontSize: "24px",
        textAlign: "center",
        fontWeight: "600",
        color: theme.palette.secondary.main,
    },
    fieldContaianer: {
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    inputContainer: {
        margin: "10px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    input: {
        height: "35px",
        outline: "none",
        borderRadius: "6px",
        padding: "0px 10px",
        letterSpacing: "0.5px",
        color: theme.palette.secondary.main,
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.secondary.main}`,
        boxSizing: "border-box",
        "&:hover": {
            border: `1px solid ${theme.palette.secondary.dark}`,
        },
        "&:focus": {
            border: `1.5px solid ${theme.palette.secondary.dark}`,
        },
        "&::placeholder": {
            color: theme.palette.secondary.light
        }
    },
    errorText: {
        color: theme.palette.error.main,
        fontSize: "12px"
    },
    btn: {
        margin: "10px 0px",
        height: "35px",
        outline: "none",
        borderRadius: "6px",
        color: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: "transparent",
        "&:focus": {
            border: `1.5px solid ${theme.palette.secondary.dark}`,
        },
    }
}))