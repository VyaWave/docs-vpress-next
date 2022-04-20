/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.68%)
 * Likes:    7418
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 4.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 滑动窗口
 */
var lengthOfLongestSubstring = function (s) {
  const mapping = new Map();

  let l = s.length,
    end = 0,
    start = 0,
    max = 0;

  // 从后往前找
  while (end < l) {
    const char = s[end];

    //NOTICE: 不能用 mapping.get 判断 存在 0 的情况
    const cached = mapping.has(char);

    // 重复的话, 从重复的位置后一位开始
    //
    if (cached) {
      // start = max(table.get(v) + 1, start)
      // 这段代码是用来规避哈希表查询到在滑动窗口左边的重复字符的。
      // 例如，在"tmmzuxt"这个字符串中，遍历到最后一步时，最后一个字符't'和第一个字符't'是相等的。
      // 如果没有max函数锁定住滑动窗口的左边界，start就会弹回去第一个't'的索引0处，
      // 最后输出的最长无重复子串会变成"mmzuxt"。

      start = Math.max(start, mapping.get(char) + 1);
    }
    mapping.set(char, end);

    max = Math.max(max, end - start + 1);

    end++;
  }
  return max;
};
// @lc code=end
