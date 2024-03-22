import { styled } from '@mui/material/styles';

interface RootViewProps {
  children?: React.ReactNode;
}

const RootView: React.FC<RootViewProps> = ({
  children,
}) => {
  return (
    <Main>{children}</Main>
  );
};

export default RootView;

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.neutral,
}));