// 同70题
const mod = 1e9 + 7

function numWays(n) {
  let a = 1
  let b = 1
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, (a+b) % mod]
  }
  return b
}
