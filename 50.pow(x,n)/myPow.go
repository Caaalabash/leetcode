package problem0050

// 计算x的n次幂，标签二分法，显然不能乘以n次x，而要考虑O(log n)的时间复杂度 ==> 快速幂（二进制取幂）
// 3^13 = 3^(1101) = 3^8 * 3^4 * 3^1 ==> 为了计算x^n, 只需要将n的二进制位为1的幂乘起来就行了
func myPow(x float64, n int) float64 {
	if n >= 0 {
		return binPow(x, n)
	}
	return 1.0 / binPow(x, -n)
}

func binPow(x float64, n int) float64 {
	if n == 0 {
		return 1.0
	}
	result := 1.0
	for n > 0 {
		if n&1 == 1 {
			result *= x
		}
		x *= x
		n >>= 1
	}
	return result
}
