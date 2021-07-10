// 在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官
// 如果存在小镇法官：
// 1. 小镇法官不相信任何人
// 2. 每个人都信任小镇法官
// 3. 只有一个人同时满足条件1和条件2

// 等于找到一个节点的入度为n-1，且出度为0，且只有一个
function findJudge(n, trust) {
  // 通过一个数组记录出入度的差值
  const arr = new Array(n).fill(0)
  for (const entry of trust) {
    arr[entry[0] - 1]--
    arr[entry[1] - 1]++
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] === n - 1) {
      return i + 1
    }
  }
  return -1
}
