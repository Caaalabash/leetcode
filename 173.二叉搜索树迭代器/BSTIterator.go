package problem0173

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type BSTIterator struct {
	inOrderList []int
	index       int
}

func Constructor(root *TreeNode) BSTIterator {
	var inOrderList []int

	var helper func(root *TreeNode)
	helper = func(root *TreeNode) {
		if root == nil {
			return
		}
		helper(root.Left)
		inOrderList = append(inOrderList, root.Val)
		helper(root.Right)
	}
	helper(root)

	return BSTIterator{inOrderList, -1}
}

// return the next smallest number
func (this *BSTIterator) Next() int {
	this.index++
	return this.inOrderList[this.index]
}

// return whether we have a next smallest number
func (this *BSTIterator) HasNext() bool {
	return this.index <= len(this.inOrderList)
}
