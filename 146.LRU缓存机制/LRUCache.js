// LRU缓存

// 1. 使用Map能够记住原始插入顺序的作弊办法
class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }
  // 如果有值则返回，并更新其访问位置
  get(key) {
    const val = this.cache.get(key)
    if (val !== undefined) {
      // 刷新顺序
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    }
    return -1
  }
  put(key, val) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    this.cache.set(key, val)
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.entries().next().value[0])
    }
  }
}
