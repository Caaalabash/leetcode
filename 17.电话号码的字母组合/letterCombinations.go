package problem0017

var phoneMap = map[byte]string{
	'2': "abc",
	'3': "def",
	'4': "ghi",
	'5': "jkl",
	'6': "mno",
	'7': "pqrs",
	'8': "tuv",
	'9': "wxyz",
}

func letterCombinations(digits string) []string {
	var (
		result    []string
		backTrack func(path string, index int)
	)
	backTrack = func(path string, index int) {
		if len(path) == len(digits) {
			if path != "" {
				result = append(result, path)
			}
			return
		}
		options := phoneMap[digits[index]]
		for i := 0; i < len(options); i++ {
			path = path + string(options[i])
			backTrack(path, index+1)
			path = path[:len(path)-1]
		}
	}
	backTrack("", 0)
	return result
}
