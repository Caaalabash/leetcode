// 设计单向链表
class MyLinkedList {
	constructor() {
		this.len = 0
		this.head = null
		this.tail = null
	}
	get(index) {
		if (index < 0 || index >= this.len) {
			return -1
		}
		let cur = this.head
		for (let i = 0; i < index; i++) {
			cur = cur.next
		}
		return cur.val
	}
	addAtHead(val) {
		this.head = { next: this.head, val }
		if (this.len === 0) {
			this.tail = this.head
		}
		this.len++
	}
	addAtTail(val) {
		if (this.len === 0) {
			this.head = { next: null, val }
			this.tail = this.head
		} else {
			this.tail.next = { next: null, val }
			this.tail = this.tail.next
		}
		this.len++
	}
	addAtIndex(index, val) {
		if (index <= 0) {
			this.addAtHead(val)
		} else if (index === this.len) {
			this.addAtTail(val)
		} else if (index < this.len) {
			let cur = this.head
			for (let i = 0; i < index-1; i++) {
				cur = cur.next
			}
			cur.next = { next: cur.next, val }
			this.len++
		}
	}
	deleteAtIndex(index) {
		if (index < 0 || index >= this.len) {
			return
		}
		if (index === 0) {
			this.head = this.head.next
			if (this.len === 1) {
				this.tail = null
			}
		} else {
			let cur = this.head
			for (let i = 0; i < index-1; i++) {
				cur = cur.next
			}
			cur.next = cur.next.next
			if (!cur.next) {
				this.tail = cur
			}

		}
		this.len--
	}
}