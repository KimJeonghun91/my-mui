## MY-MUI

커스텀 MUI


## 사용법

layers 에 커스텀 컴포넌트가 정의되어져 있습니다.

나머지는 mui와 사용방법이 동일합니다.


## git npm 패키지 배포

```bash
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/..."
  },
```


## git npm 설치

1. root 에 `.npmrc` 파일 생성
    
```bash
@kimjeonghun91:registry=https://npm.pkg.github.com/
```

2. install

```bash
npm install @emotion/react@11.11.4 @emotion/styled@11.11.0 @mui/material@5.15.13 @mui/system5.15.13 @mui/x-date-pickers@6.19.6 dayjs@1.11.10
npm install @kimjeonghun91/my-mui 
```