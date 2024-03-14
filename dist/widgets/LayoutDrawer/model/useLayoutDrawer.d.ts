import { Theme, CSSObject } from '@mui/material/styles';
declare const useLayoutDrawer: () => {
    open: boolean;
    drawerWidth: number;
    handleDrawer: () => void;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
    isSubMenuOpen: boolean;
    handleToggleSubMenu: () => void;
};
export default useLayoutDrawer;
//# sourceMappingURL=useLayoutDrawer.d.ts.map