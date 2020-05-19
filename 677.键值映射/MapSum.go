package problem0677

type MapSum struct {
	val  int
	next map[byte]*MapSum
	end  bool
}

func Constructor() MapSum {
	return MapSum{
		val:  0,
		next: map[byte]*MapSum{},
		end:  false,
	}
}

func (this *MapSum) Insert(key string, val int) {
	root := this
	for i := 0; i < len(key); i++ {
		if _, ok := root.next[key[i]]; !ok {
			root.next[key[i]] = &MapSum{
				val:  0,
				next: map[byte]*MapSum{},
				end:  false,
			}
		}
		root = root.next[key[i]]
	}
	root.val = val
	root.end = true
}

func (this *MapSum) Sum(prefix string) int {
	root := this
	for i := 0; i < len(prefix); i++ {
		if _, ok := root.next[prefix[i]]; !ok {
			return 0
		}
		root = root.next[prefix[i]]
	}
	queue, total := []*MapSum{root}, 0
	if root.end {
		total += root.val
	}

	for len(queue) != 0 {
		parent := queue[0]
		queue = queue[1:]

		for _, child := range parent.next {
			if child.end {
				total += child.val
			}
			queue = append(queue, child)
		}
	}
	return total
}
