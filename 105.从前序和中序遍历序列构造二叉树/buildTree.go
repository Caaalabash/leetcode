package problem0105

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 中序inorder: 左中右 (9)(3)(15 20 7), 3的索引值作为pivot
// 前序preorder: 中左右 (3)(9)(20 15 7) 第一个元素一定是新建二叉树的根节点
// 关键特点:
// 对于inorder[:pivot], 其值分布在preorder[1:pivot+1]之间？
// 对于inorder[pivot+1:], 其值分布在preorder[pivot+1:]
func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(inorder) == 0 {
		return nil
	}
	pivot := findIndex(inorder, preorder[0])

	return &TreeNode{
		preorder[0],
		buildTree(preorder[1:pivot+1], inorder[:pivot]),
		buildTree(preorder[pivot+1:], inorder[pivot+1:]),
	}
}

func findIndex(list []int, target int) int {
	for i, v := range list {
		if v == target {
			return i
		}
	}
	return -1
}
