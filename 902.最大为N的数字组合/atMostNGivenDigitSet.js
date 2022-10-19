// 数位DP
function atMostNGivenDigitSet(digits, n) {
    const str = String(n)
    const len = str.length
    const dfs = memo((recur, i, limit, hasFillNumber) => {
        if (i === len) {
            return Number(hasFillNumber)
        }
        let result = 0
        if (!hasFillNumber) {
            result = recur(i + 1, false, false)
        }
        const upLimit = limit ? str[i] : '9'
        for (const char of digits) {
            if (char > upLimit) break
            result += recur(i + 1, limit && upLimit === char, true)
        }
        return result
    })
    return dfs(0, true, false)
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