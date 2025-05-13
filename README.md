# React Native Dynamic Import Demo

This is a demo of dynamic import with React Native using the experimental 'Context Module' (`require.context`) feature in Metro bundler.

## Setup

`metro.config.js`

```js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer = {
  // `require.context` support
  unstable_allowRequireContext: true,
};

module.exports = config;
```

# Usage
Checking `app/index.tsx` for the implementation