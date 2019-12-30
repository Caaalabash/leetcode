package problem1305

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 这道题 = 中序遍历 + 归并排序
func getAllElements(root1 *TreeNode, root2 *TreeNode) []int {
	var (
		result     []int
		list1      []int
		list2      []int
		inorderDFS func(node *TreeNode, container *[]int)
	)
	inorderDFS = func(node *TreeNode, container *[]int) {
		if node == nil {
			return
		}
		inorderDFS(node.Left, container)
		*container = append(*container, node.Val)
		inorderDFS(node.Right, container)
	}
	inorderDFS(root1, &list1)
	inorderDFS(root2, &list2)
	// 归并
	i, j, len1, len2 := 0, 0, len(list1), len(list2)
	for i < len1 && j < len2 {
		if list1[i] <= list2[j] {
			result = append(result, list1[i])
			i++
		} else {
			result = append(result, list2[j])
			j++
		}
	}
	for i < len1 {
		result = append(result, list1[i])
		i++
	}
	for j < len2 {
		result = append(result, list2[j])
		j++
	}
	return result
}
