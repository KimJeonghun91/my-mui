import List from '@mui/material/List';
import { usePathname } from 'next/navigation';
import DrawerMenuItem from './drawer-menu-item';
var DrawerMenuList = function (_a) {
    var menuList = _a.menuList, open = _a.open;
    var pathName = usePathname();
    return (<List>
            {menuList.map(function (menuItem, index) { return (<DrawerMenuItem key={index} menuItem={menuItem} pathName={pathName} open={open}/>); })}
        </List>);
};
export default DrawerMenuList;
//# sourceMappingURL=drawer-menu-list.js.map