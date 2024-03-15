"use client";

import React from 'react';
import Box from '@mui/material/Box';
import { DrawerMenuProps } from './model/types';
import { LayoutDrawerProvider } from './model/useLayoutDrawer';
import Drawer from './ui/drawer';
import { DrawerButton } from './ui/drawer-button';

interface Props {
    menuList: DrawerMenuProps[];
}

const LayoutDrawer: React.FC<Props> = ({ menuList }) => {
    return (
        <LayoutDrawerProvider>
            <Box sx={{ position: 'relative' }}>
                <Drawer menuList={menuList} />
                <DrawerButton />
            </Box>
        </LayoutDrawerProvider>
    )
}

export default LayoutDrawer;