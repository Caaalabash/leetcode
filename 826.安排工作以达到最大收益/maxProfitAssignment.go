package problem0826

import "sort"

// 工作难度：difficulty[i]
// 工作收益：profit[i]
// 工人能力：worker[i]
// 妥善安排求最大收益
// 这里显然要将difficulty和profit捆绑为job，然后对job和worker进行排序，然后去安排工作即可
func maxProfitAssignment(difficulty []int, profit []int, worker []int) int {
	// difficulty和profit捆绑为job
	var jobs [][2]int
	for i := range difficulty {
		jobs = append(jobs, [2]int{difficulty[i], profit[i]})
	}
	// 排序worker, jobs
	sort.Ints(worker)
	sort.SliceStable(jobs, func(i, j int) bool { return jobs[i][0] <= jobs[j][0] })
	// 每个工作可以完成多次 = 前面的人有事儿做，后面的人一定有事儿做
	maxProfit := 0
	jobIndex := 0
	atLeastCanDo := 0
	for _, skill := range worker {
		for jobIndex < len(jobs) && skill >= jobs[jobIndex][0] {
			atLeastCanDo = max(atLeastCanDo, jobs[jobIndex][1])
			jobIndex++
		}
		maxProfit += atLeastCanDo
	}

	return maxProfit
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
