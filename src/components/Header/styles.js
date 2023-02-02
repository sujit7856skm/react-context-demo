import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    header: {
        height: "70px",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: " center",
        alignItems: "center",
        color: theme.palette.secondary.dark,
        fontSize: "22px",
        fontWeight: "600",
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        boxShadow: `0px 0px 50vh ${theme.palette.secondary.dark}`,
        "&>div": {
            width: "50%",
            display: "flex",
            alignItems: "center"
        },
        "&>div:nth-child(1)": {
            justifyContent: "center",
            fontSize: "32px"
        },
        "&>div:nth-child(2)": {
            justifyContent: "flex-end",
        }
    },
    addBook: {
        borderRadius: '6px',
        textTransform: 'capitalize',
        margin: "0px 10px",
        height: "35px"
    },
    select: {
        borderRadius: '6px',
        textTransform: 'capitalize',
        margin: "0px 10px",
        width: "150px",
        height: "35px"
    }
}))