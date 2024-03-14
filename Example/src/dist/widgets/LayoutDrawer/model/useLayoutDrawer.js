import { useState } from 'react';
var useLayoutDrawer = function () {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var _b = useState(false), isSubMenuOpen = _b[0], setSubMenuOpen = _b[1];
    var drawerWidth = 200;
    var handleToggleSubMenu = function () { return setSubMenuOpen(!isSubMenuOpen); };
    var handleDrawer = function () {
        setOpen(function (prev) {
            setSubMenuOpen(false);
            return !prev;
        });
    };
    var openedMixin = function (theme) { return ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    }); };
    var closedMixin = function (theme) {
        var _a;
        return (_a = {
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: "calc(".concat(theme.spacing(7), " + 1px)")
            },
            _a[theme.breakpoints.up('sm')] = {
                width: "calc(".concat(theme.spacing(8), " + 1px)"),
            },
            _a);
    };
    return {
        open: open,
        drawerWidth: drawerWidth,
        handleDrawer: handleDrawer,
        openedMixin: openedMixin,
        closedMixin: closedMixin,
        isSubMenuOpen: isSubMenuOpen,
        handleToggleSubMenu: handleToggleSubMenu
    };
};
export default useLayoutDrawer;
//# sourceMappingURL=useLayoutDrawer.js.map