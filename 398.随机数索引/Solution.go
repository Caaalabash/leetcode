package problem0398

import (
	"math/rand"
	"time"
)

type Solution struct {
	r    *rand.Rand
	nums []int
}

func Constructor(nums []int) Solution {
	return Solution{
		r:    rand.New(rand.NewSource(time.Now().UnixNano())),
		nums: nums,
	}
}

func (this *Solution) Pick(target int) int {
	result := 0
	count := 0
	for i := 0; i < len(this.nums); i++ {
		if this.nums[i] == target {
			count++
			// 以 1/i 的概率替换
			if this.r.Intn(count) == 0 {
				result = i
			}
		}
	}
	return result
}
