package problem0707

type ListNode struct {
	Val  int
	Next *ListNode
}

// 索引均从0开始，任何变动都需要维护tail节点和lens长度
type MyLinkedList struct {
	head *ListNode
	tail *ListNode
	lens int
}

func Constructor() MyLinkedList {
	return MyLinkedList{}
}

// 获取第index个节点的值，无效索引返回-1
func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index >= this.lens {
		return -1
	}
	head := this.head
	for i := 0; i < index; i++ {
		head = head.Next
	}
	return head.Val
}

func (this *MyLinkedList) DeleteAtHead() {
	if this.lens == 0 {
		return
	}
	this.head = this.head.Next
	if this.lens == 1 {
		this.tail = this.head
	}
	this.lens--
}

// 在链表第一个元素之前添加一个值为val的节点
func (this *MyLinkedList) AddAtHead(val int) {
	this.head = &ListNode{
		Val:  val,
		Next: this.head,
	}
	if this.lens == 0 {
		this.tail = this.head
	}
	this.lens++
}

func (this *MyLinkedList) DeleteAtTail() {
	if this.lens == 0 {
		return
	}
	head := this.head
	for head.Next != this.tail {
		head = head.Next
	}
	this.tail = head
	if this.lens == 1 {
		this.head = this.tail
	}
	this.lens--
}

// 将值为val的节点追加到链表的最后一个元素
func (this *MyLinkedList) AddAtTail(val int) {
	if this.lens == 0 {
		this.tail = &ListNode{
			Val:  val,
			Next: nil,
		}
		this.head = this.tail
	} else {
		this.tail.Next = &ListNode{
			Val:  val,
			Next: nil,
		}
		this.tail = this.tail.Next
	}
	this.lens++
}

// 在链表中第index节点之前添加值为val的节点，如果index=链表长度，添加在链表末尾，index>链表长度，无效，index<0，添加在链表头部
func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > this.lens {
		return
	}
	if index <= 0 {
		this.AddAtHead(val)
		return
	}
	if index == this.lens {
		this.AddAtTail(val)
		return
	}
	head := this.head
	for i := 1; i < index; i++ {
		head = head.Next
	}
	head.Next = &ListNode{
		Val:  val,
		Next: head.Next,
	}
	this.lens++
}

// 如果索引index有效，则删除第index个节点
func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index >= this.lens {
		return
	}
	if index == 0 {
		this.DeleteAtHead()
		return
	}
	if index == this.lens-1 {
		this.DeleteAtTail()
		return
	}
	head := this.head
	for i := 1; i < index; i++ {
		head = head.Next
	}
	head.Next = head.Next.Next
	this.lens--
}
