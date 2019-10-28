package problem0071

import "strings"

func simplifyPath(path string) string {
	arr := strings.Split(path, "/")

	var res []string
	for i := 1; i < len(arr); i++ {
		if arr[i] == "." || arr[i] == "" {
			continue
		} else if arr[i] == ".." {
			if len(res) < 1 {
				res = []string{}
			} else {
				res = res[:len(res)-1]
			}
		} else {
			res = append(res, arr[i])
		}
	}
	return "/" + strings.Trim(strings.Join(res, "/"), "/")
}
