// 给一个字符串 abc => 所有连续子串（含重复）=> 统计每个子串中不重复的字符数量
// 1 <= s.length <= 10^5，这个数据规模显然不能暴力求解

// 对每一个字符i，向前找到相同的字符j，向后找到相同的字符k。当前字符对最终结果的贡献是：（i-j）*(k-i)。
// 这相当于两种方案的拼接：在字符串A（j到i）当中，字符i贡献的次数是（i-j）次。在字符串B(k-i)当中，字符i贡献的次数是（k-i）。
// 那么当两者拼接的时候，字符i对子串（j到k）的贡献就是两种方案的乘积（符合乘法公式）。
// 此外，当不存在 j 时，j 填充为 -1；当不存在 k 时，k填充为 s.length

// 存在左边界时，包含Ai的子串共 i-j+1 个，但是子串 (Aj)B(Ai) 中 Ai 无贡献，因此为 i-j
// 不存在左边界时，贡献值为 i-0+1 个，因此填充 - 1
// 右侧同理
function uniqueLetterString(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [-1])
        }
        map.get(s[i]).push(i)
    }
    let result = 0
    for (const [_, indexArr] of map.entries()) {
        indexArr.push(s.length)
        for (let i = 1; i < indexArr.length - 1; i++) {
            result += (indexArr[i] - indexArr[i - 1]) * (indexArr[i + 1] - indexArr[i])
        }
    }
    return result
}