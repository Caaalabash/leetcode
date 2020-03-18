package problem0046

// 双指针i, next
// 1. 保证i, next不越界
// 2. 保证i + 1 <= next
// 3. next需要在i的基础上继续向前探索，满足一定条件后调用i = next next = i+1
func trap(height []int) int {
	i, next, length, result := 0, 0, len(height), 0
OUTER:
	for i < length && next < length {
		// 初始化i, next
		if height[i] == 0 {
			i++
			next = i
			continue
		}
		// 如果 height[i] <= height[next] 直接蓄水
		// 否则继续向后寻找柱子j使得 height[j] >= height[next]，并另 next = j
		// 如果依旧 height[i] > height[next] 被迫蓄水
		if height[next] >= height[i] {
			for j := i + 1; j < next; j++ {
				result += height[i] - height[j]
			}
		} else {
			for j := next; j < length; j++ {
				if height[j] > height[next] {
					next = j
					continue OUTER
				}
			}
			for j := i + 1; j < next; j++ {
				result += height[next] - height[j]
			}
		}
		i = next
		next = i + 1
	}
	return result
}
