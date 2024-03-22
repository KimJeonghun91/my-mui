import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { DrawerMenuProps } from '../../model/types';
import DrawerHeader from './drawer-header';
import DrawerMenuList from './drawer-menu-list';
import { useLayoutDrawer } from '../../model/useLayoutDrawer';

interface Props {
    menuList: DrawerMenuProps[];
    logoOpen: React.JSX.Element;
    logoClose: React.JSX.Element;
}

const Drawer: React.FC<Props> = ({
    menuList,
    logoOpen,
    logoClose
}) => {
    const {
        theme,
        open,
        drawerWidth,
        openedMixin,
        closedMixin
    } = useLayoutDrawer();

    return (
        <MuiDrawer variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                ...(open && {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                }),
                ...(!open && {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                }),
            }}
            open={open}
        >
            <DrawerHeader open={open} logoOpen={logoOpen} logoClose={logoClose} />
            {/* <Divider /> */}
            <DrawerMenuList menuList={menuList} open={open} />
        </MuiDrawer>
    )
}

export default Drawer;