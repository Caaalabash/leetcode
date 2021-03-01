package problem0334

import "math"

func increasingTriplet(nums []int) bool {
	a, b := math.MaxInt32, math.MaxInt32
	for _, num := range nums {
		if num <= a {
			a = num
		} else if num <= b {
			b = num
		} else {
			return true
		}
	}
	return false
}
