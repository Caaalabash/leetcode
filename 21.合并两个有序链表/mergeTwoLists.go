package problem0021

type ListNode struct {
	Val  int
	Next *ListNode
}

// 递归做法
// 返回条件, 如果 l1 或者 l2 一开始就是 null , 那么没有任何操作需要合并, 所以我们只需要返回非空链表。
// 否则, 我们要判断 l1 和 l2 哪一个的头元素更小, 然后递归地决定下一个添加到结果里的值。
// 如果两个链表都是空的, 那么过程终止, 所以递归过程最终一定会终止。
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	if l1.Val < l2.Val {
		l1.Next = mergeTwoLists(l1.Next, l2)
		return l1
	} else {
		l2.Next = mergeTwoLists(l2.Next, l1)
		return l2
	}
}

// 迭代做法
func mergeTwoListsA(l1 *ListNode, l2 *ListNode) *ListNode {
	preHead := ListNode{}
	prev := &preHead

	for l1 != nil && l2 != nil {
		if l1.Val <= l2.Val {
			prev.Next = l1
			l1 = l1.Next
		} else {
			prev.Next = l2
			l2 = l2.Next
		}
		prev = prev.Next
	}
	if l1 != nil {
		prev.Next = l1
	}
	if l2 != nil {
		prev.Next = l2
	}
	return preHead.Next
}
