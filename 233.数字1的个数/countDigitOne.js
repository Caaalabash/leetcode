// 数位dp
function countDigitOne(n) {
    const str = String(n)
    const len = str.length
    const dfs = memo((recur, i, oneCount, limit, hasFillNumber) => {
        if (i === len) {
            return oneCount
        }
        let res = 0
        if (!hasFillNumber) {
            res = recur(i + 1, oneCount, false, false)
        }
        const down = hasFillNumber ? 0 : 1
        const up = limit ? Number(str[i]) : 9
        for (let k = down; k <= up; k++) {
            res += recur(i + 1, oneCount + Number(k === 1), limit && k === up, true)
        }
        return res
    })

    return dfs(0, 0, true, false)
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