package problem0129

type TreeNode struct {
	Left  *TreeNode
	Right *TreeNode
	Val   int
}

func sumNumbers(root *TreeNode) int {
	sum := 0

	var helper func(root *TreeNode, num int)
	helper = func(root *TreeNode, num int) {
		if root == nil {
			return
		}
		num = num*10 + root.Val
		if root.Left == nil && root.Right == nil {
			sum += num
			return
		}
		helper(root.Left, num)
		helper(root.Right, num)
	}
	helper(root, 0)

	return sum
}
