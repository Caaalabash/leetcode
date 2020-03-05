package problme0206

type ListNode struct {
	Val  int
	Next *ListNode
}

// 双指针迭代
func reverseList(head *ListNode) *ListNode {
	var pre *ListNode = nil
	var temp *ListNode = nil
	cur := head

	for cur != nil {
		// 记录下一个节点
		temp = cur.Next
		// 当前节点指向pre
		cur.Next = pre
		// pre 和 cur 都移动到下一位
		pre = cur
		cur = temp
	}
	return pre
}

// 递归：默念这个函数的作用是返回反转后的链表
// 递归的退出条件，没有节点或只有一个节点
// 返回什么：反转后的head.Next
// 递归过程干什么：有head、r(head.Next), head和head.Next指针并没有斩断，所以让head的下一个节点指向head，再斩断
func reverseList1(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	temp := reverseList(head.Next)
	head.Next.Next = head
	head.Next = nil
	return temp
}
