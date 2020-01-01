package problem0450

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 二叉搜索树删除节点，分情况讨论
// 1. 左右子树一侧为空，待删除节点的左子树为空 -> 右子树接替就好
// 2. 左右子树一侧为空，待删除节点的右子树为空 -> 左子树接替接好
// 3. 左右子树均不为空，让待删除节点的前驱节点替代（左子树的最右下角）
// 4. 左右子树均不为空，让待删除节点的后继节点替代（右子树的最左下角）
// 5. 左右子树均为空，直接删除
// deleteNode本身还要做查找的任务～, 同700题
func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}
	if root.Val < key {
		root.Right = deleteNode(root.Right, key)
	} else if root.Val > key {
		root.Left = deleteNode(root.Left, key)
	} else {
		if root.Left == nil && root.Right == nil {
			root = nil
		} else if root.Right == nil {
			root = root.Left
		} else if root.Left == nil {
			root = root.Right
		} else {
			root.Val = getSuccessor(root)
			root.Right = deleteNode(root.Right, root.Val)
		}
	}
	return root
}

// 后继 - 接班人 - 右子树的左下角
func getSuccessor(root *TreeNode) int {
	root = root.Right
	for root.Left != nil {
		root = root.Left
	}
	return root.Val
}
