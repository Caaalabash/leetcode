package problem0384

import "math/rand"

// Fisher-Yates洗牌算法，每次迭代中，生成一个范围在当前下标到数组末尾元素下标之间的随机整数，交换
type Solution struct {
	original []int
}

func Constructor(nums []int) Solution {
	return Solution{original: nums}
}

func (this *Solution) Reset() []int {
	return this.original
}

func (this *Solution) Shuffle() []int {
	length := len(this.original)
	result := make([]int, length)
	copy(result, this.original)

	for i := length - 1; i >= 0; i-- {
		r := rand.Intn(i + 1)
		result[i], result[r] = result[r], result[i]
	}
	return result
}
