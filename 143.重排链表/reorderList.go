package problem0143

type ListNode struct {
	Val  int
	Next *ListNode
}

// 找中点（右中点）= 876题
func middleNode(head *ListNode) *ListNode {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}

// 翻转链表 = 206题
func reverseList(head *ListNode) *ListNode {
	var pre *ListNode = nil
	cur := head
	for cur != nil {
		next := cur.Next
		cur.Next = pre
		pre, cur = cur, next
	}
	return pre
}

// 从中点分隔链表，原地反转后半部分，迭代这两个链表得到答案 = 876题 + 206题
func reorderList(head *ListNode) {
	if head == nil || head.Next == nil {
		return
	}
	mid := middleNode(head)
	left := head
	right := reverseList(mid.Next)
	mid.Next = nil

	for right != nil {
		lNext := left.Next
		rNext := right.Next
		left.Next = right
		right.Next = lNext
		left = lNext
		right = rNext
	}
}
