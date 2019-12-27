package problem0380

import "math/rand"

// 使用哈希表+切片完成，切片保存插入的数字，哈希表保存对应数字的索引
type RandomizedSet struct {
	hashMap map[int]int
	array   []int
}

func Constructor() RandomizedSet {
	return RandomizedSet{make(map[int]int), make([]int, 0)}
}

func (this *RandomizedSet) Insert(val int) bool {
	if _, ok := this.hashMap[val]; ok {
		return false
	} else {
		this.array = append(this.array, val)
		this.hashMap[val] = len(this.array) - 1
		return true
	}
}

func (this *RandomizedSet) Remove(val int) bool {
	if valIndex, ok := this.hashMap[val]; ok {
		lastIndex := len(this.array) - 1
		this.hashMap[this.array[lastIndex]] = valIndex
		this.array[valIndex], this.array[lastIndex] = this.array[lastIndex], this.array[valIndex]
		this.array = this.array[:lastIndex]
		delete(this.hashMap, val)
		return true
	} else {
		return false
	}
}

func (this *RandomizedSet) GetRandom() int {
	randomIndex := rand.Intn(len(this.array))
	return this.array[randomIndex]
}
