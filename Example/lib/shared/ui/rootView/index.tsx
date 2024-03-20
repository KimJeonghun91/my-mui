import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

interface RootViewProps {
  children: React.ReactNode;
}

const RootView: React.FC<RootViewProps> = ({
  children,
}) => {
  useEffect(() => {
    // TODO: auth Guard
  }, []);

  return (
    <Main>{children}</Main>
  );
};

export default RootView;

const Main = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
  padding: 0,
});
