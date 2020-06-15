package problem0234

type ListNode struct {
	Val  int
	Next *ListNode
}

// 判断一个链表是否为回文链表，需要用O(n)的时间复杂度和O(1)的空间复杂度解决
// 1. 找到前半部分链表的尾节点
// 2. 反转后半部分链表
// 3. 判断是否为回文
func isPalindrome(head *ListNode) bool {
	if head == nil {
		return true
	}
	// 1. 快慢指针寻找链表中点
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		fast = fast.Next.Next // 快指针一次走两步
		slow = slow.Next      // 慢指针一次走一步
	}
	// 2. 从中点开始反转链表后半部分
	var pre, cur *ListNode = nil, slow
	for cur != nil {
		next := cur.Next // 先记录下下一个节点，不然一会就没了
		cur.Next = pre   // 当前节点指向上一个节点
		pre = cur        // 指针后移
		cur = next       // 前进
	}
	// 3. 此时pre是反转后半部分的开始节点，和head进行比较即可
	for pre != nil {
		if head.Val != pre.Val {
			return false
		}
		pre = pre.Next
		head = head.Next
	}
	return true
}
