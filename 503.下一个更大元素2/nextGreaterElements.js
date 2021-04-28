// 下一个更大元素2
// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。
// 数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

// 和496相比，不同的地方在于"循环数组"，且存在重复的数字
// 存在重复的数字 => 用来记录结果的键值应该是索引
// 循环数组 => i % length处理
function nextGreaterElements(nums) {
	const result = new Array(nums.length).fill(-1)
	// 存放 未求出下一个更大元素 的元素索引
	const stack = []
	for (let i = 0; i < nums.length * 2; i++) {
		while (stack.length && nums[i % nums.length] > nums[stack[stack.length-1]]) {
			result[stack.pop()] = nums[i % nums.length]
		}
		// 存储的是索引
		stack.push(i % nums.length)
	}
	return result
}