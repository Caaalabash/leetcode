package problem0160

type ListNode struct {
	Val  int
	Next *ListNode
}

// 相交链表：有同样的末尾, 相同的末尾是关键
// headA: ----@@@@
// headB: --@@@@
// headA+headB: ----@@@@--@@@@
// headB+headA: --@@@@----@@@@
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	if headA == nil || headB == nil {
		return nil
	}
	tA, tB := headA, headB
	for tA != tB {
		if tA != nil {
			tA = tA.Next
		} else {
			tA = headB
		}
		if tB != nil {
			tB = tB.Next
		} else {
			tB = headA
		}
	}
	return tA
}
