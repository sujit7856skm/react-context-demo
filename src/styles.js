import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    app: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.primary.light,
    }
}))