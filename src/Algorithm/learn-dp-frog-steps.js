// leet code原题：一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 10 级的台阶总共有多少种跳法。
function numberWays1(n) {
  if (n == 1) return 1;

  if (n == 2) return 2;

  return numberWays1(n - 1) + numberWays1(n - 2);
}

// console.info('========= numberWays1 =======', numberWays1(10));
// console.info('========= numberWays1 =======', numberWays1(100));

function numberWays2(n) {
  const mapping = new Map([
    [1, 1],
    [2, 2],
  ]);

  function numberWaysInside(n) {
    if (n == 1) return 1;

    if (n == 2) return 2;

    const cache = mapping.has(n);
    if (cache) {
      return mapping.get(n);
    } else {
      mapping.set(n, numberWaysInside(n - 1) + numberWaysInside(n - 2));
      return mapping.get(n);
    }
  }

  return numberWaysInside(n);
}

// console.info('========= numberWays2 =======', numberWays2(10000));

function numberWaysDp(n) {
  // 穷举
  if (n === 1) return 1;

  if (n === 2) return 2;

  // 规律递增
  let a = 1,
    b = 2,
    i = 3,
    temp = 3;

  while (i <= n) {
    temp = a + b;
    a = b;
    b = temp;
    i++;
  }

  return temp;
}

console.info('========= numberWaysDp =======', numberWaysDp(10000));
