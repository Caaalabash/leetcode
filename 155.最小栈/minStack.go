package problem0155

type MinStack struct {
	nums []int
	min  []int
}

/** initialize your data structure here. */
func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(x int) {
	this.nums = append(this.nums, x)
	minTemp := x
	if len(this.min) > 0 {
		minTemp = this.min[len(this.min)-1]
		if minTemp > x {
			minTemp = x
		}
	}
	this.min = append(this.min, minTemp)
}

func (this *MinStack) Pop() {
	this.nums = this.nums[:len(this.nums)-1]
	this.min = this.min[:len(this.min)-1]
}

func (this *MinStack) Top() int {
	return this.nums[len(this.nums)-1]
}

func (this *MinStack) GetMin() int {
	return this.min[len(this.min)-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
