// 反转链表2
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
// 链表中节点数目为 n
// 1 <= n <= 500
// 1 <= left <= right <= n

// 由于可能操作头节点，因此需要一个dummy节点
function reverseBetween(head, left, right) {
	const dummy = { next: head }
	// 找到left位置的前一个节点
	let prev = dummy
	for (let i = 1; i < left; i++) {
		prev = prev.next
	}
	// left位置
	let cur = prev.next
	// 备份
	const prevCache = prev
	const curCache = cur
	// 反转left，right位置的节点
	for (let i = left; i <= right; i++) {
		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	// 反转完成后，prev成了头节点, cur则是right后面的节点
	prevCache.next = prev
	curCache.next = cur
	return dummy.next
}