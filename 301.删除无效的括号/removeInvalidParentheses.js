// 回溯
// 考虑到一个字符串最多可能有 2^n 个子序列，每个子序列可能需要进行一次合法性检测，因此时间复杂度为O(n*2^n)
// 空间复杂度：O(n^2) 栈深度 * 递归时复制字符串
function removeInvalidParentheses(s) {
    const result = []
    // 利用括号匹配的规则求出该字符串s中最少需要去掉的左括号数目
    let lremove = 0
    let rremove = 0
    for (const c of s) {
        if (c === '(') {
            lremove++
        } else if (c === ')') {
            if (lremove === 0) {
                rremove++
            } else {
                lremove--
            }
        }
    }
    const backTrack = (str, start, lremove, rremove) => {
        if (lremove === 0 && rremove === 0) {
            if (isValid(str)) {
                result.push(str)
            }
            return
        }
        for (let i = start; i < str.length; i++) {
            // ((() 遇到连续相同的括号只需要搜索一次
            if (i !== start && str[i] === str[i - 1]) continue
            // 剩余字符数量小于等待删除数量
            if (str.length - i < lremove + rremove) {
                return
            }
            // 尝试去掉一个左括号
            if (lremove > 0 && str[i] === '(') {
                backTrack(str.substr(0, i) + str.substr(i + 1), i, lremove - 1, rremove)
            }
            // 尝试去掉一个右括号
            if (rremove > 0 && str[i] === ')') {
                backTrack(str.substr(0, i) + str.substr(i + 1), i, lremove, rremove - 1)
            }
        }
    }
    backTrack(s, 0, lremove, rremove)
    return result
}

// 判断是否是有效的括号
function isValid(str) {
    let left = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            left++
        } else if (str[i] === ')') {
            left--
            if (left < 0) {
                return false
            }
        }
    }
    return left === 0
}