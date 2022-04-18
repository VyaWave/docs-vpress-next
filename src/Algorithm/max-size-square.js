// https://leetcode-cn.com/problems/maximal-square/
// 221. 最大正方形
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

// 示例 1：

// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4
// 示例 2：

// 输入：matrix = [["0","1"],["1","0"]]
// 输出：1
// 示例 3：

// 输入：matrix = [["0"]]
// 输出：0

// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] 为 '0' 或 '1'

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  let dp = [];
  let max_len = 0;
  // 构建DP
  for (let i = 0; i < m; i++) {
    dp.push([]);
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = 1;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (dp[i][j] == 0) {
        continue;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max_len = Math.max(max_len, dp[i][j]);
      }
    }
  }
  // 边界问题 因为i是从开始j也是从1开始 会造成 dp[0][1] 和 dp[1][0]位置的解没考录到
  if (!max_len) {
    max_len = Math.max(max_len, dp[0][0] || 0, dp[0]?.[1] || 0, dp?.[1]?.[0] || 0);
  }
  return max_len * max_len;
};
console.info(
  '=========  [["0","1"],["1","0"]]  =========',
  maximalSquare([
    ['0', '1'],
    ['1', '0'],
  ]),
);

console.info(
  '=========  [["0","1"],["1","0"]]  =========',
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]),
);

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));

  let maxLen = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '0') continue;
      dp[i][j] = Math.min(dp[i - 1]?.[j] || 0, dp[i][j - 1] || 0, dp[i - 1]?.[j - 1] || 0) + 1;
      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }

  return maxLen * maxLen;
};
