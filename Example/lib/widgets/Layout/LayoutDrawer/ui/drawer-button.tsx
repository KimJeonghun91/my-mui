import React from "react";
import IconButton from '@mui/material/IconButton';
import { IconRightOpen } from "../../../../shared/assets/images";
import { useLayoutDrawer } from "../../model/useLayoutDrawer";

interface Props {
}

export const DrawerButton: React.FC<Props> = ({ }) => {
    const {
        open,
        handleDrawer,
    } = useLayoutDrawer();

    return (
        <IconButton
            sx={{
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
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={handleDrawer}
        >
            <IconRightOpen />
        </IconButton>
    )
}
