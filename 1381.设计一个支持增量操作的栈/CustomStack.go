package problem1381

type CustomStack struct {
	data []int
	size int
}

func Constructor(maxSize int) CustomStack {
	return CustomStack{
		data: make([]int, 0),
		size: maxSize,
	}
}

func (this *CustomStack) Push(x int) {
	if len(this.data) < this.size {
		this.data = append(this.data, x)
	}
}

func (this *CustomStack) Pop() int {
	if len(this.data) == 0 {
		return -1
	}
	last := this.data[len(this.data)-1]
	this.data = this.data[:len(this.data)-1]
	return last
}

func (this *CustomStack) Increment(k int, val int) {
	last := len(this.data)
	if last < k {
		last = k
	}
	for i := 0; i < last; i++ {
		this.data[i] += val
	}
}
