// 找到重复出现的整数以及丢失的数字
// 哈希表找到重复数字
// 数学：等差数列和 = 列表和 - 重复数字 + 缺失数字

// 基本款，时间空间复杂度都是O(n)
function findErrorNums(nums) {
	const exist = new Set()
	const length = nums.length
	const theoreticalValue = length * (1 + length) / 2
	let actualValue = 0
	let duplicateOne = 0
	let shortOne = 0

	for (let i = 0; i < nums.length; i++) {
		actualValue += nums[i]
		if (exist.has(nums[i])) {
			duplicateOne = nums[i]
		} else {
			exist.add(nums[i])
		}
	}

	shortOne = theoreticalValue - actualValue + duplicateOne

	return [duplicateOne, shortOne]
}