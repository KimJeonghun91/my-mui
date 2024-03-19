"use client";

import React, { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import LayoutDrawer from './LayoutDrawer';
import { isPrivateRoute } from '../../shared/utils';
import { DrawerMenuProps } from './LayoutDrawer/model/types';
import { LayoutProvider } from './LayoutDrawer/model/useLayoutDrawer';
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
        <Box sx={{ display: 'flex' }}>
            <LayoutProvider>
                {isDrawerVisible && (
                    <>
                        <LayoutDrawer menuList={menuList} logoOpen={logoOpen} logoClose={logoClose} />
                        <LayoutAppBar menuList={menuList} />
                    </>
                )}
            </LayoutProvider>

            <Box component="main" sx={{ flexGrow: 1, paddingTop: isDrawerVisible ? '70px' : '0px' }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
