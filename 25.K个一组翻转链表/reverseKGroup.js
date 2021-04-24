// K 个一组翻转链表
// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 1 <= 链表节点数量 <= 5000
// 1 <= k <= 链表节点数量

// 由于涉及到表头，因此需要dummy
function reverseKGroup(head, k) {
	// 计算长度
	let length = 0
	for (let node = head; node !== null; node = node.next) {
		length++
	}
	const dummy = { next: head }
	let prev = dummy
	let cur = dummy.next

	// 需要反转k轮
	for (let i = 0; i < Math.floor(length/k); i++) {
		// 类似92题，缓存交换前的pre, cur节点, 因为翻转后会断链, 需要接上
		const prevCache = prev
		const curCache = cur
		for (let j = 0; j < k; j++) {
			// 206题目
			const next = cur.next
			cur.next = prev
			prev = cur
			cur = next
		}
		prevCache.next = prev
		curCache.next = cur
		// 调整prev位置
		prev = curCache
	}

	return dummy.next
}