"use client";

import React from 'react';
import Box from '@mui/material/Box';
import { DrawerMenuProps } from './model/types';
import { LayoutDrawerProvider } from './model/useLayoutDrawer';
import Drawer from './ui/drawer';
import { DrawerButton } from './ui/drawer-button';

interface Props {
    menuList: DrawerMenuProps[];
    logoOpen: React.JSX.Element;
    logoClose: React.JSX.Element;
}

const LayoutDrawer: React.FC<Props> = ({
    menuList,
    logoOpen,
    logoClose
}) => {
    return (
        <LayoutDrawerProvider>
            <Box sx={{ position: 'relative' }}>
                <Drawer menuList={menuList} logoOpen={logoOpen} logoClose={logoClose} />
                <DrawerButton />
            </Box>
        </LayoutDrawerProvider>
    )
}

export default LayoutDrawer;