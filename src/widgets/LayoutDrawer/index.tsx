"use client";

import React from 'react';
import Box from '@mui/material/Box';
import { DrawerMenuProps } from './model/types';
import useLayoutDrawer from './model/useLayoutDrawer';
import Drawer from './ui/drawer';
import { DrawerButton } from '../../features/layout';

interface Props {
    menuList: DrawerMenuProps[];
}

const LayoutDrawer: React.FC<Props> = ({ menuList }) => {
    const { 
        open,
        drawerWidth,
        handleDrawer,
        openedMixin,
        closedMixin,
     } = useLayoutDrawer();

    return (
        <Box sx={{ position: 'relative' }}>
            <Drawer
                menuList={menuList}
                open={open}
                drawerWidth={drawerWidth}
                openedMixin={openedMixin}
                closedMixin={closedMixin}
            />
            <DrawerButton
                handleDrawer={handleDrawer}
                open={open}
            />
        </Box>
    )
}

export default LayoutDrawer;