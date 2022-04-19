// 自己想的nt做法
function shortestToChar(s, c) {
    const length = s.length
    const result = new Array(length)
    let left = undefined
    let right = undefined

    for (let i = 0; i < length; i++) {
        if (s[i] === c) {
            result[i] = 0
            if (left === undefined && right === undefined) {
                left = i
                for (let j = 0; j < left; j++) {
                    result[j] = left - j
                }
            } else {
                if (right !== undefined) {
                    left = right
                }
                right = i
                for (let j = left + 1; j < right; j++) {
                    result[j] = Math.min(j - left, right - j)
                }
            }
        }
    }
    const base = right || left
    for (let i = base + 1; i < length; i++) {
        result[i] = i - base
    }
    return result
}

// 神的做法，但是更慢
function shortestToChar(s, c) {
    const length = s.length
    const result = new Array(length)

    // idx初始化时需要一个不影响最终答案的idx，
    // 当idx还不确定的时候，idx尽量取远一点，临界点就是第一个元素往左推n，第n个元素往右推n，所以就是0-n和n+n
    let idx = -length
    for (let i = 0; i < length; i++) {
        if (s[i] === c) {
            idx = i
        }
        result[i] = i - idx
    }
    idx = length * 2
    for (let i = length - 1; i >= 0; i--) {
        if (s[i] === c) {
            idx = i
        }
        result[i] = Math.min(result[i], idx - i)
    }
    return result
}