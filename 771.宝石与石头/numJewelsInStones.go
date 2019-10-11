package problem771

func numJewelsInStones(J string, S string) int {
	var result int
	m := make(map[byte]struct{}, len(J))
	for i := 0; i < len(J); i++ {
		m[J[i]] = struct{}{}
	}
	for i := 0; i < len(S); i++ {
		if _, ok := m[S[i]]; ok {
			result++
		}
	}
	return result
}
