package problem0230

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 二叉搜索树 = 明示中序遍历，但是必须遍历整个二叉树，时间复杂度O(n)，空间复杂度O(n)
func kthSmallest(root *TreeNode, k int) int {
	var inorderList []int

	var inorder func(node *TreeNode)
	inorder = func(node *TreeNode) {
		if node == nil {
			return
		}
		inorder(node.Left)
		inorderList = append(inorderList, node.Val)
		inorder(node.Right)
	}
	inorder(root)

	return inorderList[k-1]
}

// 这样就不用额外空间了
func kthSmallest1(root *TreeNode, k int) int {
	var (
		res  *TreeNode
		find func(node *TreeNode)
	)
	find = func(node *TreeNode) {
		if node == nil {
			return
		}
		find(node.Left)
		k -= 1
		if k == 0 {
			res = node
			return
		}
		find(node.Right)
	}
	find(root)
	return res.Val
}
