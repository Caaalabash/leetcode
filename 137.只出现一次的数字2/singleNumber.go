package problem0137

func singleNumber(nums []int) int {
	x1, x2, mask := 0, 0, 0
	for _, i := range nums {
		x2 ^= x1 & i
		x1 ^= i
		mask = ^(x2 & x1)
		x2 &= mask
		x1 &= mask
	}
	return x1
}
