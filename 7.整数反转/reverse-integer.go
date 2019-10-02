package problem0007

import "math"

// 32位有符号整数反转后判断是否溢出, 数值范围: [-2^31, 2^31 -1]
// 2^31的个位数值: 8, 计算方式
// 2^31 = 2^10 * 2^10 * 2^10 * 2 => 从个位数看等价与 4 * 4 * 4 * 2 => 个位数值位8

// 通过循环将数字x的每一位拆开, 在计算新值时每一步都判断是否溢出
// 溢出条件有两个, 一个是大于整数最大值MAX_VALUE, 另一个是小于整数最小值MIN_VALUE, 设当前计算结果为ans, 下一位为pop

// 当 ans * 10 + pop > MAX_VALUE时, 有两种可能
//   1. 大的离谱: ans > MAX_VALUE / 10, 一定溢出
//   2. 大了一点: ans = MAX_VALUE / 10 && pop > 7

// 当 ans * 10 + pop < MAX_VALUE时, 有两种可能
//   1. 小的离谱: ans < MAX_VALUE / 10, 一定溢出
//   2. 小了一点: ans = MAX_VALUE / 10 && pop < -8

// 时间复杂度: 对于整数x, 需要循环log10(x)次, 结果为O(log(x))
// 空间复杂度: 结果为O(1)

// [-512, 511] 315
// 1. pop = 5 ans = 5 x = 31
// 2. pop = 1 ans = 51 x = 3
// 3. pop = 3 ans = 513 x = 0
func reverse(x int) int {
	var ans, pop int

	for x != 0 {
		pop = x % 10
		if ans > math.MaxInt32/10 ||
			ans == math.MaxInt32/10 && pop > 7 ||
			ans < math.MinInt32/10 ||
			ans == math.MinInt32 && pop < -8 {
			return 0
		}
		ans = ans*10 + pop
		x /= 10
	}
	return ans
}
