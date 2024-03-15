import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

interface Props {
    open: boolean;
    logoOpen: React.JSX.Element;
    logoClose: React.JSX.Element;
}

const DrawerHeader: React.FC<Props> = ({
    open,
    logoOpen,
    logoClose
}) => {
    const Header = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    return (
        <Header>
            <IconButton>
                {
                    open ? logoOpen : logoClose
                }
            </IconButton>
        </Header>
    )
}

export default DrawerHeader;