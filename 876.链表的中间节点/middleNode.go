package problem0876

type ListNode struct {
	Val  int
	Next *ListNode
}

// 需要找到链表的中间节点，偶数个时返回第二个
// 1. 遍历链表，放进数组，返回对应索引的节点
// 2. 遍历一遍，获得长度，再遍历即可
// 3. 快慢指针，fast一次走两步，slow一次走一步，当fast为nil时，slow必然再中间
func middleNode(head *ListNode) *ListNode {
	length, headBackup := 0, head
	for head != nil {
		length++
		head = head.Next
	}
	mid := (length >> 1) + 1
	for headBackup != nil {
		mid--
		if mid == 0 {
			return headBackup
		}
		headBackup = headBackup.Next
	}
	return head
}

func middleNode1(head *ListNode) *ListNode {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}
