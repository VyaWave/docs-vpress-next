// 递归生成斐波那契数列
// 公元 1202 年，意大利数学家莱昂纳多·斐波那契提出了具备以下特征的数列：
// 前两个数的值分别为 0 、1 或者 1、1；
// 从第 3 个数字开始，它的值是前两个数字的和；
// 为了纪念他，人们将满足以上两个特征的数列称为斐波那契数列。

// 如下就是一个斐波那契数列：
// 1 1 2 3 5 8 13 21 34......
// 0 1 1 2 3 5 8 13 21......
// 如下是一个伪代码形式的递归函数（方法），它可以输出斐波那契数列中指定位置处的数字：

// 首位 是  0 1
function fibonacci(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 首位 是  1 1
function fibonacci2(n) {
  if (n == 1) return 1;
  if (n == 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.info('=========  fibonacci n  =========', fibonacci(8));

function generateFibonacci(n) {
  const target = [];

  if (n == 1) return [0];

  let i = 1;
  while (i <= n) {
    target.push(fibonacci(i));
    i++;
  }

  return target;
}

console.info('=========  generateFibonacci n  =========', generateFibonacci(2));
