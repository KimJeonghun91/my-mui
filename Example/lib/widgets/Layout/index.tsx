"use client";

import React, { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import LayoutDrawer from './LayoutDrawer';
import { isPrivateRoute } from '../../shared/utils';
import { DrawerMenuProps } from './LayoutDrawer/model/types';
import { LayoutDrawerProvider } from './LayoutDrawer/model/useLayoutDrawer';
import { Box } from '@mui/material';
import LayoutAppBar from './LayoutAppBar';

interface Props {
    menuList: DrawerMenuProps[];
    logoOpen: React.JSX.Element;
    logoClose: React.JSX.Element;
}

const Layout: React.FC<PropsWithChildren<Props>> = ({ menuList, logoOpen, logoClose, children }) => {
    const pathName = usePathname();
    const isDrawerVisible = isPrivateRoute(menuList, pathName);

    return (
        <LayoutDrawerProvider>
            <Box sx={{ display: 'flex' }}>
                {isDrawerVisible &&
                    <LayoutDrawer menuList={menuList} logoOpen={logoOpen} logoClose={logoClose} />}

                <Box component="main" sx={{ flexGrow: 1 }}>
                    {isDrawerVisible &&
                        <LayoutAppBar menuList={menuList} />}

                    {children}
                </Box>
            </Box>
        </LayoutDrawerProvider>
    );
};

export default Layout;
