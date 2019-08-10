package problem0002

type ListNode struct {
	Val int
	Next *ListNode
}
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 将两个链表看成是相同长度的进行遍历，如果一个链表较短则补零
// 通过一个计数器变量来处理进位的问题
// 如果两个链表遍历完后，计数器为1，则在新链表最前方添加节点1
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	result := &ListNode{0,nil}
	l, carry := result, 0

	for {
		if total := l1.Val + l2.Val + carry; total > 9 {
			l.Val = total - 10
			carry = 1
		} else {
			l.Val = total
			carry = 0
		}
		if l1.Next == nil && l2.Next == nil {
			if carry == 1 {
				l.Next = &ListNode{1, nil}
			}
			break
		}
		if l1.Next != nil {
			l1 = l1.Next
		} else {
			l1 = &ListNode{0, nil}
		}
		if l2.Next != nil {
			l2 = l2.Next
		} else {
			l2 = &ListNode{0, nil}
		}
		l.Next = &ListNode{0, nil}
		l = l.Next
	}
	return result
}

