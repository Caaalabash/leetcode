// 显然是双指针的解法
function isSubsequence(s, t) {
  if (s.length > t.length) {
    return false
  }
  const sLen = s.length
  const tLen = t.length
  let i = 0
  let j = 0
  while (i < sLen) {
    while (s[i] !== t[j]) {
      j++
      if (j >= tLen) {
        return false
      }
    }
    i++
    j++
  }
  return true
}
