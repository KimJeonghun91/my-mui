import React from 'react';
import { CSSObject, Theme } from '@mui/material/styles';
import { DrawerMenuProps } from '../model/types';
interface Props {
    open: boolean;
    menuList: DrawerMenuProps[];
    drawerWidth: number;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
}
declare const Drawer: React.FC<Props>;
export default Drawer;
//# sourceMappingURL=drawer.d.ts.map