package problem0190

func reverseBits(num uint32) uint32 {
	var result uint32
	// 32位, 所以移动32次
	for i := 0; i < 32; i++ {
		// 将result想像成一个传送带，每次左移一，腾出空间
		result <<= 1
		// 装上num的最后一位
		result += num & 1
		// num右移动1
		num >>= 1
	}
	return num
}
