'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { usePathname } from 'next/navigation';
import { DrawerMenuProps } from '../LayoutDrawer/model/types';
import { isPrivateRoute } from '../../../shared/utils';

interface Props {
  menuList: DrawerMenuProps[];
}

export default function LayoutAppBar({ menuList }: Props) {
  const pathName = usePathname();
  const isDrawerVisible = isPrivateRoute(menuList, pathName);

  return (
    isDrawerVisible &&
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to hide App bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}