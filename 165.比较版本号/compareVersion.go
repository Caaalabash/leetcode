package problem0165

import (
	"strconv"
	"strings"
)

func compareVersion(version1 string, version2 string) int {
	slice1 := strings.Split(version1, ".")
	slice2 := strings.Split(version2, ".")
	diff := len(slice1) - len(slice2)

	if len(slice1) < len(slice2) {
		for i := 0; i <= -diff; i++ {
			slice1 = append(slice1, "0")
		}
	} else if len(slice1) > len(slice2) {
		for i := 0; i <= diff; i++ {
			slice2 = append(slice2, "0")
		}
	}
	for i := 0; i < len(slice1); i++ {
		patch1, _ := strconv.Atoi(slice1[i])
		patch2, _ := strconv.Atoi(slice2[i])

		if patch1 == patch2 {
			continue
		} else if patch1 > patch2 {
			return 1
		} else {
			return -1
		}
	}
	return 0
}
