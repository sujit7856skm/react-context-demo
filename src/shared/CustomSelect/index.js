import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeProvider";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        margin: "0px 10px",
    },
    listContainer: {
        width: "170px",
        position: "absolute",
        backgroundColor: theme.palette.primary.light,
        top: 'calc(100% + 2px)',
        right: 0,
        fontSize: "14px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "6px",
        boxShadow: `-10px 10px 10px ${theme.palette.primary.dark}`,
        zIndex: 200,
    },
    themes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
        cursor: "pointer",

    },
    noBorder: {
        borderBottom: "none",
    },
    themeLabel: {
        color: theme.palette.primary.dark,
    },
    colorCircle: {
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        display: "flex",
        overflow: "hidden",
        "&>div": {
            width: "50%",
            height: "100%",
        }
    },
    btn: {
        borderRadius: '6px',
        textTransform: 'capitalize',
        height: "35px"
    }
}))

export default function CustomSelect({ size, color, variant, title, className, rootStyles, listContainerStyles, children }) {
    const styles = useStyles();
    const { themes, changeTheme } = useTheme();
    const [openThemeMenu, setOpenThemeMenu] = useState(false);

    const handleThemeSelect = (index) => {
        changeTheme(index);
        setOpenThemeMenu(!openThemeMenu);
    }

    return (
        <div className={clsx(styles.container)}>
            <Button
                size={size}
                color={color}
                variant={variant}
                className={styles.btn}
                onClick={() => setOpenThemeMenu(!openThemeMenu)}
            >
                {title}
            </Button>
            {openThemeMenu && (
                <div className={clsx(styles.listContainer)}>
                    {themes.map((theme, index) => (
                        <div
                            className={clsx(styles.themes, index === themes.length - 1 && styles.noBorder)}
                            onClick={() => handleThemeSelect(index)}
                        >
                            <div className={styles.themeLabel}>{theme.name}</div>
                            <div className={styles.colorCircle}>
                                <div style={{ backgroundColor: theme.primary }}></div>
                                <div style={{ backgroundColor: theme.secondary }}></div>
                            </div>
                        </div>
                    ))}
                </div>)}
        </div>
    );
}



