package problem0477

// 暴力做法，超时了
func totalHammingDistance(nums []int) int {
	result := 0
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			result += hammingDistance(nums[i], nums[j])
		}
	}
	return result
}

// 461
func hammingDistance(x int, y int) int {
	var count int
	for x != 0 || y != 0 {
		if (x&1)^(y&1) == 1 {
			count++
		}
		x >>= 1
		y >>= 1
	}
	return count
}

// 按位统计：O(n)复杂度，将每个数的二进制位对齐，该位的汉明距离 = count(0) * count(1)
func totalHammingDistance1(nums []int) int {
	ans, numsLen := 0, len(nums)
	for i := 0; i < 32; i++ {
		haveOne := 0
		for _, num := range nums {
			haveOne += (num >> i) & 1
		}
		ans += haveOne * (numsLen - haveOne)
	}
	return ans
}
