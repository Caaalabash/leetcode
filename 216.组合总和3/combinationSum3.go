package problem0216

// 找出所有相加之和为n的k个数组合，每个数字只能在1-9之间，且一个组合内不能重复
// 输入：k = 3, n = 7
// 输出：[[1,2,4]]
// 思路：解集不能不含重复的组合 => backTrack需要一个index函数
//      需要返回一个二维数组 => backTrack需要一个path记录当前路径
//      每个数字只能在1-9之间且出现一个组合出现一次 => 频次数组[10]int{0, 1, 1, 1, 1, 1, 1, 1, 1, 1}
func combinationSum3(k int, n int) [][]int {
	var (
		result     [][]int
		letterList = [10]int{0, 1, 1, 1, 1, 1, 1, 1, 1, 1}
		backTrack  func(index int, sum int, path []int)
	)
	backTrack = func(index int, sum int, path []int) {
		if len(path) == k {
			if sum == n {
				temp := make([]int, len(path))
				copy(temp, path)
				result = append(result, temp)
			}
			return
		}
		for i := index; i < 10; i++ {
			if letterList[i] == 0 {
				continue
			}
			letterList[i]--
			path = append(path, i)
			backTrack(i+1, sum+i, path)
			path = path[:len(path)-1]
			letterList[i]++
		}
	}
	backTrack(1, 0, []int{})
	return result
}
