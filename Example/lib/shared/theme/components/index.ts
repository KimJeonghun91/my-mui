import { Theme } from '@mui/material';
import ListItemButton from './ListItemButton';
import ListItemText from './ListItemText';
import AppBar from './AppBar';
import Card from './Card';
import Drawer from './Drawer';

export default function CustomComponents(theme: Theme) {
  return Object.assign(
    ListItemButton(theme),
    ListItemText(theme),
    AppBar(theme),
    Card(theme),
    Drawer(theme),
  );
}
