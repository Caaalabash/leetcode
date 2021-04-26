// 两数相加 II
// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 这道题 高位 位于链表开头，且不能翻转链表，因此就用栈来完成
function addTwoNumbers(l1, l2) {
	const l1Arr = []
	const l2Arr = []
	while (l1) {
		l1Arr.push(l1.val)
		l1 = l1.next
	}
	while (l2) {
		l2Arr.push(l2.val)
		l2 = l2.next
	}
	// 命名为tail的原因是，高位位于链表头
	let tail = null
	let carry = 0
	while(l1Arr.length || l2Arr.length || carry > 0) {
		let sum = carry
		if (l1Arr.length) {
			sum += l1Arr.pop()
		}
		if (l2Arr.length) {
			sum += l2Arr.pop()
		}
		carry = Math.floor(sum / 10)
		tail = { next: tail, val: sum % 10 }
	}
	return tail
}