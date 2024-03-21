import { useMemo } from "react";
import { DrawerMenuProps, DrawerMenuSubProps } from "../../widgets/Layout/model/types";

export const isPrivateRoute = (menuList: DrawerMenuProps[], currentPath: string) => useMemo(() =>
    menuList.some(menuItem =>
        menuItem.path === currentPath ||
        menuItem.subMenu?.some(subMenuItem => subMenuItem.path === currentPath)
    ), [menuList, currentPath]);

export const getTitleByPath = (menuList: DrawerMenuProps[], path: string): DrawerMenuProps | DrawerMenuSubProps | null => {
    for (const item of menuList) {
        if (item.path === path) {
            return item;
        }

        if (item.subMenu) {
            for (const subItem of item.subMenu) {
                if (subItem.path === path) {
                    return subItem;
                }
            }
        }
    }

    return null;
};