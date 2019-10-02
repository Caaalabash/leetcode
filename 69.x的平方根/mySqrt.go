package problem0069

// 二分法背诵内容
// 0. 划定边界: 边界内必须包含目标数值, 划分大了没关系, 毕竟对数级别
// 1. 选择中位数: 使用(left + right) >>> 1获得左中位数, (left + right + 1) >>> 1获得右中位数
// 2. 循环条件: 将循环条件写作 while (left < right), 循环退出时一定有left = right, 此时返回left还是right都可以
// 5. 循环内只写两个分支, 一个分支排除中位数, 另一个分支不排除中位数
// 6. 当候选区间只剩2个元素, 并且选择左中位数, 如果进入"中位数成为左边界的分支", 就会死循环
func mySqrt(x int) int {
	left, right := 0, x

	for left < right {
		mid := (left + right + 1) >> 1

		if mid*mid > x {
			right = mid - 1
		} else {
			left = mid
		}
	}

	return left
}
