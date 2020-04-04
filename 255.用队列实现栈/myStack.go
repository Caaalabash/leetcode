package problem0255

type MyStack struct {
	list []int
}

func Constructor() MyStack {
	return MyStack{}
}

func (this *MyStack) Push(x int) {
	this.list = append(this.list, x)
}

func (this *MyStack) Pop() int {
	r := this.list[len(this.list)-1]
	this.list = this.list[:len(this.list)-1]
	return r
}

func (this *MyStack) Top() int {
	if len(this.list) == 0 {
		return -1
	}
	return this.list[len(this.list)-1]
}

func (this *MyStack) Empty() bool {
	return len(this.list) == 0
}
