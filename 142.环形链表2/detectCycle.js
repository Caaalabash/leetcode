// 环形链表 II
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 假设，slow/fast同时同地出发，可将环分成三个部分 x(链表头到环起始点)，y(环起始点到相遇点)，z(相遇点到环起始点)
// 相遇时存在这样的关系：
//   慢指针走了 x + y
//   快指针走了 x + y + z + y
// 又因为快指针速度是慢指针的2倍，得到 x == z
// 因此本题在找到相遇点后，将一个指向头节点，然后slow fast速度调整为1，下一次相遇点就是环的入口
function detectCycle(head) {
	if (!head) {
		return null
	}
	let slow = head
	let fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			break
		}
	}
	// 链表无环
	if (fast === null || fast.next === null) {
		return null
	}
	// 此时slow, fast均指向相遇点
	slow = head
	while (slow !== fast) {
		slow = slow.next
		fast = fast.next
	}
	return fast
}