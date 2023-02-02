import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    modalContainer: {
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
    },
    backDrop: {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 101,
    },
    bodyContainer: {
        position: "relative",
        zIndex: 102,
        alignSelf: "center",
    }
}))