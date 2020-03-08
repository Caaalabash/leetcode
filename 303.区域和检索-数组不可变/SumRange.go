package problem0303

// 方法1：脑瘫dp
// dp[i][j]代表从索引i到j范围内的元素总和
// 边界值：dp[i][i] = nums[i]
// 状态转移方程：dp[i][j] = dp[i][j-1] + nums[j]
type NumArray struct {
	dp [][]int
}

func Constructor(nums []int) NumArray {
	lens := len(nums)
	dp := make([][]int, lens)
	for i := 0; i < lens; i++ {
		dp[i] = make([]int, lens)
	}
	for i := 0; i < lens; i++ {
		for j := i; j < lens; j++ {
			if j != i {
				dp[i][j] = dp[i][j-1] + nums[j]
			} else {
				dp[i][i] = nums[i]
			}
		}
	}
	return NumArray{dp}
}

func (this *NumArray) SumRange(i int, j int) int {
	return this.dp[i][j]
}

// 方法2：求前缀和，然后做减法
type NumArray1 struct {
	list []int
}

func Constructor1(nums []int) NumArray1 {
	list := make([]int, len(nums)+1)

	for i := 0; i < len(nums); i++ {
		list[i+1] = list[i] + nums[i]
	}
	return NumArray1{list}
}

func (this *NumArray1) SumRange1(i int, j int) int {
	return this.list[j+1] - this.list[i]
}
