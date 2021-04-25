// 旋转链表
// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
// 0 <= 链表长度 <= 500
// 0 <= k <= 2 * 109
function rotateRight(head, k) {
	if (!head || !head.next || k === 0) {
		return head
	}
	// 由于存在 k 大于链表长度的情况，因此需要求出链表的长度，以及链表最后一个元素
	let length = 1
	let cur = head
	while (cur.next) {
		length++
		cur = cur.next
	}
	// 实际上只需要移动 k % length 步
	k %= length
	// 成环
	cur.next = head
	// 旋转链表 = 移动k步 = 倒数第k个节点做新表头(length-k), 倒数第k-1个节点做新的表尾
	cur = head
	for (let i = 0; i < length-k-1; i++) {
		cur = cur.next
	}
	// 此时cur是表尾
	const newHead = cur.next
	cur.next = null
	return newHead
}