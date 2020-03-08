package problem0046

// 回溯算法的框架
// func backtrack(路径, 选择列表) {
//   if 满足结束条件 {
//     result = append(result, 路径)
//     return
//   }
// 	 for 选择 in 选择列表 {
// 	   做选择
//     backtrack(路径，选择列表)
//     撤销选择
// 	 }
// }
func permute(nums []int) [][]int {
	var (
		result    [][]int
		backTrack func(path []int)
	)
	backTrack = func(path []int) {
		if len(path) == len(nums) {
			result = append(result, path)
			return
		}
		for i := 0; i < len(nums); i++ {
			// 排除不能选择的数字
			hasDuplicate := false
			for j := 0; j < len(path); j++ {
				if path[j] == nums[i] {
					hasDuplicate = true
					break
				}
			}
			if hasDuplicate {
				continue
			}
			// 做选择，处理引用问题
			path = append(path, nums[i])
			temp := make([]int, len(path))
			copy(temp, path)
			// 进入下一层决策树
			backTrack(temp)
			// 撤销选择
			path = path[:len(path)-1]
		}
	}
	backTrack([]int{})
	return result
}
