export type ColorSchema = 'diary' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
type ThemeMode = 'light' | 'dark';
export default function customPalette(themeMode: ThemeMode): {
    readonly mode: "light";
    readonly text: {
        readonly primary: string;
        readonly secondary: string;
        readonly disabled: string;
    };
    readonly background: {
        readonly paper: "#fff";
        readonly default: "#fff";
        readonly neutral: string;
    };
    readonly action: {
        readonly active: string;
        readonly hover: string;
        readonly selected: string;
        readonly disabled: string;
        readonly disabledBackground: string;
        readonly focus: string;
        readonly hoverOpacity: number;
        readonly disabledOpacity: number;
    };
    readonly common: {
        black: string;
        white: string;
    };
    readonly primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly grey: {
        0: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    readonly divider: string;
} | {
    readonly mode: "dark";
    readonly text: {
        readonly primary: "#fff";
        readonly secondary: string;
        readonly disabled: string;
    };
    readonly background: {
        readonly paper: string;
        readonly default: string;
        readonly neutral: string;
    };
    readonly action: {
        readonly active: string;
        readonly hover: string;
        readonly selected: string;
        readonly disabled: string;
        readonly disabledBackground: string;
        readonly focus: string;
        readonly hoverOpacity: number;
        readonly disabledOpacity: number;
    };
    readonly common: {
        black: string;
        white: string;
    };
    readonly primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
    };
    readonly grey: {
        0: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    readonly divider: string;
};
export {};
//# sourceMappingURL=palette.d.ts.map