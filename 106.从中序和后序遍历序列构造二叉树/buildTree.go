package problem0106

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 后序遍历：左右中，后序遍历的最后一个元素一定是新键二叉树的根节点
// 中序遍历：左中右，根节点左侧为左子树，右侧为右子树
// 关键特点：
// 中序遍历序列 (4 2 8 5 9)(1)(6 10 3 7), 1的索引值作为pivot
// 后序遍历序列 (4 8 9 5 2)(10 6 7 3)(1)
// 对于inorder[:pivot], 其值分布在postorder[:pivot]之间
// 对于inorder[pivot+1:], 其值分布在postorder[pivot:len(postorder)-1]之间
func buildTree(inorder []int, postorder []int) *TreeNode {
	lenPostOrder := len(postorder)
	if lenPostOrder == 0 {
		return nil
	}
	rootVal := postorder[lenPostOrder-1]
	index := findIndex(inorder, rootVal)

	return &TreeNode{
		rootVal,
		buildTree(inorder[:index], postorder[:index]),
		buildTree(inorder[index+1:], postorder[index:lenPostOrder-1]),
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