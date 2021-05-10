// 无重复字符的最长子串

function lengthOfLongestSubstring(s) {
  if (!s) {
    return 0
  }
  const counter = {}
  let result = 1
  let left = 0
  let right = 0

  while (right < s.length) {
    if (!(s[right] in counter)) {
      // 记录首次出现索引
      counter[s[right]] = right
    } else {
      // 优化点：重复时，left指针移动到首次出现索引的下一个位置
      const oldLeft = left
      left = counter[s[right]] + 1
      for (let i = oldLeft; i < left; i++) {
        delete counter[s[i]]
      }
      counter[s[right]] = right
    }
    result = Math.max(result, right - left + 1)
    right++
  }

  return result
}
