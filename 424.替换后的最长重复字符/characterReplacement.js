// 替换后的最长重复字符
// 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。
// 在执行上述操作后，找到包含重复字母的最长子串的长度。

// 滑动窗口，未优化的可读版本
function characterReplacement(s, k) {
    const length = s.length
    // 记录窗口中各字符的出现次数
    const cache = {}
    let max = 0,
        left = 0,
        right = 0

    while(right < length) {
        s[right] in cache ? cache[s[right]]++ : cache[s[right]] = 1

        while (right - left + 1 - getMaxValue(cache) > k) {
            cache[s[left]]--
            left++
        }
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
}

function getMaxValue(object) {
    let val = 0
    for (const n of Object.values(object)) {
        val = Math.max(val, n)
    }
    return val
}