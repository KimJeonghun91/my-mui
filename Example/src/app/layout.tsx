import "../../lib/shared/css/globals.css";
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR } from "next/font/google";
import ThemeClient from "../../lib/shared/theme";
import { DRAWER_MENU_LIST } from '../shared/constants/drawerMenuList';
import { LogoGoogle, LogoGoogleMini } from '../shared/assets/images';
import Layout from '../../lib/widgets/Layout';

const defaultFont = Noto_Sans_KR({ subsets: ["latin"] });

// ! Support for defaultProps will be removed ... 경고 무시
// TODO: defaultProps 제거
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const metadata: Metadata = {
  title: "Create Custom Next App",
  description: "커스텀 해서 사용하는 Next",
};

export const viewport: Viewport = {
  width: 'device-width',
  // initialScale: 0,
  // maximumScale: 1,
  userScalable: false,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={defaultFont.className}>
        <ThemeClient>
          <Layout
            menuList={DRAWER_MENU_LIST}
            logoOpen={<LogoGoogle />}
            logoClose={<LogoGoogleMini />}
          >
            {children}
          </Layout>
        </ThemeClient>
      </body>
    </html>
  );
}
