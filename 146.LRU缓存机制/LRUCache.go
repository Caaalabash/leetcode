package problem0146

// 双向链表结构
type LinkNode struct {
	key, value int
	pre, next  *LinkNode
}

// LRU结构
type LRUCache struct {
	m          map[int]*LinkNode
	cap        int
	head, tail *LinkNode
}

func Constructor(capacity int) LRUCache {
	head := &LinkNode{0, 0, nil, nil}
	tail := &LinkNode{0, 0, nil, nil}
	head.next = tail
	tail.pre = head
	return LRUCache{make(map[int]*LinkNode, capacity), capacity, head, tail}
}

func (this *LRUCache) moveToHead(node *LinkNode) {
	this.removeNode(node)
	this.addNode(node)
}

func (this *LRUCache) removeNode(node *LinkNode) {
	node.pre.next = node.next
	node.next.pre = node.pre
}

func (this *LRUCache) addNode(node *LinkNode) {
	head := this.head
	node.next = head.next
	node.next.pre = node
	node.pre = head
	head.next = node
}

// 如果有，将这个元素移动到首位置，返回值
// 如果没有，返回-1
func (this *LRUCache) Get(key int) int {
	if v, exist := this.m[key]; exist {
		this.moveToHead(v)
		return v.value
	} else {
		return -1
	}
}

// 如果元素存在，将其移动到最前面，并更新值
// 如果元素不存在，插入到元素首，放入map（判断容量）
func (this *LRUCache) Put(key int, value int) {
	tail := this.tail
	cache := this.m
	if v, exist := cache[key]; exist {
		v.value = value
		this.moveToHead(v)
	} else {
		v := &LinkNode{key, value, nil, nil}
		if len(this.m) == this.cap {
			delete(cache, tail.pre.key)
			this.removeNode(tail.pre)
		}
		this.addNode(v)
		cache[key] = v
	}
}
