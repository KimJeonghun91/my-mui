
## 설치

```bash
npm i rn-auto-height-webview react-native-webview
```

## 사용법

```tsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AutoHeightWebview from './dist';

const App = () => {
  const tempImg = 'https://barabom.me/assets/images/history/im_history_barabom_v2.png';

  const renderHtml = `
  <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0">
        <style>
        img { display: block; max-width: 100%;  }
        </style>
      </head>
      <body>
          <img src="${tempImg || ''}" />
          <img src="${tempImg || ''}" />
          <img src="${tempImg || ''}" />
          <img src="${tempImg || ''}" />
      </body>
  </html>
  `;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <AutoHeightWebview
          renderHtml={renderHtml}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

```
