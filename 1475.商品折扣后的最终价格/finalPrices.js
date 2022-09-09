// 单调栈
// 题目中需要找到下一个更小的元素
// 那么就是维护一个栈底到栈顶的单增栈，while(当前元素<=栈顶元素)，出栈，对于出栈的元素来说，下一个更小的元素就找到了
function finalPrices(prices) {
    const n = prices.length
    const result = new Array(n)
    const stack = []

    for (let i = 0; i < n; i++) {
        result[i] = prices[i]
        while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
            const index = stack.pop()
            result[index] = prices[index] - prices[i]
        }
        stack.push(i)
    }
    return result
}