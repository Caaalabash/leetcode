package problem0084

import "math"

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
func maxs(list ...int) int {
	result := math.MinInt32
	for _, v := range list {
		if v > result {
			result = v
		}
	}
	return result
}

// 暴力做法 - 超时
// 观察后可以发现最大面积 = Min(heights[i], heights[j]) * (i - j)
// 例如：heights数组的最大矩形面积 = heights数组的最小值 * 数组长度
// 时间复杂度 O(n3): O(n2)枚举出所有柱子对，O(n)找到柱子对中的最小柱子
// 空间复杂度 O(1)
func largestRectangleArea(heights []int) int {
	result := 0
	for i := 0; i < len(heights); i++ {
		for j := i; j < len(heights); j++ {
			minValue := math.MaxInt32
			for k := i; k <= j; k++ {
				minValue = min(minValue, heights[k])
			}
			result = max(result, minValue*(j-i+1))
		}
	}
	return result
}

// 暴力优化1：优化O(n)的找最小柱子时间
// 时间复杂度 O(n2): O(n2)枚举出所有柱子对
// 空间复杂度 O(1)
func largestRectangleArea1(heights []int) int {
	result := 0
	for i := 0; i < len(heights); i++ {
		minValue := math.MaxInt32
		for j := i; j < len(heights); j++ {
			minValue = min(minValue, heights[j])
			result = max(result, minValue*(j-i+1))
		}
	}
	return result
}

// 分治: 确定了最矮柱子pivot之后，探索其左右两边
// 时间复杂度：Onlogn ~ On2
// 空间复杂度：最坏情况On
func largestRectangleArea2(heights []int) int {
	var divideAndConquer func(start int, end int) int
	divideAndConquer = func(start int, end int) int {
		if start > end {
			return 0
		}
		minIndex := start
		for i := start; i <= end; i++ {
			if heights[i] < heights[minIndex] {
				minIndex = i
			}
		}
		return maxs(heights[minIndex]*(end-start+1), divideAndConquer(start, minIndex-1), divideAndConquer(minIndex+1, end))
	}
	return divideAndConquer(0, len(heights)-1)
}

// 栈
type Stack struct {
	s []int
}

func NewStack() *Stack {
	return &Stack{s: make([]int, 0)}
}
func (this *Stack) IsEmpty() bool {
	return len(this.s) == 0
}
func (this *Stack) Top() int {
	if this.IsEmpty() {
		return 0
	}
	return this.s[len(this.s)-1]
}
func (this *Stack) Pop() int {
	if this.IsEmpty() {
		return 0
	}
	t := this.s[len(this.s)-1]
	this.s = this.s[:len(this.s)-1]
	return t
}
func (this *Stack) Push(val int) {
	this.s = append(this.s, val)
}

// 解题思路：
// 以柱子i为中心，向左向右拓展，分别找到柱子left，right，满足heights[left/right] < height (将数组之外的高度视为0)
// 那么以i为中心的最大面积所在区域为开区间(height[left], height[right]) 面积计算公式为：heights[i] * (right-left-1)
// 为什么会想到单调栈：
// 因为单调栈的特性，比栈顶大就入栈，比栈顶小就一直出栈，直到比栈顶大。
// 在一直出栈的过程中，可以得到left，right，height[i]
func largestRectangleArea3(heights []int) int {
	res := 0
	heights = append([]int{0}, heights...)
	heights = append(heights, 0)
	stack := NewStack()
	stack.Push(0)
	for i := 1; i < len(heights); i++ {
		for heights[i] < heights[stack.Top()] {
			h := heights[stack.Pop()]
			left, right := stack.Top(), i
			res = max(res, h*(right-left-1))
		}
		stack.Push(i)
	}
	return res
}

func main() {
	largestRectangleArea([]int{4, 6, 1, 7, 3})
}
