"use client";
import React from 'react';
import Box from '@mui/material/Box';
import { DrawerButton } from '@/features/layout';
import useLayoutDrawer from './model/useLayoutDrawer';
import Drawer from './ui/drawer';
var LayoutDrawer = function (_a) {
    var menuList = _a.menuList;
    var _b = useLayoutDrawer(), open = _b.open, drawerWidth = _b.drawerWidth, handleDrawer = _b.handleDrawer, openedMixin = _b.openedMixin, closedMixin = _b.closedMixin;
    return (<Box sx={{ position: 'relative' }}>
            <Drawer menuList={menuList} open={open} drawerWidth={drawerWidth} openedMixin={openedMixin} closedMixin={closedMixin}/>
            <DrawerButton handleDrawer={handleDrawer} open={open}/>
        </Box>);
};
export default LayoutDrawer;
//# sourceMappingURL=index.js.map