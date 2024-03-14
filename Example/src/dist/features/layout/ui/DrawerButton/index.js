import * as React from "react";
import IconButton from '@mui/material/IconButton';
import { IconRightOpen } from "../../../../shared/assets/images";
export var DrawerButton = function (_a) {
    var open = _a.open, handleDrawer = _a.handleDrawer;
    var _b = React.useState(false), rotated = _b[0], setRotated = _b[1];
    React.useEffect(function () {
        setRotated(open);
    }, [open]);
    return (<IconButton sx={{
            position: 'absolute',
            top: 47,
            right: -13,
            zIndex: 9999,
            backgroundColor: 'rgba(255, 255, 255, 0.77)',
            borderRadius: 16,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(7.9px)',
            WebkitBackdropFilter: 'blur(7.9px)',
            border: '1px solid rgba(230, 230, 230, 1)',
            padding: 0.2,
            transition: 'transform 0.8s ease',
            transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
        }} onClick={handleDrawer}>
            <IconRightOpen />
        </IconButton>);
};
//# sourceMappingURL=index.js.map