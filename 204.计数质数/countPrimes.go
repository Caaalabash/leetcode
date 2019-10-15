package _04_计数质数

// 暴力2048ms 1.9mb
func countPrimes(n int) int {
	count := 0
	for i := 0; i < n; i++ {
		if isPrime(i) {
			count++
		}
	}
	return count
}

// i*i < n很关键, 对理解埃拉托斯特尼筛法有帮助
// 12 = 2 * 6
// 12 = 3 * 4
// 12 = sqrt(12) * sqrt(12)
// 12 = 4 * 3
// 12 = 6 * 2
// 也就是: 如果在[2, sqrt(n)]区间没有发现可整除因子，就可以直接断定n是质数, [sqrt(n), n]区间没有价值了
func isPrime(n int) bool {
	if n <= 1 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

// 埃拉托斯特尼筛法: 先将2～n的各个数放入表中
// 1.在2的上面画一个圈, 然后划去2的其他倍数
// 2.第一个既没有画圈有没有被筛去的数是3
// 3.在3的上面画一个圈, 然后划区3的其他倍数
// 4.第一个既没有画圈又没有被筛去的数是5
// 5.类推, 一直到所有小于等于n的数都画圈/划去
func countPrimes1(n int) int {
	count := 0
	// 一开始数组原始全是false, 代表没有被筛去
	statusArr := make([]bool, n)

	for i := 2; i < n; i++ {
		// 被筛去了就给👴爬
		if statusArr[i] {
			continue
		}
		// 开始筛! 从i*i开始是一个优化点
		for j := i * i; j < n; j += i {
			statusArr[j] = true
		}
		count++
	}
	return count
}
