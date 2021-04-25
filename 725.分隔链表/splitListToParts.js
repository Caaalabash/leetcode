// 分隔链表
// 给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。
// 每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。前面部分的长度大于等于后面部分的长度。
// root 的长度范围： [0, 1000]
// k 的取值范围： [1, 50]
function splitListToParts(root, k) {
	// 找到链表长度
	let length = 0
	for (let cur = root; cur != null; cur = cur.next) {
		length++
	}
	// 计算k份，每份最少个数，前remain份补1
	const minShare = Math.floor(length / k)
	const remain = length % k
	const result = []
	let subHead = root
	let subTail = root
	// 此时就把份数的数组构建好了
	for (let i = 1; i <= k; i++) {
		const subLength = i <= remain ? minShare+1 : minShare
		// 注意j从1开始，因为subHead=subTail，距离就为1
		for (let j = 1; j < subLength; j++) {
			// 此处不会出现subTail为null的情况才对
			subTail = subTail.next
		}
		if (subTail === null) {
			result.push(subHead)
		} else {
			const next = subTail.next
			subTail.next = null
			result.push(subHead)
			subHead = next
			subTail = next
		}
	}
	return result
}