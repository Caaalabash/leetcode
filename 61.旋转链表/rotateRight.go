package problem0061

type ListNode struct {
	Val  int
	Next *ListNode
}

func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil || k == 0 {
		return head
	}
	// 1. 寻找到最后一个节点以及链表长度
	last, length := head, 1
	for last.Next != nil {
		length++
		last = last.Next
	}
	// 2. 精简移动步数
	k %= length
	if k == 0 {
		return head
	}
	// 3. 成环
	last.Next = head
	// 4. 旋转链表 = 移动k步 = 倒数第k个节点做新表头(length-k), 倒数第k-1个节点做新的表尾
	start := head
	for i := 0; i < length-k-1; i++ {
		start = start.Next
	}
	result := start.Next
	start.Next = nil
	return result
}
