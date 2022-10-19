// 重复数字会很多，转换为求不重复的，这样空间消耗少一点
function numDupDigitsAtMostN(n) {
    const str = String(n)
    const len = str.length
    const dfs = memo((recur, i, mask, isLimit, hasNumber) => {
        if (i === len) {
            return Number(hasNumber)
        }
        let result = 0
        if (!hasNumber) {
            result = recur(i + 1, mask, false, false)
        }
        const down = hasNumber ? 0 : 1
        const up = isLimit ? Number(str[i]) : 9
        for (let k = down; k <= up; k++) {
            if ((mask >> k & 1) === 0) {
                result += recur(i + 1, mask | (1 << k), isLimit && k === up, true)
            }
        }
        return result
    })
    return n - dfs(0, 0, true, false)
}

function memo(fn) {
    const cache = new Map()
    return function recur(...args) {
        const key = args.toString()
        if (cache.has(key)) {
            return cache.get(key)
        }
        return cache.set(key, fn(recur, ...args)).get(key)
    }
}