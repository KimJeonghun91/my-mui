"use client";

import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import { DrawerMenuProps } from './model/types';
import { LayoutDrawerProvider } from './model/useLayoutDrawer';
import Drawer from './ui/drawer';
import { DrawerButton } from './ui/drawer-button';

interface Props {
    menuList: DrawerMenuProps[];
    logoOpen: React.JSX.Element;
    logoClose: React.JSX.Element;
}

const useIsDrawerMenuList = (menuList: DrawerMenuProps[], currentPath: string) => useMemo(() =>
    menuList.some(menuItem =>
        menuItem.path === currentPath ||
        menuItem.subMenu?.some(subMenuItem => subMenuItem.path === currentPath)
    ), [menuList, currentPath]);

const LayoutDrawer: React.FC<Props> = ({ menuList, logoOpen, logoClose }) => {
    const pathName = usePathname();
    const isDrawerMenuList = useIsDrawerMenuList(menuList, pathName);

    return (
        <LayoutDrawerProvider>
            {isDrawerMenuList && (
                <Box sx={{ position: 'relative' }}>
                    <Drawer menuList={menuList} logoOpen={logoOpen} logoClose={logoClose} />
                    <DrawerButton />
                </Box>
            )}
        </LayoutDrawerProvider>
    );
};

export default LayoutDrawer;
