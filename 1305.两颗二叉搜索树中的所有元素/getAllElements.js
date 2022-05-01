// 显然是中序遍历 + 归并排序
function getAllElements(root1, root2) {
	const result = []
	const list1 = []
	const list2 = []
	helper(root1, list1)
	helper(root2, list2)

	let i = 0, j = 0
	while (i < list1.length && j < list2.length) {
		if (list1[i] < list2[j]) {
			result.push(list1[i++])
		} else {
			result.push(list2[j++])
		}
	}
	while (i < list1.length) {
		result.push(list1[i++])
	}
	while (j < list2.length) {
		result.push(list2[j++])
	}
	return result
}

function helper(root, list) {
	if (!root) return
	helper(root.left, list)
	list.push(root.val)
	helper(root.right, list)
}

// 迭代器版本，leetcode173
// 参考 https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/solution/gou-jian-bstdie-dai-qi-lai-huo-de-geng-h-ib0l/
class BSTIterator {
	constructor(root) {
		this.stack = []
		this.pushToStack(root)
	}
	next() {
		const cur = this.stack.pop()
		this.pushToStack(cur.right)
		return cur.val
	}
	peek() {
		return this.stack[this.stack.length - 1].val
	}
	hasNext() {
		return this.stack.length
	}
	pushToStack(root) {
		while (root) {
			this.stack.push(root)
			root = root.left
		}
	}
}

function getAllElements1(root1, root2) {
	const res = []
	const r1 = new BSTIterator(root1)
	const r2 = new BSTIterator(root2)

	while (r1.hasNext() && r2.hasNext()) {
		if (r1.peek() > r2.peek()) {
			res.push(r2.next())
		} else {
			res.push(r1.next())
		}
	}
	while (r1.hasNext()) res.push(r1.next())
	while (r2.hasNext()) res.push(r2.next())

	return res
}
