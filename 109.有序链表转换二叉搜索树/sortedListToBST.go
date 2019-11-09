package problem0109

type ListNode struct {
	Val  int
	Next *ListNode
}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 和上一题一样，给定列表的中间元素将会作为二叉搜索树的根，该点左侧的所有元素递归的去构造左子树，同理右侧的元素构造右子树
// 区别在于，上一题使用数组，这一题是链表，访问难易程度不同，最简单的方法就是先将链表转成数组，然后就完事了，当然这样似乎没什么价值
func sortedListToBST(head *ListNode) *TreeNode {
	var nums []int
	for head != nil {
		nums = append(nums, head.Val)
		head = head.Next
	}
	return sortedArrayToBST(nums)
}

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

// 中序遍历模拟：二叉搜索树的中序遍历结果是一个升序数组
// 这个特点通常用于：
//   检验一个树是否为二叉搜索树98题
//   根据递增排序的序列生成二叉搜索树109题
// 因为链表不具备使用下标的条件, 直接使用"长度替代下标也可以"
// 每当我们构建完二叉搜索树的左半部分时，链表中的头指针将指向根节点或中间节点
// "我真搞不懂这个解法"
func findSize(head *ListNode) int {
	c := 0
	for head != nil {
		c++
		head = head.Next
	}
	return c
}

func sortedListToBST(head *ListNode) *TreeNode {
	size := findSize(head)

	var convertListToBST func(l, r int) *TreeNode

	convertListToBST = func(l, r int) *TreeNode {
		if l > r {
			return nil
		}
		mid := (l + r) >> 1
		left := convertListToBST(l, mid-1)
		node := &TreeNode{Val: head.Val}
		node.Left = left
		head = head.Next
		node.Right = convertListToBST(mid+1, r)
		return node
	}
	return convertListToBST(0, size-1)
}
