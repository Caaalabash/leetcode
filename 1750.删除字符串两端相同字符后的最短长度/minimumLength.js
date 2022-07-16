// 感觉题不好读懂呢。

// 1 <= s.length <= 10^5
// s 只包含 a,b,c
// 显然是贪心 + 双指针：
function minimumLength(s) {
    const length = s.length
    let left = 0
    let right = length - 1

    while (left < right && s.charAt(left) === s.charAt(right)) {
        const pivot = s.charAt(left)

        while (left + 1 <= right && s.charAt(left + 1) === pivot) {
            left++
        }
        while (right - 1 >= left && s.charAt(right - 1) === pivot) {
            right--
        }
        if (left >= right && s.charAt(left) === s.charAt(right)) {
            return 0
        }
        left++
        right--
    }

    return right - left + 1
}
