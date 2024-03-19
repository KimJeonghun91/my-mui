"use client";

import React from 'react';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import { DrawerMenuProps } from './model/types';
import { LayoutDrawerProvider } from './model/useLayoutDrawer';
import Drawer from './ui/drawer';
import { DrawerButton } from './ui/drawer-button';
import { isPrivateRoute } from '../../shared/utils';

interface Props {
    menuList: DrawerMenuProps[];
    logoOpen: React.JSX.Element;
    logoClose: React.JSX.Element;
}


const LayoutDrawer: React.FC<Props> = ({ menuList, logoOpen, logoClose }) => {
    const pathName = usePathname();
    const isDrawerVisible = isPrivateRoute(menuList, pathName);

    return (
        <LayoutDrawerProvider>
            {isDrawerVisible && (
                <Box sx={{ position: 'relative' }}>
                    <Drawer menuList={menuList} logoOpen={logoOpen} logoClose={logoClose} />
                    <DrawerButton />
                </Box>
            )}
        </LayoutDrawerProvider>
    );
};

export default LayoutDrawer;
