class Twitter {
  constructor() {
    this.timeSid = 0
    this.followMap = {}
    this.articlesMap = {}
  }
  postTweet(userId, tweetId) {
    if (!(userId in this.articlesMap)) {
      this.articlesMap[userId] = []
    }
    this.articlesMap[userId] = [ { tweetId, timeSid: this.timeSid++ }, ...this.articlesMap[userId] ]
  }
  getNewsFeed(userId) {
    const list = Object.keys(this.followMap).concat(`${userId}-${userId}`)
    const followerArticleList = []
    for (let i = 0; i < list.length; i++) {
      if (list[i].startsWith(`${userId}-`)) {
        const [,id] = list[i].split('-')
        if (id in this.articlesMap && this.articlesMap[id].length) {
          followerArticleList.push(this.articlesMap[id])
        }
      }
    }
    // 问题转换为合并k个有序链表，最大堆
    const heap = new Heap(followerArticleList, (a, b) => {
      return a[0].timeSid > b[0].timeSid
    })
    const result = []
    while (result.length < 10 && heap.length) {
      const peak = heap.pop()
      const rest = peak.slice(1)
      if (rest.length) {
        heap.push(rest)
      }
      result.push(peak[0].tweetId)
    }
    return result
  }
  follow(followerId, followeeId) {
    const key = `${followerId}-${followeeId}`
    if (key in this.followMap) return
    this.followMap[key] = 1
  }
  unfollow(followerId, followeeId) {
    const key = `${followerId}-${followeeId}`
    if (!(key in this.followMap)) return
    delete this.followMap[key]
  }
}

// --- heap
class Heap {
  constructor(data = [], less) {
    this.data = data
    this.less = less || ((a, b) => a < b)

    if (this.length) {
      for (let p = (this.length - 2) >> 1; p >= 0; p--) {
        this._down(p)
      }
    }
  }
  get length() {
    return this.data.length
  }
  peak() {
    return this.data[0]
  }
  push(val) {
    this.data.push(val)
    this._up(this.length - 1)
  }
  pop() {
    if (!this.length) {
      return
    }
    this._swap(0, this.length - 1)
    const popItem = this.data.pop()
    this._down(0)
    return popItem
  }
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  _up(i) {
    if (i <= 0) return
    const pIndex = (i - 1) >> 1
    if (this.less(this.data[i], this.data[pIndex])) {
      this._swap(i, pIndex)
      this._up(pIndex)
    }
  }
  _down(i) {
    let leftIndex = i * 2 + 1
    if (leftIndex >= this.length) {
      return
    }
    if (leftIndex + 1 < this.length && this.less(this.data[leftIndex+1], this.data[leftIndex])) {
      leftIndex++
    }
    if (this.less(this.data[leftIndex], this.data[i])) {
      this._swap(leftIndex, i)
      this._down(leftIndex)
    }
  }
}
