package problem1201

// 题目的标签是二分法，且数据范围在 1 < n,a,b,c <= 10^9，当n过大时，必超时，所以这道题需要全新的做法
// 本题丑数定义: 丑数是可以被 a 或 b 或 c 整除的 正整数，1不再是丑数

// 对于一个丑数X，如何确定它是第几个丑数？
// 结论：sequence = X/a + X/b + X/c - X/最小公倍数(ab) - X/最小公倍数(ac) - X/最小公倍数(bc) + X/最小公倍数(abc)
// 确定二分法的上下限：第n个丑数 <= n*min(a,b,c)
func nthUglyNumber(n int, a int, b int, c int) int {
	ab, ac, bc := lcm(a, b), lcm(a, c), lcm(b, c)
	abc := lcm(ab, c)
	left, right := 0, n*min(min(a, b), c)
	for left <= right {
		mid := (left + right) >> 1
		num := mid/a + mid/b + mid/c - mid/ab - mid/ac - mid/bc + mid/abc
		if n == num {
			if mid%a == 0 && mid%b == 0 && mid%c == 0 {
				return mid
			} else {
				// 此时会出现left = right的情况，因此最外面for循环不能是left < right
				right = mid - 1
			}
		} else if num > n {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return left
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func lcm(a, b int) int {
	return a * b / gcd(a, b)
}

func gcd(a, b int) int {
	if a%b == 0 {
		return b
	}
	return gcd(b, a%b)
}
