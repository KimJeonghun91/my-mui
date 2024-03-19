import {  Theme, CSSObject } from "@mui/material";
import { ReactNode } from "react";

export interface DrawerMenuSubProps {
    title: string;
    labelIcon?: React.ReactElement;
    path: string;
}

export interface DrawerMenuProps {
    title: string;
    labelIcon: React.ReactElement;
    path: string;
    subMenu?: DrawerMenuSubProps[] | [];
}

export interface UseLayoutDrawerProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    drawerWidth: number;
    handleDrawer: () => void;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
    handleToggleSubMenu: () => void;
}

export interface LayoutDrawerContextType {
    theme: Theme;
    open: boolean;
    drawerWidth: number;
    handleDrawer: () => void;
    openedMixin: (theme: Theme) => CSSObject;
    closedMixin: (theme: Theme) => CSSObject;
    isSubMenuOpen: boolean;
    handleToggleSubMenu: () => void;
}

export interface LayoutProviderProps {
    children: ReactNode;
}