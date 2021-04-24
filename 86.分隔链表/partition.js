// 分隔链表
// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你应当 保留 两个分区中每个节点的初始相对位置。
// 链表中节点的数目在范围 [0, 200] 内
// -100 <= Node.val <= 100
// -200 <= x <= 200

// 创建small、large两个链表分别存储比x小和比x大的部分，最后再连接
function partition(head, x) {
	let small = { next: null }
	let large = { next: null }
	const smallHead = small
	const largeHead = large

	while (head !== null) {
		if (head.val < x) {
			small.next = head
			small = small.next
		} else {
			large.next = head
			large = large.next
		}
		head = head.next
	}
	// 由于引用关系，large.next指向是head的后续节点，需要丢弃
	large.next = null
	small.next = largeHead.next
	return smallHead.next
}