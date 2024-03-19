import { Theme } from '@mui/material';
import ListItemButton from './ListItemButton';
import ListItemText from './ListItemText';
import AppBar from './AppBar';

// ----------------------------------------------------------------------

export default function CustomComponents(theme: Theme) {
  return Object.assign(
    ListItemButton(theme),
    ListItemText(theme),
    AppBar(theme),
  );
}
