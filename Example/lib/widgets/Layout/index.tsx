"use client";

import React, { PropsWithChildren, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import LayoutDrawer from './LayoutDrawer';
import { Box } from '@mui/material';
import LayoutAppBar from './LayoutAppBar';
import LoadingView from '../../shared/ui/loadingView';
import { isPrivateRoute } from '../../shared/utils';
import { DrawerMenuProps } from './model/types';
import { LayoutProvider } from './model/useLayoutDrawer';

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

            <Suspense fallback={<LoadingView />}>
                <Box component="main" sx={{ flexGrow: 1, paddingTop: isDrawerVisible ? '70px' : '0px' }}>
                    {children}
                </Box>
            </Suspense>
        </Box>
    );
};

export default Layout;
