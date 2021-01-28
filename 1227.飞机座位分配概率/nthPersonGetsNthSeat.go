package problem1227

// 有 n 位乘客即将登机，飞机正好有 n 个座位。第一位乘客的票丢了，他随便选了一个座位坐下。
// 剩下的乘客将会：
//   如果他们自己的座位还空着，就坐到自己的座位上
//   当他们自己的座位被占用时，随机选择其他座位
// 第 n 位乘客坐在自己的座位上的概率是多少？
func nthPersonGetsNthSeat(n int) float64 {
	if n == 1 {
		return 1
	}
	return 0.5
}
