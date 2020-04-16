package problem0705

// 设计哈希集合，有两个关键问题：
// 1. 哈希函数：理想情况下，每一个值都应该有一个对应且唯一的散列值
// 2. 冲突处理：哈希函数的本质就是从A映射到B，但是多个A值可能映射到相同的B，这就是碰撞，因此需要有对应的策略来处理：
//    2.1 单独链接法，对于相同的散列值，我们将其放到一个桶里，每个桶相互独立
//    2.2 开放地址法：每当有碰撞，根据探查策略找到一个空槽
//    2.3 双散列法：使用两个哈希函数计算散列值，选择碰撞更少的地址
// 当然，直接用一个100001长度的数据也可以过, 此处选择数组 + 单链表
type MyHashSet struct {
	Set []*Bucket
}

const L = 769

func Constructor() MyHashSet {
	hs := MyHashSet{}
	for i := 0; i < 769; i++ {
		hs.Set = append(hs.Set, NewBucket())
	}
	return hs
}

func Hash(key int) int {
	return key % L
}

func (this *MyHashSet) Add(key int) {
	bucketIndex := Hash(key)
	this.Set[bucketIndex].insert(key)
}

func (this *MyHashSet) Remove(key int) {
	bucketIndex := Hash(key)
	this.Set[bucketIndex].delete(key)
}

func (this *MyHashSet) Contains(key int) bool {
	bucketIndex := Hash(key)
	return this.Set[bucketIndex].exists(key)
}

type Node struct {
	Val  int
	Next *Node
}
type Bucket struct {
	Head *Node
}

func NewBucket() *Bucket {
	return &Bucket{
		&Node{0, nil},
	}
}
func newNode(key int) *Node {
	return &Node{
		key,
		nil,
	}
}

func (b *Bucket) insert(key int) {
	cur := b.Head.Next
	Niobe := newNode(key)
	for cur != nil {
		if cur.Val != key {
			if cur.Next != nil {
				cur = cur.Next
			} else {
				cur.Next = Niobe
				break
			}
		} else {
			break
		}
	}
	if cur == nil {
		b.Head.Next = Niobe
	}
}

func (b *Bucket) delete(key int) {
	cur := b.Head
	for cur.Next != nil {
		if cur.Next.Val == key {
			cur.Next = cur.Next.Next
			break
		} else {
			cur = cur.Next
		}
	}
}

func (b *Bucket) exists(key int) bool {
	cur := b.Head.Next
	for cur != nil {
		if cur.Val == key {
			return true
		} else {
			cur = cur.Next
		}
	}
	return false
}
