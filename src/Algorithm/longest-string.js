// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

//无重复字符的最长子串

function lengthOfLongestSubstring(string) {
  let mapping = new Map(),
    i = 0,
    l = string.length,
    maxLength = 0;

  if (l == 1) {
    return 1;
  }

  while (i < l) {
    let j = i;

    while (j < l) {
      let charCode = string[j].charCodeAt(0);

      if (mapping.has(charCode)) {
        maxLength = maxLength > mapping.size ? maxLength : mapping.size;

        mapping.clear();
        break;
      } else {
        mapping.set(charCode, charCode);
      }

      j++;
    }

    i++;
  }

  return maxLength;
}

// 滑动窗口
function lengthOfLongestSubstring(string) {
  const mapping = new Map();

  let start = 0,
    maxLength = 0;

  for (let end = 0; end < string.length; end++) {
    if (mapping.has(string[end])) {
      start = Math.max(start, mapping.get(string[end]) + 1);
    }

    mapping.set(string[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

lengthOfLongestSubstring('1111');
