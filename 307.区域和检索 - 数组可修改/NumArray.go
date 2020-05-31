package problem0307

// 线段树的实现
type SegmentTree struct {
	start    int
	end      int
	property int
	left     *SegmentTree
	right    *SegmentTree
}

func buildSegmentTree(start int, end int, nums []int) *SegmentTree {
	if start > end {
		return nil
	}
	if start == end {
		return &SegmentTree{
			start:    start,
			end:      end,
			property: nums[start],
			left:     nil,
			right:    nil,
		}
	}
	mid := (start + end) >> 1
	left := buildSegmentTree(start, mid, nums)
	right := buildSegmentTree(mid+1, end, nums)
	return &SegmentTree{
		start:    start,
		end:      end,
		property: left.property + right.property,
		left:     left,
		right:    right,
	}
}

func (this *SegmentTree) updateSegmentTree(i int, val int) {
	if this.start == i && this.end == i {
		this.property = val
		return
	}
	mid := (this.start + this.end) >> 1
	if i <= mid {
		this.left.updateSegmentTree(i, val)
	} else {
		this.right.updateSegmentTree(i, val)
	}
	this.property = this.left.property + this.right.property
}

func (this *SegmentTree) rangeSegmentTree(i int, j int) int {
	if this.start == i && this.end == j {
		return this.property
	}
	mid := (this.start + this.end) >> 1
	if j <= mid {
		return this.left.rangeSegmentTree(i, j)
	} else if i > mid {
		return this.right.rangeSegmentTree(i, j)
	} else {
		return this.left.rangeSegmentTree(i, mid) + this.right.rangeSegmentTree(mid+1, j)
	}
}

// 给定一个整数数组nums，求出索引[i, j]范围内的和
// update(i, val)可以将下标为i的数值更新为val
type NumArray struct {
	segment *SegmentTree
}

func Constructor(nums []int) NumArray {
	return NumArray{
		segment: buildSegmentTree(0, len(nums)-1, nums),
	}
}

func (this *NumArray) Update(i int, val int) {
	this.segment.updateSegmentTree(i, val)
}

func (this *NumArray) SumRange(i int, j int) int {
	return this.segment.rangeSegmentTree(i, j)
}
