// 模拟，KMP算法以后再说吧
// 1 <= s.length <= 1e4
function repeatedSubstringPattern(s) {
    if (s.length === 1) return false
    const n = s.length
    const maxLen = Math.floor(n / 2)
    outer:
        for (let i = 1; i <= maxLen; i++) {
            const str = s.slice(0, i)
            for (let k = i; k < n; k += i) {
                const sub = s.slice(k, k + i)
                if (str !== sub) {
                    continue outer
                }
            }
            return true
        }
    return false
}