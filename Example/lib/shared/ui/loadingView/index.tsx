import { Box } from "@mui/material";
import { styled, keyframes } from '@mui/system';

interface Props {
}

const LoadingView: React.FC<Props> = ({
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1201,
        backgroundColor: 'rgba(50, 50, 50, 0.77)',
        backdropFilter: 'blur(7.9px)',
        WebkitBackdropFilter: 'blur(7.9px)',
        transition: 'transform 0.8s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader />
    </Box>
  );
};

export default LoadingView;

const l7Animation = keyframes`
  33%{background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%}
  50%{background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%}
  66%{background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%}
`;

// Create a styled div with the loader styles
const Loader = styled('div')(({ theme }) => ({
  width: '60px',
  aspectRatio: '4',
  background: `
    no-repeat radial-gradient(circle closest-side, rgba(255, 255, 255, 0.7) 90%, #0000) 0% 50%,
    no-repeat radial-gradient(circle closest-side, rgba(255, 255, 255, 0.7) 90%, #0000) 50% 50%,
    no-repeat radial-gradient(circle closest-side, rgba(255, 255, 255, 0.7) 90%, #0000) 100% 50%
  `,
  backgroundSize: `calc(100%/3) 100%`,
  animation: `${l7Animation} 1s infinite linear`,
}));