// 移掉K位数字
// 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
// num 的长度小于 10002 且 ≥ k。
// num 不会包含任何前导零。

// 若要使得剩下的数字最小，需要保证靠前的数字尽可能小
function removeKdigits(num, k) {
	const stack = []
	let canRemove = k
	for (let i = 0; i < num.length; i++) {
		// 只能丢弃k个数字
		while (canRemove > 0 && stack.length && num[i] < stack[stack.length-1]) {
			stack.pop()
			canRemove--
		}
		stack.push(num[i])
	}
	return stack.slice(0, num.length - k).join('').replace(/^0*/, '') || '0'
}