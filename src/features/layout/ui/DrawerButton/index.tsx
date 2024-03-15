import React, { useState, useEffect } from "react";
import { IconButton } from '@mui/material';
import { IconRightOpen } from "../../../../shared/assets/images";

interface Props {
    handleDrawer: () => void;
    open: boolean;
}

export const DrawerButton: React.FC<Props> = ({ open, handleDrawer }) => {
    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        setRotated(open);
    }, [open]);

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
                transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={handleDrawer}
        >
            <IconRightOpen />
        </IconButton>
    )
}
