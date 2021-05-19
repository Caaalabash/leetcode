// 显然，动态规划
const mod = 1e9 + 7

function fib(n) {
  if (n < 2) {
    return n
  }
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, (a+b) % mod]
  }
  return b
}
