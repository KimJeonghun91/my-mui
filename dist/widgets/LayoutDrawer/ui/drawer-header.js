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
import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { LogoGoogle, LogoGoogleMini } from '../../../shared/assets/images';
var DrawerHeader = function (_a) {
    var open = _a.open;
    var Header = styled('div')(function (_a) {
        var theme = _a.theme;
        return (__assign({ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: theme.spacing(0, 1) }, theme.mixins.toolbar));
    });
    return (<Header>
            <IconButton>
                {open ? <LogoGoogle /> : <LogoGoogleMini />}
            </IconButton>
        </Header>);
};
export default DrawerHeader;
//# sourceMappingURL=drawer-header.js.map