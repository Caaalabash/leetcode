package problem0445

type ListNode struct {
	Val  int
	Next *ListNode
}

type Stack struct {
	slice []int
}

func (this *Stack) isEmpty() bool {
	return len(this.slice) == 0
}

func (this *Stack) push(val int) {
	this.slice = append(this.slice, val)
}

func (this *Stack) pop() int {
	if this.isEmpty() {
		return 0
	}
	result := this.slice[len(this.slice)-1]
	this.slice = this.slice[:len(this.slice)-1]
	return result
}

// 栈！
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	stack1, stack2 := &Stack{slice: make([]int, 0)}, &Stack{slice: make([]int, 0)}
	for l1 != nil {
		stack1.push(l1.Val)
		l1 = l1.Next
	}
	for l2 != nil {
		stack2.push(l2.Val)
		l2 = l2.Next
	}
	var result *ListNode
	carry := 0
	for !stack1.isEmpty() || !stack2.isEmpty() || carry > 0 {
		carry += stack1.pop() + stack2.pop()

		node := &ListNode{Val: carry % 10, Next: result}
		result = node

		carry /= 10
	}
	return result
}
