// 两两交换链表中的节点
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 需要改动表头，因此需要dummy
function swapPairs(head) {
	if (!head || !head.next) {
		return head
	}
	const dummy = { next: head }
	let prev = dummy
	let cur = dummy.next

	while(cur !== null && cur.next !== null) {
		// 穿针引线
		prev.next = cur.next
		cur.next = cur.next.next
		prev.next.next = cur
		// move
		prev = cur
		cur = cur.next
	}

	return dummy.next
}