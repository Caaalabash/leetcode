package problem0055

func canJump(nums []int) bool {
	canReachIndex := 0
	for i := 0; i < len(nums); i++ {
		if i > canReachIndex {
			return false
		}
		if i+nums[i] > canReachIndex {
			canReachIndex = i + nums[i]
		}
	}
	return true
}
