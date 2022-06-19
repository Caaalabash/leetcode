// dp不了，贪心来做
// 显然所有的0都可以取，只需要判断1能不能取，判断方向从高位到低位
function longestSubsequence(s, k) {
    if (parseInt(s, 2) <= k) {
        return s.length
    }
    let index = 0
    while (index < s.length) {
        if (s.charAt(index) === '0') {
            index++
        } else {
            s = `${s.slice(0, index)}${s.slice(index + 1)}`
            if (parseInt(s, 2) <= k) {
                return s.length
            }
        }
    }
}
