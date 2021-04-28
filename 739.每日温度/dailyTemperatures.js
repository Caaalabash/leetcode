// 每日温度
// 请根据每日气温列表，重新生成一个列表。
// 对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用0来代替。

function dailyTemperatures(T) {
	const result = new Array(T.length).fill(0)
	// 存放 未求出更高气温 的元素索引
	// 存放索引便于计算等待的天数
	const stack = []

	for (let i = 0; i < T.length; i++) {
		while (stack.length && T[i] > T[stack[stack.length - 1]]) {
			const last = stack.pop()
			result[last] = i - last
		}
		stack.push(i)
	}

	return result
}