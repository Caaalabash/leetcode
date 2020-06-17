package problem0148

type ListNode struct {
	Val  int
	Next *ListNode
}

// 876题(需要调整一下，避免返回nil) + 21题 + 递归
func sortList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	mid := middleNode(head)
	right := mid.Next
	mid.Next = nil
	// 合并
	return mergeTwoLists(sortList(head), sortList(right))
}

func middleNode(head *ListNode) *ListNode {
	slow, fast := head, head.Next
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
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
