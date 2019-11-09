package problem0108

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 高度平衡的二叉树 + 升序数组 => 递归 + 二分
func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	midIndex := len(nums) >> 1
	return &TreeNode{
		nums[midIndex],
		sortedArrayToBST(nums[:midIndex]),
		sortedArrayToBST(nums[midIndex+1:]),
	}
}
