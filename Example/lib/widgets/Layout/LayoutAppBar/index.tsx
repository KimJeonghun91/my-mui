'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { usePathname } from 'next/navigation';
import { DrawerMenuProps } from '../model/types';
import { getTitleByPath, isPrivateRoute } from '../../../shared/utils';
import { useLayoutDrawer } from '../model/useLayoutDrawer';
import { styled } from '@mui/material';

interface Props {
  menuList: DrawerMenuProps[];
}

export default function LayoutAppBar({ menuList }: Props) {
  const pathName = usePathname();
  const isDrawerVisible = isPrivateRoute(menuList, pathName);
  const titleName = getTitleByPath(menuList, pathName);
  const {
    open,
    drawerWidth,
  } = useLayoutDrawer();

  return (
    isDrawerVisible &&
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <AnimatedToolbar sx={{ marginLeft: open ? drawerWidth + 'px' : '60px' }}>
          <ToolbarTitle variant='subtitle1'>
            {titleName}
          </ToolbarTitle>
        </AnimatedToolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

const AnimatedToolbar = styled(Toolbar)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
}));


const ToolbarTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));