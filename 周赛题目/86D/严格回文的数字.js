function isStrictlyPalindromic(n) {
    for (let i = 2; i <= n - 2; i++) {
        if (!isPalindromic(Number(n).toString(i))) {
            return false
        }
    }
    return true
}

function isPalindromic(str) {
    if (str.length <= 1) return true
    let left = 0, right = str.length - 1
    while (left < right) {
        if (str[left] === str[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
}