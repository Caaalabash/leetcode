package problem1206

import (
	"math/rand"
	"time"
)

const P = 0.3
const MaxLevel = 20

// 抛硬币：如果是正面，则层数加一，直到抛出反面
func randLevel() (level int) {
	rand.Seed(time.Now().UnixNano())
	for level = 1; rand.Float32() < P && level < MaxLevel; level++ {
	}
	return
}

type node struct {
	next []*node
	val  int
}

type Skiplist struct {
	head  *node
	level int
}

func Constructor() Skiplist {
	return Skiplist{
		head: &node{
			next: make([]*node, MaxLevel),
			val:  -1,
		},
		level: 1,
	}
}

// 查询
func (this *Skiplist) Search(target int) bool {
	cur := this.head
	for i := this.level - 1; i >= 0; i-- {
		for cur.next[i] != nil {
			if cur.next[i].val < target {
				cur = cur.next[i]
			} else if cur.next[i].val == target {
				return true
			} else {
				break
			}
		}
	}
	return false
}

// 添加
func (this *Skiplist) Add(num int) {
	cur := this.head
	// 从最高层开始，找到每一层比num小的前驱
	prev := make([]*node, MaxLevel)
	for i := this.level - 1; i >= 0; i-- {
		for cur.next[i] != nil && cur.next[i].val < num {
			cur = cur.next[i]
		}
		prev[i] = cur
	}
	// 高度补齐
	level := randLevel()
	if level > this.level {
		for i := this.level; i < level; i++ {
			prev[i] = this.head
		}
		this.level = level
	}
	// 连接
	node := &node{
		next: make([]*node, level),
		val:  num,
	}
	for i := 0; i < level; i++ {
		node.next[i] = prev[i].next[i]
		prev[i].next[i] = node
	}
}

// 在跳表中删除一个值，存在多个只删除一个
func (this *Skiplist) Erase(num int) bool {
	cur := this.head
	deleted := false

	for i := this.level - 1; i >= 0; i-- {
		for cur.next[i] != nil {
			if cur.next[i].val < num {
				cur = cur.next[i]
			} else if cur.next[i].val == num {
				temp := cur.next[i]
				cur.next[i] = temp.next[i]
				temp.next[i] = nil
				deleted = true
				break
			} else {
				break
			}
		}
	}
	return deleted
}
