/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const mapping = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (mapping[char]) {
      stack.push(char);
    } else {
      if (mapping[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const a = '[(}]';

const b = isValid(a);

console.info('=========  isValid  =========', isValid(a));

const isValidVal = s => {
  const mapping = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (mapping[s[i]]) {
      stack.push(s[i]);
    } else {
      if (mapping[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.info('=========  isValidVal  =========', isValidVal('{{{{{}}}}}{}[]'));
