// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

//无重复字符的最长子串

export function lengthOfLongestSubstring(string) {
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
