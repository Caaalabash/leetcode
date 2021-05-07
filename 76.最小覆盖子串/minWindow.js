// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
// 1 <= s.length, t.length <= 105

// 滑动窗口：
// 1. 不断增加right, 直到包含了t中所有元素
// 2. 增加left, 抛弃左侧多余的元素，得到一个结果，记录它
// 3. 让left增加一个位置，重复1-2
// 注意这里会出现大小写字母
function minWindow(s, t) {
  const need = new Array(128).fill(0)
  const have = new Array(128).fill(0)
  for (let i = 0; i < t.length; i++) {
    need[t[i].charCodeAt()]++
  }

  function haveAllNeeded() {
    for (let i = 0; i < 128; i++) {
      if (have[i] < need[i]) {
        return false
      }
    }
    return true
  }
  let resultL = -1
  let resultR = -1
  let windowSize = Number.MAX_VALUE

  for (let left = 0, right = 0; right < s.length; right++) {

    if (need[s[right].charCodeAt()] > 0) {
      have[s[right].charCodeAt()]++
    }
    while (haveAllNeeded() && left <= right) {
      // 记录结果
      if (right - left + 1 < windowSize) {
        windowSize = right - left + 1
        resultL = left
        resultR = right
      }
      // 收缩左侧位置
      if (need[s[left].charCodeAt()] > 0) {
        have[s[left].charCodeAt()]--
      }
      left++
    }
  }
  if (resultL === -1) {
    return ""
  }
  return s.slice(resultL, resultR+1)
}
