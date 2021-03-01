package problem1013

func canThreePartsEqualSum(arr []int) bool {
	target := 0
	for _, num := range arr {
		target += num
	}
	if target%3 != 0 {
		return false
	}
	target = target / 3
	a, b := -1, -1
	curSum := 0
	for i := 0; i < len(arr); i++ {
		curSum += arr[i]
		if a == -1 && curSum == target {
			a = i
		} else if a != -1 && b == -1 && curSum == target*2 {
			b = i
		}
	}
	return b > a && b != len(arr)-1
}
