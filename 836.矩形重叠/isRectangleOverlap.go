package problem0836

// 将矩形重叠转换为区间重叠，不重叠有两种可能y轴不重叠 或者 x轴不重叠
// x1, y1, x2, y2 = rec0, rec1, rec2, rec3
func isRectangleOverlap(rec1 []int, rec2 []int) bool {
	return !(rec1[1] >= rec2[3] || rec1[3] <= rec2[1] || rec1[0] >= rec2[2] || rec1[2] <= rec2[0])
}
