import { useMemo } from "react";
import { DrawerMenuProps } from "../../widgets/Layout/LayoutDrawer/model/types";

export const isPrivateRoute = (menuList: DrawerMenuProps[], currentPath: string) => useMemo(() =>
    menuList.some(menuItem =>
        menuItem.path === currentPath ||
        menuItem.subMenu?.some(subMenuItem => subMenuItem.path === currentPath)
    ), [menuList, currentPath]);
