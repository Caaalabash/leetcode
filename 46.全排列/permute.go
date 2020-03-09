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
		used      = make([]bool, len(nums))
		backTrack func(path []int)
	)
	backTrack = func(path []int) {
		if len(path) == len(nums) {
			temp := make([]int, len(path))
			copy(temp, path)
			result = append(result, temp)
			return
		}
		for i := 0; i < len(nums); i++ {
			if used[i] {
				continue
			}
			path = append(path, nums[i])
			used[i] = true
			backTrack(path)
			used[i] = false
			path = path[:len(path)-1]
		}
	}
	backTrack([]int{})
	return result
}
