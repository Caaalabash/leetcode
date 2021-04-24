// 重排链表
// 将链表 a -> b -> c -> d -> e
// 转变为 a -> e -> b -> d -> c

function getMiddle(head) {
	let slow = head
	let fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}
	return slow
}

function reverse(head) {
	let prev = null
	let cur = head
	while (cur !== null) {
		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	return prev
}

function mergeList(a, b) {
	let aCache = null
	let bCache = null
	while (a !== null && b !== null) {
		aCache = a.next
		bCache = b.next
		a.next = b
		a = aCache
		b.next = a
		b = bCache
	}
}

function reorderList(head) {
	if (!head || !head.next) {
		return head
	}
	// 先找中点
	const mid = getMiddle(head)
	// 再反转中点后面的节点
	const right = reverse(mid.next)
	// 斩断中点后面的引用
	mid.next = null
	mergeList(head, right)
}