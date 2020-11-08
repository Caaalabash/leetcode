package problem1486

// 异或运算性质：
// 0 ^ x = x
// x ^ x = 0
// 2x ^ (2x+1) = 1
// 本题遍历一遍的做法就没有意义了，所以只有找出一个O(1)时间复杂度的做法，参考
// https://leetcode-cn.com/problems/xor-operation-in-an-array/solution/o1-wei-yun-suan-by-bruceyuj/
// 此处直接暴力了
func xorOperation(n int, start int) int {
	result := 0
	for i := 0; i < n; i++ {
		result ^= start + 2*i
	}
	return result
}
