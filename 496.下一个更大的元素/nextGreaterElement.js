// 下一个更大的元素
// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
// 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

// 单调栈
// 题目描述："nums1是nums2的子集" + "在nums2中对应位置的右边找到第一个比x大的元素" => nums1只是一个幌子，这就是求出一个递增栈
function nextGreaterElement(nums1, nums2) {
	const cache = {}
	const stack = []
	for (const num of nums2) {
		// 递增栈
		// 例如 已有栈[4,2]，当前num为6，那么对2来说，6是它的nextGreaterElement, 对4来说，6是它的nextGreaterElement
		while (stack.length && num > stack[stack.length-1]) {
			cache[stack.pop()] = num
		}
		stack.push(num)
	}
	return nums1.map(i => i in cache ? cache[i] : -1)
}