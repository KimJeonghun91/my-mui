'use client';

import { styled } from "@mui/material";
import * as yup from 'yup';
import RootView from "../../../lib/shared/ui/rootView";
import Form from "../../../lib/widgets/Form";

export default function Login() {

  // TODO: data 폴더로 빼야됨. 폴더명 data로 할지도 고민

  const initialValues = {
    email: {
      id: 'email',
      value: '',
      label: '이메일',
      type: 'text'
    },
    password: {
      id: 'password',
      value: '',
      label: '비밀번호',
      type: 'password'
    },
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const handleSubmit = () => {

  }


  return (
    <RootView>
      <LoginBackground>
        <LoginBox>
          <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}></Form>
        </LoginBox>
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

const LoginBox = styled('div')({
  position: 'relative',
  width: '33.33%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(10px)',
  padding: '20px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
});
