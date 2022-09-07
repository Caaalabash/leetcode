// 超时
function generatePalindromes(s) {
    const n = s.length
    const result = new Set()
    const visited = new Array(n).fill(false)
    const backTrack = (str) => {
        if (str.length === n) {
            if (isPalindromes(str)) {
                result.add(str)
            }
            return
        }
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue
            visited[i] = true
            backTrack(str + s[i])
            visited[i] = false
        }
    }
    backTrack('')

    return [...result]
}

function isPalindromes(str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

// 优化办法
// 1. 如果奇数次字符超过1个，直接返回[]
// 2. 对偶数次字符的次数除以2，缩小规模
function generatePalindromes(s) {
    // 缩小规模
    const charCount = new Array(26).fill(0)
    for (const char of s) {
        charCount[char.charCodeAt() - 97]++
    }
    const options = []
    let oddIndex = -1
    for (let i = 0; i < 26; i++) {
        if (charCount[i] % 2 === 1) {
            if (oddIndex === -1) {
                oddIndex = i
            } else {
                return []
            }
        }
        for (let j = 0; j < Math.floor(charCount[i] / 2); j++) {
            options.push(String.fromCharCode(97 + i))
        }
    }
    // 全排列
    const n = options.length
    const result = new Set()
    const visited = new Array(n).fill(false)
    const backTrack = (str) => {
        if (str.length === n) {
            result.add(str)
            return
        }
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue
            visited[i] = true
            backTrack(str + options[i])
            visited[i] = false
        }
    }
    backTrack('')

    const oddStr = oddIndex === -1 ? '' : String.fromCharCode(97 + oddIndex)
    return [...result].map(str => `${str}${oddStr}${reverse(str)}`)
}

function reverse(str) {
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}