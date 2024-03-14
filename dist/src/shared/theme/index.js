"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import customPalette from "./palette";
import customComponents from "./components";
export default function ThemeClient(_a) {
    var children = _a.children;
    var themeMode = 'light';
    var customTheme = useMemo(function () { return ({
        palette: customPalette(themeMode)
    }); }, [themeMode]);
    var theme = createTheme(customTheme);
    theme.components = customComponents(theme);
    return (<ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>);
}
//# sourceMappingURL=index.js.map