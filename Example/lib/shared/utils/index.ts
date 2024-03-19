import { useMemo } from "react";
import { DrawerMenuProps } from "../../widgets/Layout/model/types";

export const isPrivateRoute = (menuList: DrawerMenuProps[], currentPath: string) => useMemo(() =>
    menuList.some(menuItem =>
        menuItem.path === currentPath ||
        menuItem.subMenu?.some(subMenuItem => subMenuItem.path === currentPath)
    ), [menuList, currentPath]);

export const getTitleByPath = (menuList: DrawerMenuProps[], path: string): string => {
    for (const item of menuList) {
        if (item.path === path) {
            return item.title;
        }

        if (item.subMenu) {
            for (const subItem of item.subMenu) {
                if (subItem.path === path) {
                    return subItem.title;
                }
            }
        }
    }

    return '';
};