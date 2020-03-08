package problem0929

import "strings"

func numUniqueEmails(emails []string) int {
	m := make(map[string]struct{})
	count := 0

	for _, str := range emails {
		processedStr := processStr(str)
		if _, ok := m[processedStr]; !ok {
			m[processedStr] = struct{}{}
			count++
		}
	}
	return count
}

func processStr(str string) string {
	var sb strings.Builder
	var ignore bool
	for i := 0; i < len(str); i++ {
		if str[i] == '.' {
			continue
		}
		if str[i] == '+' {
			ignore = true
		}
		if !ignore {
			sb.WriteByte(str[i])
		}
		if str[i] == '@' {
			for j := i; j < len(str); j++ {
				sb.WriteByte(str[j])
			}
			break
		}
	}
	return sb.String()
}
