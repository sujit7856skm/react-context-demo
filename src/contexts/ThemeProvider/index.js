import React, { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import { BLACKPALETTE, BLUEGRAYPALETTE, BLUEPALETTE } from "../../settings/themeSetting/blueTheme";
import { blueGrey, blue } from "@mui/material/colors";

const themeContext = createContext();

export function useTheme() {
    return useContext(themeContext);
}



export default function CustomThemeProvider({ children }) {
    const [themes] = useState([{ name: "blueGrey", primary: blueGrey.A700, secondary: "#FFFFFF" }, { name: "blue", primary: blue.A700, secondary: "#FFFFFF" }, { name: "black", primary: "#000000", secondary: "#FFFFFF" }])
    const THEMES = [BLUEGRAYPALETTE, BLUEPALETTE, BLACKPALETTE];
    const [ativeTheme, setActiveTheme] = useState(getTheme(THEMES[0]));

    const changeTheme = useCallback((newTheme = 0) => {
        setActiveTheme(getTheme(THEMES[newTheme]));
    }, [])

    return (
        <themeContext.Provider value={{ themes, changeTheme }}>
            <ThemeProvider theme={ativeTheme}>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    );
}

function getTheme(THEME) {
    return createTheme({
        palette: THEME
    })
}