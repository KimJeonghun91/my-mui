var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { alpha } from '@mui/material/styles';
var GREY = {
    0: '#FFFFFF',
    100: '#F1F4F6',
    200: '#E7EDF0',
    300: '#CFD6D9',
    400: '#AEB7BC',
    500: '#6E777C',
    600: '#5E696E',
    700: '#4A5256',
    800: '#353C3F',
    900: '#222729',
};
var BLUE = {
    900: "#3395FF",
    800: "#008BC7",
    700: "#0099DB",
    600: "#26B0EB",
    500: "#6BD3FF",
    400: "#A6E4FF",
    300: "#BEECFF",
    200: "#D8F3FF",
    100: "#EDFAFF",
    0: "#F7FDFF",
};
var PRIMARY = {
    lighter: BLUE[200],
    light: BLUE[300],
    main: BLUE[600],
    dark: BLUE[800],
    darker: BLUE[900],
    contrastText: '#fff',
};
var SECONDARY = {
    lighter: '#C3FFD8',
    light: '#90FFA8',
    main: '#5EFF7F',
    dark: '#2DFF59',
    darker: '#00FF32',
    contrastText: '#fff',
};
var INFO = {
    lighter: '#D4FCF9',
    light: '#88F8F8',
    main: '#00CCEB',
    dark: '#0084AB',
    darker: '#005177',
    contrastText: '#fff',
};
var SUCCESS = {
    lighter: '#E4FCE8',
    light: '#A7F6CB',
    main: '#52D6A2',
    dark: '#289B7E',
    darker: '#0F6C6A',
    contrastText: '#fff',
};
var WARNING = {
    lighter: '#FFFAE6',
    light: '#FFE680',
    main: '#FFC100',
    dark: '#B78400',
    darker: '#7A5200',
    contrastText: GREY[800],
};
var ERROR = {
    lighter: '#FFEBD9',
    light: '#FFB08C',
    main: '#FF6347',
    dark: '#B73E2E',
    darker: '#7A1F1B',
    contrastText: '#fff',
};
var COMMON = {
    common: { black: '#000', white: '#fff' },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: alpha(GREY[500], 0.25),
    action: {
        hover: alpha(GREY[500], 0.07),
        selected: alpha(GREY[500], 0.17),
        disabled: alpha(GREY[500], 0.9),
        disabledBackground: alpha(GREY[500], 0.23),
        focus: alpha(GREY[500], 0.23),
        hoverOpacity: 0.07,
        disabledOpacity: 0.47,
    },
};
export default function customPalette(themeMode) {
    var light = __assign(__assign({}, COMMON), { mode: 'light', text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500],
        }, background: { paper: '#fff', default: '#fff', neutral: GREY[200] }, action: __assign(__assign({}, COMMON.action), { active: GREY[600] }) });
    var dark = __assign(__assign({}, COMMON), { mode: 'dark', text: {
            primary: '#fff',
            secondary: GREY[500],
            disabled: GREY[600],
        }, background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: alpha(GREY[500], 0.17),
        }, action: __assign(__assign({}, COMMON.action), { active: GREY[500] }) });
    return themeMode === 'light' ? light : dark;
}
//# sourceMappingURL=palette.js.map