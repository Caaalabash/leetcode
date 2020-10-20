package problem0295

type MedianFinder struct {
	max []int
	min []int
}

func Constructor() MedianFinder {
	return MedianFinder{
		max: []int{},
		min: []int{},
	}
}

func (this *MedianFinder) AddNum(num int) {
	if len(this.max) > len(this.min) {
		// 最大堆多一个元素的分支
		if num > this.max[0] {
			this.min = append(this.min, num)
			up(this.min, len(this.min)-1, smaller)
		} else {
			this.min = append(this.min, this.max[0])
			up(this.min, len(this.min)-1, smaller)
			this.max[0] = num
			down(this.max, 0, bigger)
		}
	} else {
		if len(this.min) != 0 && num > this.min[0] {
			this.max = append(this.max, this.min[0])
			up(this.max, len(this.max)-1, bigger)
			this.min[0] = num
			down(this.min, 0, smaller)
		} else {
			this.max = append(this.max, num)
			up(this.max, len(this.max)-1, bigger)
		}
	}
}

func (this *MedianFinder) FindMedian() float64 {
	if len(this.max) == len(this.min) {
		return float64(this.max[0]+this.min[0]) / 2
	}
	return float64(this.max[0])
}

// 针对性的堆操作实现
type compareFunc func(i, j int) bool

func up(arr []int, i int, less compareFunc) {
	pIndex := (i - 1) / 2
	if less(arr[i], arr[pIndex]) {
		swap(arr, i, pIndex)
		up(arr, pIndex, less)
	}
}
func down(arr []int, i int, less compareFunc) {
	leftIndex := i*2 + 1
	if leftIndex >= len(arr) {
		return
	}
	if leftIndex+1 < len(arr) && less(arr[leftIndex+1], arr[leftIndex]) {
		leftIndex++
	}
	if less(arr[leftIndex], arr[i]) {
		swap(arr, i, leftIndex)
		down(arr, leftIndex, less)
	}
}
func bigger(i, j int) bool {
	return i > j
}
func smaller(i, j int) bool {
	return i < j
}
func swap(arr []int, i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}
