package problem0381

import "math/rand"

// 这道题和380类似，要点如下
// 1. 为了在O(1)的时间复杂度内能够获取一个元素 => 需要将所有数存储在一个数组中
// 2. 数组如何实现删除O(1)？ => 列表元素顺序不重要时，将其交换到最后，然后删除即可
type RandomizedCollection struct {
	idx  map[int]map[int]struct{}
	nums []int
}

/** Initialize your data structure here. */
func Constructor() RandomizedCollection {
	return RandomizedCollection{
		idx: map[int]map[int]struct{}{},
	}
}

/** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
func (r *RandomizedCollection) Insert(val int) bool {
	ids, has := r.idx[val]
	if !has {
		ids = map[int]struct{}{}
		r.idx[val] = ids
	}
	ids[len(r.nums)] = struct{}{}
	r.nums = append(r.nums, val)
	return !has
}

/** Removes a value from the collection. Returns true if the collection contained the specified element. */
func (r *RandomizedCollection) Remove(val int) bool {
	ids, has := r.idx[val]
	if !has {
		return false
	}
	var i int
	for id := range ids {
		i = id
		break
	}
	n := len(r.nums)
	r.nums[i] = r.nums[n-1]
	delete(ids, i)
	delete(r.idx[r.nums[i]], n-1)
	if i < n-1 {
		r.idx[r.nums[i]][i] = struct{}{}
	}
	if len(ids) == 0 {
		delete(r.idx, val)
	}
	r.nums = r.nums[:n-1]
	return true
}

/** Get a random element from the collection. */
func (r *RandomizedCollection) GetRandom() int {
	return r.nums[rand.Intn(len(r.nums))]
}
