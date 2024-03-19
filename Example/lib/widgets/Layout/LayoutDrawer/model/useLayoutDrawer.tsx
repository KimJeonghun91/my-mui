import { createContext, useContext, useState } from 'react';
import { Theme, CSSObject } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { LayoutDrawerContextType, LayoutProviderProps } from './types';

const ThemeContext = createContext<LayoutDrawerContextType | null>(null);

export const useLayoutDrawer = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }: any) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const drawerWidth = 200;
    const handleToggleSubMenu = () => setSubMenuOpen(!isSubMenuOpen);

    const handleDrawer = () => {
        setOpen((prev) => {
            setSubMenuOpen(false);
            return !prev
        });

    };

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    return (
        <ThemeContext.Provider value={{
            theme,
            open,
            drawerWidth,
            handleDrawer,
            openedMixin,
            closedMixin,
            isSubMenuOpen,
            handleToggleSubMenu
        }}>
            {children}
        </ThemeContext.Provider>
    );
}
