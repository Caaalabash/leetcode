// 假设num的长度为n，则需要在n-1个空隙中插入：+、-、*
// 那么定义递归函数backTrack，考虑他的参数：
// expr: 当前构建出来的表达式
// i: 当前枚举到第i个数字
// res: 当前表达式计算结果
// mul: 表达式最后一个连乘串的计算结果
function addOperators(num, target) {
    const n = num.length
    const result = []
    const backTrack = (expr, i, res, mul) => {
        if (i === n) {
            if (res === target) {
                result.push(expr)
            }
            return
        }
        // 不能有前导0
        for (let j = i; j < n && (j === i || num[i] !== '0'); j++) {
            const val = Number(num.slice(i, j + 1))
            // 表达式开头不要符号
            if (i === 0) {
                backTrack(String(val), j + 1, val, val)
            } else {
                // 选择加法
                backTrack(`${expr}+${val}`, j + 1, res + val, val)
                // 选择减法
                backTrack(`${expr}-${val}`, j + 1, res - val, -val)
                // 选择乘法
                backTrack(`${expr}*${val}`, j + 1, (res - mul) + mul * val, mul * val)
            }
        }
    }
    backTrack('', 0, 0, 0)
    return result
}