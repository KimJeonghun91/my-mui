## MY-MUI

커스텀 MUI

<br/><br/>

## 컴포넌트

- [ ]  lib/shared/lib/react-query
- [x]  lib/shared/theme
- [ ]  lib/widgets/Table
- [ ]  lib/widgets/Filter
- [x]  lib/widgets/LayoutDrawer
- [x]  lib/widgets/Form
    - [x]  ui/field-text
    - [ ]  ui/field-text-area
    - [ ]  ui/field-select
    - [ ]  ui/field-date
    - [ ]  ui/field-date-range
    - [ ]  ui/field-check-group
    - [ ]  ui/field-radio-group
    - [ ]  ui/field-switch
    - [ ]  ui/field-upload-image
    - [ ]  ui/field-upload-file


<br/><br/>

## 사용법

FSD 규칙에 따른 커스텀 컴포넌트

개발시 lib에 코드를 작성하고 src 내부에서 lib을 사용해야됨.

- lib/entities

- lib/features

- lib/shared

- lib/widgets



<br/><br/>

## 테스트 방법

- install:dev

- start:dev



<br/><br/>

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

- build:npm

- publish:npm



<br/><br/>

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