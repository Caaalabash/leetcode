// 记录字母上次出现的位置
function checkDistances(s, distance) {
    const cache = {}
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in cache)) {
            cache[s[i]] = i
            continue
        }
        if (distance[s[i].charCodeAt() - 97] !== i - cache[s[i]] - 1) {
            return false
        }
    }
    return true
}
