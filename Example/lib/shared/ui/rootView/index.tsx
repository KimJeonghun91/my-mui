import { styled } from '@mui/material/styles';

export default function RootView({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Main>{children}</Main>;
}

const Main = styled('main')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh',
    padding: 0,
  });
  