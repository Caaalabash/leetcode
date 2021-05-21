// n&(n-1)总是能将n中的最低位变成1, 其他位置保持不变
function hammingWeight(n) {
  let count = 0
  while (n) {
    n = n&(n-1)
    count++
  }
  return count
}
