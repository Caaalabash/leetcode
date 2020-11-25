package problem0698

// 回溯
func canPartitionKSubsets(nums []int, k int) bool {
	sum := 0
	for _, v := range nums {
		sum += v
	}
	if sum%k != 0 {
		return false
	}
	var (
		targetSum  = sum / k
		visitedArr = make([]bool, len(nums))
		findPair   func(k int, curSum int, targetSum int, index int) bool
	)
	findPair = func(k int, curSum int, targetSum int, index int) bool {
		if k == 0 {
			return true
		}
		if curSum == targetSum {
			return findPair(k-1, 0, targetSum, 0)
		}
		for i := index; i < len(nums); i++ {
			if visitedArr[i] {
				continue
			}
			visitedArr[i] = true
			if nums[i]+curSum <= targetSum && findPair(k, nums[i]+curSum, targetSum, i+1) {
				return true
			}
			visitedArr[i] = false
		}
		return false
	}
	return findPair(k, 0, targetSum, 0)
}
