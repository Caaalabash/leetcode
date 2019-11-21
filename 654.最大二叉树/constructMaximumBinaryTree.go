package problem0654

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func constructMaximumBinaryTree(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	maxIndex, maxValue := findMaxIndex(nums)
	return &TreeNode{
		maxValue,
		constructMaximumBinaryTree(nums[:maxIndex]),
		constructMaximumBinaryTree(nums[maxIndex+1:]),
	}
}

func findMaxIndex(nums []int) (int, int) {
	maxValue, maxIndex := 0, 0
	for i := 0; i < len(nums); i++ {
		if nums[i] > maxValue {
			maxIndex = i
		}
	}
	return maxIndex, maxValue
}
