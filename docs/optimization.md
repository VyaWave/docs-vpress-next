---
sidebarDepth: 2
---

# 性能优化

![1](../assets/html/5.jpg)

---

<!-- 🎟🤹‍🤹‍🎭🎬🎼🥁🎸🚗🚌🚁✈️🚀⛵️🚤🛥🛳⛴⛽️🚦🚥🚧🚏🗽
🗼🏰🎠
⛱🏖🏝🏜🌋🏂🏋️‍🤸🏻‍🤸🏼‍⛹️‍⛹️‍🤺🏄‍🗝🛍🎁🎊🎉🎀🛍📦🎏📯📄🗞🔈📣
⛺️🗻🗻🏔⛰🏤🏥🌆🌁☎️🎥⏰🛢⚒⛏💎💰💡⌛️💣🔪⚙️💉🌡🛁🛀🏿🔑
🏄‍🏊‍🏊‍🚣‍🏆🚴‍🥇🥈🥉🏅🎖🎗🏵🎫🌊🍎🍋🍓🍇🍉🍅🍆🥝🌽🍖🍗
🐴🐌🐝🐋🐬🐅🐆🐳🐪🐘🐏🕊🐇🐓🦌🐎🐿🐉🐲🌸🌼🌻🌞🌝🍄🌾
🍥🍦🍭🎂🍭🍿🍩🍪🌰🥜🍺🍻☕️🍶🍷🥂🥃🍹🍾🏈🏀🥊⛳️🥋🎋🌱
🔕🔔🔊🗯💭🇨🇳🎍⭐️✨🌈🌚☄️💥🔥☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨❄️⛲️
🍱🍛 -->

## 一. | Webpack


### 1. moment 优化体积

  - IgnorePlugin

   > IgnorePlugin的原理是会移除moment的所有本地文件，因为我们很多时候在开发中根本不会使用到。 这个插件的使用方式如下：


  > 那么你可能会有疑问，所有本地文件都被移除了，但我想要用其中的一个怎么办。不用担心，你依然可以在代码中这样使用：
```js

const webpack = require('webpack');
module.exports = {
  //...
  plugins: [
    // 忽略 moment.js的所有本地文件
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
// 在使用中
const moment = require('moment');
require('moment/locale/ja');

moment.locale('ja');
...

```

  - ContextReplacementPlugin


```js

const webpack = require('webpack');
module.exports = {
  //...
  plugins: [
    // 只加载 `moment/locale/ja.js` 和 `moment/locale/it.js`
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),
  ],
};
// 值得注意的是，这样你就不需要在代码中再次引入本地文件了：


const moment = require('moment');
// 不需要
moment.locale('ja');
...


```


