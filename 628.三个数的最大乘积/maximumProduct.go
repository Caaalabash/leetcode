package problem0628

// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积
// 假设数组经过排序，[a, b, ... x, y, z]会出现两种情况
// 1. 三个数都是正数，即: x*y*z
// 2. 两个数都是负数，即: a*b*z
func maximumProduct(nums []int) int {
	// 三个正数
	x, y, z := -1001, -1001, -1001
	// 两个负数
	a, b := 1001, 1001
	for _, num := range nums {
		if num > z {
			z, y, x = num, z, y
		} else if num > y {
			y, x = num, y
		} else if num > x {
			x = num
		}
		if num < b {
			b, a = num, b
		} else if num < a {
			a = num
		}
	}
	return max(x*y*z, a*b*z)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
