// 对链表进行插入排序

function insertionSortList(head) {
	if (!head || !head.next) {
		return head
	}
	// 可能需要向head前插入节点，因此需要dummy
	const dummy = { next: head }
	// 默认第一个节点为已排序的，从第二个节点开始遍历
	let lastSorted = head
	let cur = head.next

	while (cur) {
		if (lastSorted.val <= cur.val) {
			lastSorted = lastSorted.next
		} else {
			let prev = dummy
			// 寻找插入cur的位置
			while (prev.next.val <= cur.val) {
				prev = prev.next
			}
			// prev -> cur -> 原来的prev.next
			lastSorted.next = cur.next
			cur.next = prev.next
			prev.next = cur
		}
		// cur和lastSorted保持相邻关系
		cur = lastSorted.next
	}

	return dummy.next
}