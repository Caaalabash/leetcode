package problem0025

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	// 取得长度
	length := 0
	for cur := head; cur != nil; cur = cur.Next {
		length++
	}
	dummy := &ListNode{Next: head}
	pre, cur := dummy, dummy.Next

	for i := 0; i < length/k; i++ {
		// 缓存交换前的pre, cur节点, 因为翻转后会断链, 需要接上
		preCache, curCache := pre, cur
		for j := 0; j < k; j++ {
			// 206题
			next := cur.Next
			cur.Next = pre
			pre, cur = cur, next
		}
		// 92题
		preCache.Next = pre
		curCache.Next = cur
		// 保证下一轮翻转时pre.Next = cur
		pre = curCache
	}

	return dummy.Next
}
