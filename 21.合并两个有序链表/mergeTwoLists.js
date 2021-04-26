// 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 递归做法
function mergeTwoLists(l1, l2) {
	if (l1 === null) {
		return l2
	}
	if (l2 === null) {
		return l1
	}
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2)
		return l1
	} else {
		l2.next = mergeTwoLists(l2.next, l1)
		return l2
	}
}

// 迭代做法
function mergeTwoLists(l1, l2) {
	const dummy = { next: null }
	let cur = dummy

	while (l1 && l2) {
		if (l1.val < l2.val) {
			cur.next = { val: l1.val, next: null }
			l1 = l1.next
		} else {
			cur.next = { val: l2.val, next: null }
			l2 = l2.next
		}
		cur = cur.next
	}
	if (l1) {
		cur.next = l1
	} else if (l2) {
		cur.next = l2
	}

	return dummy.next
}