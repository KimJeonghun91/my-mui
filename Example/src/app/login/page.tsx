'use client';

import { useRouter } from 'next/navigation';
import { Box, styled } from "@mui/material";
import RootView from "../../../lib/shared/ui/rootView";
import Form from "../../../lib/widgets/Form";
import { FormValues } from "../../../lib/widgets/Form/model/types";
import { initialValues, validationSchema } from "./model/loginInfo";
import { PrivateRoutes } from '../../shared/constants/urls';
import { LogoGoogle, LogoGoogleMini } from '../../shared/assets/images';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    router.push(PrivateRoutes.Home);
  }

  return (
    <RootView>
      <LoginBackground>
        <LoginContainer>
          <Box sx={{ width: 1,  mb: 4 }}>
            <LogoGoogle width={140} height={46}/>
          </Box>

          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitText="로그인"
          />
        </LoginContainer>
      </LoginBackground>
    </RootView>
  );
}

const LoginBackground = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: `url('/bg_login.jpg')`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const LoginContainer = styled('div')({
  position: 'relative',
  minWidth: '400px',
  padding: '35px',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(4px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 14,
  marginRight: 50
});
