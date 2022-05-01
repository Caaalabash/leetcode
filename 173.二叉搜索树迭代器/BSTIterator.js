// 扁平化：直接对二叉搜索树进行一次完全的递归遍历，将结果保存在数组中，利用得到的数组来实现迭代器
// 时间复杂度：初始化需要O(n)的时间，随后每次调用都是O(1)
// 空间复杂度：O(n)
class BSTIterator {
	constructor(root) {
		this.arr = []
		this.index = 0
		const helper = root => {
			if (!root) return
			helper(root.left)
			this.arr.push(root.val)
			helper(root.right)
		}
		helper(root)
	}
	next() {
		return this.arr[this.index++]
	}
	hasNext() {
		return this.index <= this.arr.length
	}
}

// 真正的迭代：无需预先计算出中序遍历的全部结果，只需要实时维护当前栈的情况
// 时间复杂度：初始化和调用hasNext()都只需要O(1)的时间，调用next函数最坏需要O(n)，但是均摊复杂度为O(1)
class BSTIterator1 {
	constructor(root) {
		this.cur = root
		this.stack = []
	}
	next() {
		while (this.cur) {
			this.stack.push(this.cur)
			this.cur = this.cur.left
		}
		this.cur = this.stack.pop()
		const ret = this.cur.val
		this.cur = this.cur.right
		return ret
	}
	hasNext() {
		return this.cur !== null || this.stack.length
	}
}