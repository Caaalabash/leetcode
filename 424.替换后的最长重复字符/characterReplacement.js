// 替换后的最长重复字符
// 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。
// 在执行上述操作后，找到包含重复字母的最长子串的长度。

// 滑动窗口
// 注意不要求连续
function characterReplacement(s, k) {
    const length = s.length
    // 记录区间内各字符的出现次数
    const cache = {}
    // max = 区间内字符出现次数的最大值
    let max = 0,
        left = 0,
        right = 0

    while(right < length) {
        s[right] in cache ? cache[s[right]]++ : cache[s[right]] = 1
        max = Math.max(max, cache[s[right]])
        // if也可以
        while (right - left + 1 - max > k) {
            s[left] in cache && cache[s[left]]--
            left++
        }
        right++
    }
    return right - left
}