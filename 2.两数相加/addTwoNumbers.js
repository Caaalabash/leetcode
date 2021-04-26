// 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

function addTwoNumbers(l1, l2) {
	const dummy = { next: null }
	let cur = dummy
	// 进位
	let carry = 0
	// 需要注意，这里循环退出条件多了一个 carry > 0，即2个链表遍历完毕，但是存在进位的情况
	while (l1 !== null || l2 !== null || carry > 0) {
		let sum = carry
		if (l1) {
			sum += l1.val
			l1 = l1.next
		}
		if (l2) {
			sum += l2.val
			l2 = l2.next
		}
		carry = Math.floor(sum / 10)
		cur.next = { next: null, val: sum % 10 }
		cur = cur.next
	}
	return dummy.next
}