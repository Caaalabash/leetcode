// 一个栈支持插入元素，一个栈支持删除操作
class CQueue {
  constructor() {
    this.in = []
    this.out = []
  }
  appendTail(value) {
    this.in.push(value)
  }
  deleteHead() {
    if (this.out.length) {
      return this.out.pop()
    } else {
      while (this.in.length) {
        this.out.push(this.in.pop())
      }
      if (!this.out.length) {
        return -1
      }
      return this.out.pop()
    }
  }
}
