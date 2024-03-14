var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import UpArrow from '@/shared/assets/images/UpArrow';
import { SvgBox } from '@/shared/ui/svgBox';
import { Box, Collapse, styled } from '@mui/material';
import DrawerMenuSub from './drawer-menu-item-sub';
import useLayoutDrawer from '../model/useLayoutDrawer';
import DrawerTooltipSub from './drawer-tooltip-sub';
var DrawerMenuItem = function (_a) {
    var _b;
    var menuItem = _a.menuItem, pathName = _a.pathName, open = _a.open;
    var router = useRouter();
    var isSubMenuSelect = useState(false)[0];
    var _c = useLayoutDrawer(), isSubMenuOpen = _c.isSubMenuOpen, handleToggleSubMenu = _c.handleToggleSubMenu;
    var handleTitleMenuClick = function () {
        if (menuItem.subMenu && menuItem.subMenu.length > 0) {
            handleToggleSubMenu();
        }
        else {
            router.push(menuItem.path);
        }
        ;
    };
    return (<SubMenuToolTip title={!open && menuItem.subMenu && menuItem.subMenu.length > 0 ? <DrawerTooltipSub menuItem={menuItem} pathName={pathName}/> : ''} placement="right">
            <Box sx={{ px: 0.8, position: 'relative' }}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton onClick={handleTitleMenuClick} selected={isSubMenuSelect || menuItem.path === pathName} sx={{
            height: 36,
            justifyContent: open ? 'initial' : 'center',
            px: 1,
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: 2.5,
        }}>
                        {(menuItem === null || menuItem === void 0 ? void 0 : menuItem.labelIcon) && (<ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 1.5 : 'auto',
                ml: open ? 0 : 0.8,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                                    {menuItem.labelIcon}
                                </ListItemIcon>)}

                        <ListItemText primary={menuItem.title} sx={{ opacity: open ? 1 : 0 }}/>

                        {open && menuItem.subMenu && menuItem.subMenu.length > 0 && (<SvgBox svg={<UpArrow />} sx={{
                transform: isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s',
            }}/>)}
                    </ListItemButton>
                </ListItem>

                <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit sx={{ display: open ? 'flex' : 'none' }}>
                    {(_b = menuItem === null || menuItem === void 0 ? void 0 : menuItem.subMenu) === null || _b === void 0 ? void 0 : _b.map(function (subMenuItem, subIndex) { return (<DrawerMenuSub key={subIndex} menuItem={subMenuItem} isSelected={subMenuItem.path === pathName} open={open}/>); })}
                </Collapse>

            </Box>
        </SubMenuToolTip>);
};
var SubMenuToolTip = styled(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<Tooltip {...props} classes={{ popper: className }}/>);
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(tooltipClasses.tooltip)] = {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
        _b);
});
export default DrawerMenuItem;
//# sourceMappingURL=drawer-menu-item.js.map