package problem0313

import "container/heap"

type UglyNums []int

func (u *UglyNums) Push(x interface{}) {
	*u = append(*u, x.(int))
}

func (u *UglyNums) Pop() interface{} {
	n := len(*u)
	x := (*u)[n-1]
	*u = (*u)[0 : n-1]
	return x
}

func (u UglyNums) Swap(i, j int) {
	u[i], u[j] = u[j], u[i]
}

func (u UglyNums) Less(i, j int) bool {
	return u[i] < u[j]
}

func (u UglyNums) Len() int {
	return len(u)
}

func nthSuperUglyNumber(n int, primes []int) int {
	h := new(UglyNums)
	m := make(map[int]struct{})
	m[1] = struct{}{}
	heap.Push(h, 1)

	for i := 0; i < n-1; i++ {
		x := heap.Pop(h).(int)
		for i := 0; i < len(primes); i++ {
			val := x * primes[i]
			if _, ok := m[val]; !ok {
				heap.Push(h, val)
				m[val] = struct{}{}
			}
		}
	}
	return heap.Pop(h).(int)
}
