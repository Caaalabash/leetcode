package problem0148

type ListNode struct {
	Val  int
	Next *ListNode
}

// 在O(nlogn)时间复杂度和常数级空间复杂度，对链表进行排序 => 归并排序
// 一些定义：
// 1. 若算法执行所需要的辅助空间相对于输入数据n而言是一个常数，则称这个算法空间复杂度辅助空间为O(1)
// 2. 递归算法空间复杂度：递归深度n*每次递归所要的辅助空间，如果每次递归所需要的辅助空间为常数，则递归空间复杂度O(n)
// 所以这道题不能用递归
// todo: 非递归做法
func sortList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	mid := getMid(head)
	right := mid.Next
	mid.Next = nil
	// 合并
	return mergeList(sortList(head), sortList(right))
}

// 辅助函数: 找到中点
func getMid(head *ListNode) *ListNode {
	slow, fast := head, head.Next
	for fast != nil && fast.Next != nil {
		slow, fast = slow.Next, fast.Next.Next
	}
	return slow
}

// 辅助函数: 对两个链表进行归并排序
func mergeList(a, b *ListNode) *ListNode {
	result := &ListNode{}
	list := result
	for a != nil && b != nil {
		if a.Val < b.Val {
			list.Next = a
			a = a.Next
		} else {
			list.Next = b
			b = b.Next
		}
		list = list.Next
	}
	if a != nil {
		list.Next = a
	} else {
		list.Next = b
	}
	return result.Next
}
