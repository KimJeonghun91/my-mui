'use client';

import { styled } from "@mui/material";
import RootView from "../../../lib/shared/ui/rootView";

export default function Login() {
  return (
    <RootView>
      <LoginBackground>
        <LoginBox>
          {/* 로그인 폼을 여기에 추가하세요 */}
          <div>로그인 폼</div>
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
  position: 'relative', // 가상 요소를 위한 상대 위치 지정
  width: '33.33%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(10px)',
  padding: '20px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
});
