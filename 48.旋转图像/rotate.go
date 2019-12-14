package problem0048

// 旋转90度，也就是【i】和【n-1-i】以及【j】和【n-1-j】的一种组合，组合如下
// (i,j) => (j,n-1-i) => (n-1-i,n-1-j) => (n-1-j,i)
// i的值理解为"洋葱皮的厚度", 即 n/2
// j的值则在i~n-1-i内
func rotate(matrix [][]int) {
	n := len(matrix)
	for i := 0; i < n/2; i++ {
		for j := i; j < n-1-i; j++ {
			matrix[i][j], matrix[j][n-1-i], matrix[n-1-i][n-1-j], matrix[n-j-1][i] = matrix[n-j-1][i], matrix[i][j], matrix[j][n-1-i], matrix[n-1-i][n-1-j]
		}
	}
}
