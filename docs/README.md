---
sidebarDepth: 2
---

# Algorithm


## 1. 如果相邻两个颜色均相同则删除当前颜色

[连接地址](https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solution/by-via-6-2bb7/)

总共有 n 个颜色片段排成一列，每个颜色片段要么是 'A' 要么是 'B' 。给你一个长度为 n 的字符串 colors ，其中 colors[i] 表示第 i 个颜色片段的颜色。

Alice 和 Bob 在玩一个游戏，他们 轮流 从这个字符串中删除颜色。Alice 先手 。

如果一个颜色片段为 'A' 且 相邻两个颜色 都是颜色 'A' ，那么 Alice 可以删除该颜色片段。Alice 不可以 删除任何颜色 'B' 片段。
如果一个颜色片段为 'B' 且 相邻两个颜色 都是颜色 'B' ，那么 Bob 可以删除该颜色片段。Bob 不可以 删除任何颜色 'A' 片段。
Alice 和 Bob 不能 从字符串两端删除颜色片段。
如果其中一人无法继续操作，则该玩家 输 掉游戏且另一玩家 获胜 。
假设 Alice 和 Bob 都采用最优策略，如果 Alice 获胜，请返回 true，否则 Bob 获胜，返回 false。

### 解题思路

遍历查询字符串，分别计算所有的A B 移动的最大次数，最后通过移动次数来进行判断输赢。

有趣的是需要 变量 continue * 来记录当前重复的次数，巧妙重置次数。

### 代码

```typescript
function winnerOfGame(colors: string): boolean {

  let length = colors.length, i = 0, colorFirst = 'A';

  let maxAMove = 0, continueA = 0;
  let maxBMove = 0, continueB = 0;


  while (i < length) {

    if (colors.charCodeAt(i) === colorFirst.charCodeAt(0)) {

      if (continueB) continueB = 0;

      if (++continueA >= 3) maxAMove++;

    } else {
      if (continueA) continueA = 0;
      if (++continueB >= 3) maxBMove++;

    }
    i++;

  }

  return maxAMove > maxBMove;

}
```
