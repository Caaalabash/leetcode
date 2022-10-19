// 数位DP：给定一个闭区间[L,R]，求这个区间中满足"某种条件"的数的总数量
// 如果采取枚举，基本的时间复杂度就是O(n)
// 如果按位进行搜索，时间复杂是O(位数 * 进制(每一位的选择数))，就非常低了
// 通常使用记忆化搜索实现数位DP，本质上记忆化搜索就是DP
// 对于[l,r]区间的问题，通常转化为两次数位dp，即找[0,r]和[0, l-1]两段，结果相减即可
// dfs函数需要的参数，根据题目按需选择：
// i：数位
// limit：最高位限制
// lead：前导0的标记
// mask：前几位数的取值

// 1 <= n <= 2 * 10^9
// 定义f(i, mask, isLimit, hasFillNumber)表示构造从左往右第 i 位及其之后数位的合法方案数
// mask：前面选过数字的集合，第i位要选的数字不能在mask中
// isLimit：是否受到了 n 的约束，如果是，则第 i 位填入的数字最大位 s[i]，否则可以填写到 9
// hasFillNumber：前面的数位是否填了数字，如果是，则当前位必须填写数字且可以从0开始，如果不是，可以不填 or 至少填写 1

// 使用memo函数，更符合数位DP，但是性能更差
function countSpecialNumbers(n) {
    const s = String(n)
    const len = s.length
    // dfs 代表从左到右选第i个数字时，前面已选状态为 mask 时的合法方案数
    const dfs = memo((recur, i, mask, isLimit, hasFillNumber) => {
        if (i === len) {
            return hasFillNumber ? 1 : 0
        }
        let result = 0
        if (!hasFillNumber) {
            // 少填了一位数字，不可能超过n了，调整为非约束状态
            result = recur(i + 1, mask, false, false)
        }
        for (let k = hasFillNumber ? 0 : 1, end = isLimit ? s[i] - '0' : 9; k <= end; k++) {
            // 如果mask中没有数字k，就可以选中
            if (((mask >> k) & 1) === 0) {
                result += recur(i + 1, mask | (1 << k), isLimit && k === end, true)
            }
        }
        return result
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