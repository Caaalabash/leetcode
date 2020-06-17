package problem1171

type ListNode struct {
	Val  int
	Next *ListNode
}

// 前x个和为sum1, 前x+n个和也为sum1，消除x~x+n中间的节点即可
func removeZeroSumSublists(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	dummy := &ListNode{Next: head}
	// 遍历链表，构建链表和-节点哈希表，若同一和多次出现会覆盖
	sumMap := make(map[int]*ListNode, 0)
	for sum, cur := 0, head; cur != nil; cur = cur.Next {
		sum += cur.Val
		sumMap[sum] = cur
	}
	// 清理
	for sum, cur := 0, head; cur != nil; cur = cur.Next {
		sum += cur.Val
		cur.Next = sumMap[sum].Next
	}
	return dummy.Next
}
