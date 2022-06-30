function validPalindrome(s) {
    let i = 0, j = s.length - 1
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return isValid(s, i + 1, j) || isValid(s, i, j - 1)
        }
        i++
        j--
    }
    return true
}

function isValid(s, start, end) {
    let i = start
    let j = end
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false
        }
        i++
        j--
    }
    return true
}