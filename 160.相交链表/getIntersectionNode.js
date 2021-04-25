// 相交链表
// 找到两个单链表相交的起始节点
// 如果两个链表没有交点，返回 null

// 相交链表 = 有公共末尾
// headA = ____@@@@
// headB = __@@@@
// headA+headB = ____@@@@__@@@@
// headB+headA = __@@@@____@@@@
// 寻找相同后缀
function getIntersectionNode(headA, headB) {
	if (!headA || !headB) {
		return null
	}
	let a = headA
	let b = headB
	while (a !== b) {
		if (a !== null) {
			a = a.next
		} else {
			a = headB
		}
		if (b !== null) {
			b = b.next
		} else {
			b = headA
		}
	}
	return a
}