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
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import DrawerHeader from './drawer-header';
import DrawerMenuList from './drawer-menu-list';
var Drawer = function (_a) {
    var menuList = _a.menuList, open = _a.open, drawerWidth = _a.drawerWidth, openedMixin = _a.openedMixin, closedMixin = _a.closedMixin;
    var DrawerContainer = styled(MuiDrawer)(function (_a) {
        var theme = _a.theme, open = _a.open;
        return (__assign(__assign({ width: drawerWidth, flexShrink: 0, whiteSpace: 'nowrap', boxSizing: 'border-box' }, (open && __assign(__assign({}, openedMixin(theme)), { '& .MuiDrawer-paper': openedMixin(theme) }))), (!open && __assign(__assign({}, closedMixin(theme)), { '& .MuiDrawer-paper': closedMixin(theme) }))));
    });
    return (<DrawerContainer variant="permanent" open={open}>
            <DrawerHeader open={open}/>
            <Divider />
            <DrawerMenuList menuList={menuList} open={open}/>
        </DrawerContainer>);
};
export default Drawer;
//# sourceMappingURL=drawer.js.map